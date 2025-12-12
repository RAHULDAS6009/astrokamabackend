import { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export const adminFeeController = {
  // ===============================
  // GET ALL FEES (Admin View)
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
          semester: {
            select: {
              id: true,
              name: true,
              number: true,
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
  // GET FEES BY STUDENT ID
  // ===============================
  getStudentFees: async (req: Request, res: Response) => {
    try {
      const { studentId } = req.params;

      const student = await prisma.student.findUnique({
        where: { id: parseInt(studentId) },
        include: {
          fees: {
            orderBy: { createdAt: "desc" },
          },
        },
      });

      if (!student) {
        return res.status(404).json({
          success: false,
          message: "Student not found",
        });
      }

      res.json({
        success: true,
        data: student.fees,
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
  // MANUAL PAYMENT ENTRY (Admin)
  // ===============================
  createManualPayment: async (req: Request, res: Response) => {
    try {
      const {
        studentId,
        semesterId,
        amount,
        lateFine = 0,
        description,
        paymentMode,
        paymentDate,
      } = req.body;

      // Validate
      if (
        !studentId ||
        !semesterId ||
        !amount ||
        !paymentMode ||
        !paymentDate
      ) {
        return res.status(400).json({
          success: false,
          message: "Missing required fields",
        });
      }

      // Verify student
      const student = await prisma.student.findUnique({
        where: { id: parseInt(studentId) },
      });

      if (!student) {
        return res.status(404).json({
          success: false,
          message: "Student not found",
        });
      }

      // Verify semester
      const semester = await prisma.semester.findUnique({
        where: { id: semesterId },
      });

      if (!semester) {
        return res.status(404).json({
          success: false,
          message: "Semester not found",
        });
      }

      // Extract month & year for Monthly Fee
      let month: string | null = null;
      let year: number | null = null;

      if (description === "Monthly Fee") {
        const dateObj = new Date(paymentDate);
        const monthNames = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];

        month = monthNames[dateObj.getMonth()];
        year = dateObj.getFullYear();
      }

      // Check duplicate for Monthly Fee
      if (description === "Monthly Fee") {
        const duplicate = await prisma.fee.findFirst({
          where: {
            studentId: parseInt(studentId),
            semesterId,
            description: `Month ${month?.slice(0, 3)}-${year
              ?.toString()
              .slice(2)}`,
            status: "Paid",
          },
        });

        if (duplicate) {
          return res.status(400).json({
            success: false,
            message: `Payment for ${month} ${year} already exists`,
          });
        }
      }

      // Create fee record
      const fee = await prisma.fee.create({
        data: {
          studentId: parseInt(studentId),
          semesterId,
          amount: parseFloat(amount),
          lateFine: parseFloat(lateFine) || 0,
          description: description || "Manual Payment",
          paymentMode,
          paymentDate: new Date(paymentDate),
          month,
          year,
          status: "Paid",
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

      res.json({
        success: true,
        message: "Manual payment recorded successfully",
        data: fee,
      });
    } catch (error) {
      console.error("Error creating manual payment:", error);
      res.status(500).json({
        success: false,
        message: "Failed to record manual payment",
      });
    }
  },

  // ===============================
  // UPDATE PAYMENT
  // ===============================
  updatePayment: async (req: Request, res: Response) => {
    try {
      const { feeId } = req.params;
      const { amount, lateFine, paymentMode, paymentDate, status } = req.body;

      const fee = await prisma.fee.update({
        where: { id: parseInt(feeId) },
        data: {
          ...(amount && { amount: parseFloat(amount) }),
          ...(lateFine !== undefined && { lateFine: parseFloat(lateFine) }),
          ...(paymentMode && { paymentMode }),
          ...(paymentDate && { paymentDate: new Date(paymentDate) }),
          ...(status && { status }),
        },
        include: {
          student: {
            select: {
              id: true,
              studentId: true,
              name: true,
            },
          },
        },
      });

      res.json({
        success: true,
        message: "Payment updated successfully",
        data: fee,
      });
    } catch (error) {
      console.error("Error updating payment:", error);
      res.status(500).json({
        success: false,
        message: "Failed to update payment",
      });
    }
  },

  // ===============================
  // DELETE PAYMENT
  // ===============================
  deletePayment: async (req: Request, res: Response) => {
    try {
      const { feeId } = req.params;

      await prisma.fee.delete({
        where: { id: parseInt(feeId) },
      });

      res.json({
        success: true,
        message: "Payment deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting payment:", error);
      res.status(500).json({
        success: false,
        message: "Failed to delete payment",
      });
    }
  },

  // ===============================
  // GET FEE STATISTICS
  // ===============================
  getFeeStatistics: async (req: Request, res: Response) => {
    try {
      const { semesterId, startDate, endDate } = req.query;

      const where: any = {};

      if (semesterId) {
        where.semesterId = String(semesterId);
      }

      if (startDate && endDate) {
        where.paymentDate = {
          gte: new Date(String(startDate)),
          lte: new Date(String(endDate)),
        };
      }

      const fees = await prisma.fee.findMany({ where });

      const statistics = {
        totalCollected: fees
          .filter((f) => f.status === "Paid")
          .reduce((sum, f) => sum + f.amount + (f.lateFine || 0), 0),
        totalPending: fees
          .filter((f) => f.status === "Pending")
          .reduce((sum, f) => sum + f.amount, 0),
        totalLateFine: fees.reduce((sum, f) => sum + (f.lateFine || 0), 0),
        paidCount: fees.filter((f) => f.status === "Paid").length,
        pendingCount: fees.filter((f) => f.status === "Pending").length,
        onlinePayments: fees.filter(
          (f) =>
            f.paymentMode?.toLowerCase().includes("razorpay") &&
            f.status === "Paid"
        ).length,
        manualPayments: fees.filter(
          (f) =>
            !f.paymentMode?.toLowerCase().includes("razorpay") &&
            f.status === "Paid"
        ).length,
      };

      res.json({
        success: true,
        data: statistics,
      });
    } catch (error) {
      console.error("Error fetching fee statistics:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch fee statistics",
      });
    }
  },

  // ===============================
  // GET DEFAULTERS LIST
  // ===============================
  getDefaulters: async (req: Request, res: Response) => {
    try {
      const { semesterId } = req.query;

      const students = await prisma.student.findMany({
        include: {
          branch: {
            include: {
              semsters: true,
            },
          },
          fees: {
            where: semesterId ? { semesterId: String(semesterId) } : undefined,
          },
        },
      });

      const defaulters = students.filter((student) => {
        const pendingFees = student.fees.filter((f) => f.status === "Pending");
        return pendingFees.length > 0;
      });

      const defaultersList = defaulters.map((student) => ({
        id: student.id,
        studentId: student.studentId,
        name: student.name,
        email: student.email,
        mobileNumber: student.mobileNumber,
        pendingAmount: student.fees
          .filter((f) => f.status === "Pending")
          .reduce((sum, f) => sum + f.amount + (f.lateFine || 0), 0),
        pendingCount: student.fees.filter((f) => f.status === "Pending").length,
      }));

      res.json({
        success: true,
        data: defaultersList,
      });
    } catch (error) {
      console.error("Error fetching defaulters:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch defaulters list",
      });
    }
  },

  // ===============================
  // BULK PAYMENT UPDATE
  // ===============================
  bulkPaymentUpdate: async (req: Request, res: Response) => {
    try {
      const { payments } = req.body;

      if (!Array.isArray(payments) || payments.length === 0) {
        return res.status(400).json({
          success: false,
          message: "Invalid payments data",
        });
      }

      const results = await Promise.all(
        payments.map(async (payment: any) => {
          try {
            return await prisma.fee.create({
              data: {
                studentId: payment.studentId,
                semesterId: payment.semesterId,
                amount: parseFloat(payment.amount),
                lateFine: parseFloat(payment.lateFine) || 0,
                description: payment.description,
                paymentMode: payment.paymentMode,
                paymentDate: new Date(payment.paymentDate),
                status: "Paid",
              },
            });
          } catch (error) {
            console.error(
              `Failed to create payment for student ${payment.studentId}:`,
              error
            );
            return null;
          }
        })
      );

      const successful = results.filter((r) => r !== null).length;
      const failed = results.filter((r) => r === null).length;

      res.json({
        success: true,
        message: `Bulk payment update completed`,
        data: {
          successful,
          failed,
          total: payments.length,
        },
      });
    } catch (error) {
      console.error("Error in bulk payment update:", error);
      res.status(500).json({
        success: false,
        message: "Failed to process bulk payment update",
      });
    }
  },
};
