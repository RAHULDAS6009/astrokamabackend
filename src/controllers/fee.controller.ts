import { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";
import crypto from "crypto";
import { razorpay } from "../config/razorpay.js";

export const feeController = {
  // ===============================
  // ADMIN → GET ALL FEES
  // ===============================
  getAllFees: async (req: Request, res: Response) => {
    try {
      const fees = await prisma.fee.findMany({
        include: {
          student: {
            select: {
              id: true,
              studentId: true,
              name: true,
              email: true,
              courseMode: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
      });

      res.json({
        success: true,
        data: fees,
      });
    } catch (error) {
      console.error("Error fetching fees:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch fees",
      });
    }
  },

  // ===============================
  // STUDENT → GET OWN FEES
  // ===============================
  getStudentFees: async (req: Request, res: Response) => {
    try {
      if (!req.user?.id) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const fees = await prisma.fee.findMany({
        where: { studentId: req.user.id },
        orderBy: { createdAt: "desc" },
      });

      res.json({
        success: true,
        data: fees,
      });
    } catch (error) {
      console.error("Error fetching student fees:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch student fees",
      });
    }
  },

  // ===============================
  // GET RAZORPAY KEY (SECURE)
  // ===============================
  getRazorpayKey: async (req: Request, res: Response) => {
    try {
      if (!process.env.RAZORPAY_KEY_ID) {
        return res.status(500).json({
          success: false,
          message: "Razorpay configuration missing",
        });
      }

      // Only send the key_id, never the secret
      res.json({
        success: true,
        key: process.env.RAZORPAY_KEY_ID,
      });
    } catch (error) {
      console.error("Error fetching Razorpay key:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch payment key",
      });
    }
  },

  // ===============================
  // STEP 1 → CREATE RAZORPAY ORDER
  // ===============================
  createOrder: async (req: Request, res: Response) => {
    try {
      if (!req.user?.id) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const { semesterId, amount, description } = req.body;

      // Validation
      if (!amount || amount <= 0) {
        return res.status(400).json({
          success: false,
          message: "Invalid amount",
        });
      }

      if (!semesterId) {
        return res.status(400).json({
          success: false,
          message: "Semester ID is required",
        });
      }

      // Verify student exists and has access to this semester
      const student = await prisma.student.findUnique({
        where: { id: req.user.id },
        include: {
          branch: {
            include: {
              semsters: true,
            },
          },
        },
      });

      if (!student) {
        return res.status(404).json({
          success: false,
          message: "Student not found",
        });
      }

      // Check if semester belongs to student's branch
      const semesterExists = student.branch?.semsters?.some(
        (sem) => sem.id === semesterId
      );

      if (!semesterExists) {
        return res.status(403).json({
          success: false,
          message: "Invalid semester for this student",
        });
      }

      // Create Razorpay order
      const order = await razorpay.orders.create({
        amount: Math.round(amount * 100), // Convert ₹ → paise
        currency: "INR",
        receipt: `rcpt_${student.studentId}_${Date.now()}`,
        notes: {
          description,
          studentId: String(student.id),
          studentEnrollmentId: student.studentId,
          semesterId,
        },
      });

      res.json({
        success: true,
        data: order,
      });
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({
        success: false,
        message: "Order creation failed",
      });
    }
  },

  // ===============================
  // STEP 2 → VERIFY PAYMENT + SAVE FEE
  // ===============================
  verifyPayment: async (req: Request, res: Response) => {
    try {
      if (!req.user?.id) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const {
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
        semesterId,
        amount,
        description,
        lateFine = 0,
      } = req.body;

      // Validation
      if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
        return res.status(400).json({
          success: false,
          message: "Missing Razorpay credentials",
        });
      }

      if (!semesterId || !amount) {
        return res.status(400).json({
          success: false,
          message: "Missing required payment details",
        });
      }

      // -------------------------------
      // 🔐 VERIFY SIGNATURE
      // -------------------------------
      const sign = razorpay_order_id + "|" + razorpay_payment_id;

      const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
        .update(sign)
        .digest("hex");

      if (expectedSignature !== razorpay_signature) {
        console.error("Signature mismatch:", {
          expected: expectedSignature,
          received: razorpay_signature,
        });

        return res.status(400).json({
          success: false,
          message: "Payment verification failed - Invalid signature",
        });
      }

      // -------------------------------
      // CHECK FOR DUPLICATE PAYMENT
      // -------------------------------
      const existingPayment = await prisma.fee.findFirst({
        where: {
          OR: [
            { paymentId: razorpay_payment_id },
            { orderId: razorpay_order_id },
          ],
        },
      });

      if (existingPayment) {
        return res.status(400).json({
          success: false,
          message: "Payment already recorded",
        });
      }

      // -------------------------------
      // 💾 STORE VERIFIED PAYMENT
      // -------------------------------
      const fee = await prisma.fee.create({
        data: {
          studentId: req.user.id,
          semesterId,
          amount: parseFloat(String(amount)),
          lateFine: parseFloat(String(lateFine)) || 0,
          description: description || "Fee Payment",
          paymentMode: "Online - Razorpay",
          paymentDate: new Date(),
          paymentId: razorpay_payment_id,
          orderId: razorpay_order_id,
          status: "Paid",
        },
      });

      return res.json({
        success: true,
        message: "Payment successful",
        data: fee,
      });
    } catch (error) {
      console.error("Error verifying payment:", error);
      res.status(500).json({
        success: false,
        message: "Unable to verify payment",
      });
    }
  },

  // ===============================
  // OPTIONAL: GET FEE SUMMARY
  // ===============================
  getFeeSummary: async (req: Request, res: Response) => {
    try {
      if (!req.user?.id) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const { semesterId } = req.query;

      const where: any = { studentId: req.user.id };
      if (semesterId) {
        where.semesterId = String(semesterId);
      }

      const fees = await prisma.fee.findMany({
        where,
        orderBy: { createdAt: "desc" },
      });

      const summary = {
        totalPaid: fees
          .filter((f) => f.status === "Paid")
          .reduce((sum, f) => sum + f.amount + (f.lateFine || 0), 0),
        totalPending: fees
          .filter((f) => f.status === "Pending")
          .reduce((sum, f) => sum + f.amount + (f.lateFine || 0), 0),
        totalLateFine: fees.reduce((sum, f) => sum + (f.lateFine || 0), 0),
        paidCount: fees.filter((f) => f.status === "Paid").length,
        pendingCount: fees.filter((f) => f.status === "Pending").length,
        fees,
      };

      res.json({
        success: true,
        data: summary,
      });
    } catch (error) {
      console.error("Error fetching fee summary:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch fee summary",
      });
    }
  },
};
