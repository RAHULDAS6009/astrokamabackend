import { Request, Response } from "express";
import crypto from "crypto";
import { prisma } from "../lib/prisma.js";
import { razorpay } from "../config/razorpay.js";

export const studentPaymentController = {
  // ===============================
  // GET RAZORPAY KEY
  // ===============================
  getRazorpayKey: async (req: Request, res: Response) => {
    try {
      res.json({
        success: true,
        key: process.env.RAZORPAY_KEY_ID,
      });
    } catch (error) {
      console.error("Error getting Razorpay key:", error);
      res.status(500).json({
        success: false,
        message: "Failed to get payment key",
      });
    }
  },

  // ===============================
  // CREATE RAZORPAY ORDER
  // ===============================
  createOrder: async (req: Request, res: Response) => {
    try {
      const { semesterId, amount, description } = req.body;
      const studentId = req.user?.id;

      if (!studentId) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      if (!semesterId || !amount || !description) {
        return res.status(400).json({
          success: false,
          message: "Missing required fields",
        });
      }

      // Verify student exists
      const student = await prisma.student.findUnique({
        where: { id: studentId },
      });

      if (!student) {
        return res.status(404).json({
          success: false,
          message: "Student not found",
        });
      }

      // Verify semester exists
      const semester = await prisma.semester.findUnique({
        where: { id: semesterId },
      });

      if (!semester) {
        return res.status(404).json({
          success: false,
          message: "Semester not found",
        });
      }

      // Create Razorpay order
      const options = {
        amount: Math.round(parseFloat(amount) * 100), // Convert to paise
        currency: "INR",
        receipt: `rcpt_${studentId}_${Date.now()}`,
        notes: {
          studentId: studentId.toString(),
          semesterId: semesterId,
          description: description,
        },
      };

      const order = await razorpay.orders.create(options);

      console.log("✅ Razorpay order created:", order.id);

      res.json({
        success: true,
        data: order,
      });
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({
        success: false,
        message: "Failed to create payment order",
      });
    }
  },

  // ===============================
  // VERIFY PAYMENT & CREATE FEE RECORD
  // ===============================
  verifyPayment: async (req: Request, res: Response) => {
    try {
      const {
        razorpay_payment_id,
        razorpay_order_id,
        razorpay_signature,
        semesterId,
        amount,
        description,
        lateFine = 0,
      } = req.body;

      const studentId = req.user?.id;

      if (!studentId) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      // Verify signature
      const body = razorpay_order_id + "|" + razorpay_payment_id;
      const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
        .update(body.toString())
        .digest("hex");

      if (expectedSignature !== razorpay_signature) {
        console.error("❌ Payment signature verification failed");
        return res.status(400).json({
          success: false,
          message: "Payment verification failed",
        });
      }

      console.log("✅ Payment signature verified");

      // Check if payment already recorded (prevent duplicates)
      const existingPayment = await prisma.fee.findFirst({
        where: {
          studentId,
          paymentId: razorpay_payment_id,
        },
      });

      if (existingPayment) {
        console.log("⚠️ Payment already recorded");
        return res.json({
          success: true,
          message: "Payment already recorded",
          data: existingPayment,
        });
      }

      // Create fee record
      const fee = await prisma.fee.create({
        data: {
          studentId,
          semesterId,
          amount: parseFloat(amount),
          lateFine: parseFloat(lateFine) || 0,
          description: description,
          paymentMode: "Online - Razorpay",
          paymentDate: new Date(),
          status: "Paid",
          paymentId: razorpay_payment_id,
          orderId: razorpay_order_id,
        },
        include: {
          student: {
            select: {
              id: true,
              studentId: true,
              name: true,
              email: true,
            },
          },
          semester: {
            select: {
              id: true,
              name: true,
              number: true,
            },
          },
        },
      });

      console.log("✅ Payment recorded in database:", fee.id);

      res.json({
        success: true,
        message: "Payment verified and recorded successfully",
        data: fee,
      });
    } catch (error) {
      console.error("❌ Error verifying payment:", error);
      res.status(500).json({
        success: false,
        message: "Failed to verify payment",
      });
    }
  },

  // ===============================
  // GET PAYMENT HISTORY
  // ===============================
  getPaymentHistory: async (req: Request, res: Response) => {
    try {
      const studentId = req.user?.id;

      if (!studentId) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const payments = await prisma.fee.findMany({
        where: {
          studentId,
          status: "Paid",
        },
        include: {
          semester: {
            select: {
              id: true,
              name: true,
              number: true,
            },
          },
        },
        orderBy: {
          paymentDate: "desc",
        },
      });

      res.json({
        success: true,
        data: payments,
      });
    } catch (error) {
      console.error("Error fetching payment history:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch payment history",
      });
    }
  },
};
