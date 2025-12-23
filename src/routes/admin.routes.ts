import { Request, Response, Router } from "express";
import { adminController } from "../controllers/admin.controller.js";
import {
  adminConsultationController,
  adminSlotController,
  consultationController,
} from "../controllers/consultation.controller.js";
import { reviewController } from "../controllers/review.controller.js";
import { feeController } from "../controllers/fee.controller.js";
import { courseController } from "../controllers/course.controller.js";
import { cmsController } from "../controllers/cms.controller.js";
import { auth } from "../middleware/auth.js";
import { adminFeeController } from "../controllers/adminFeeController.js";
import { adminStudentController } from "../controllers/student.controller.js";
import { prisma } from "../lib/prisma.js";

const router = Router();

// NO auth for login
router.post("/login", adminController.login);
router.get("/allcourse", courseController.getAllCourses);

// Admin Protected Routes
router.use(auth.admin);

router.get(
  "/by-branch-code/:branchCode",
  async (req: Request, res: Response) => {
    try {
      const { branchCode } = req.params;

      // 1️⃣ Find branch by branchCode
      const branch = await prisma.branch.findUnique({
        where: { branchCode },
        select: { id: true, name: true },
      });

      if (!branch) {
        return res.status(404).json({
          success: false,
          message: "Invalid branch code",
        });
      }

      // 2️⃣ Get students of that branch
      const students = await prisma.student.findMany({
        where: { branchId: branch.id },
        orderBy: { createdAt: "asc" },
        select: {
          id: true,
          name: true,
          rollNo: true,
        },
      });

      res.json({
        success: true,
        branch: {
          name: branch.name,
          branchCode,
        },
        students,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch students",
      });
    }
  }
);

router.put(
  "/bulk-roll-update-by-branch-code",
  async (req: Request, res: Response) => {
    try {
      const { branchCode, rolls } = req.body;

      /* ---------------- VALIDATION ---------------- */

      if (!branchCode || !Array.isArray(rolls) || rolls.length === 0) {
        return res.status(400).json({
          success: false,
          message: "branchCode and rolls array are required",
        });
      }

      // Validate roll structure
      for (const r of rolls) {
        if (
          typeof r.studentId !== "number" ||
          typeof r.rollNo !== "number" ||
          r.rollNo <= 0
        ) {
          return res.status(400).json({
            success: false,
            message: "Invalid studentId or rollNo in payload",
          });
        }
      }

      /* ---------------- FIND BRANCH ---------------- */

      const branch = await prisma.branch.findUnique({
        where: { branchCode },
        select: { id: true },
      });

      if (!branch) {
        return res.status(404).json({
          success: false,
          message: "Invalid branch code",
        });
      }

      /* ---------------- DUPLICATE CHECK (REQUEST) ---------------- */

      const rollNumbers = rolls.map((r) => r.rollNo);
      const uniqueRolls = new Set(rollNumbers);

      if (uniqueRolls.size !== rollNumbers.length) {
        return res.status(409).json({
          success: false,
          message: "Duplicate roll numbers in request",
        });
      }

      /* ---------------- DUPLICATE CHECK (DB) ---------------- */

      const existing = await prisma.student.findMany({
        where: {
          branchId: branch.id,
          rollNo: { in: rollNumbers },
        },
        select: { rollNo: true },
      });

      if (existing.length > 0) {
        return res.status(409).json({
          success: false,
          message: "One or more roll numbers already exist in this branch",
          existingRolls: existing.map((e) => e.rollNo),
        });
      }

      /* ---------------- TRANSACTION UPDATE ---------------- */

      await prisma.$transaction(
        rolls.map((r) =>
          prisma.student.update({
            where: {
              id: r.studentId,
            },
            data: {
              rollNo: r.rollNo,
            },
          })
        )
      );

      /* ---------------- RESPONSE ---------------- */

      return res.json({
        success: true,
        message: "Custom roll numbers assigned successfully",
        updatedCount: rolls.length,
      });
    } catch (error: any) {
      // Prisma unique constraint safety
      if (error.code === "P2002") {
        return res.status(409).json({
          success: false,
          message: "Duplicate roll number detected",
        });
      }

      console.error("ROLL UPDATE ERROR:", error);

      return res.status(500).json({
        success: false,
        message: "Bulk roll update failed",
      });
    }
  }
);

router.post("/alumni", async (req: Request, res: Response) => {
  try {
    const { name, registrationNumber, imageUrl } = req.body;

    if (!name || !registrationNumber || !imageUrl) {
      return res.status(400).json({
        message: "Name , registration,image are required",
      });
    }

    // 🔍 CHECK IF ALREADY EXISTS
    const existingAlumni = await prisma.alumni.findUnique({
      where: {
        RegistrationNumber: registrationNumber,
      },
    });

    if (existingAlumni) {
      return res.status(409).json({
        message: "Alumni already exists with this registration number",
      });
    }

    // ✅ CREATE NEW ALUMNI
    const alumni = await prisma.alumni.create({
      data: {
        name,
        imageUrl,
        RegistrationNumber: registrationNumber,
      },
    });

    return res.status(201).json({
      message: "Alumni created successfully",
      alumni,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
});

router.put("/cms/:section", async (req: Request, res: Response) => {
  try {
    const { section } = req.params;
    const { content, imageUrl } = req.body;

    if (!section) {
      return res.status(400).json({ message: "Section is required" });
    }

    const cms = await prisma.cMS.upsert({
      where: { section },
      update: {
        content: content ?? "",
        imageUrl: imageUrl ?? null,
      },
      create: {
        section,
        content: content ?? "",
        imageUrl: imageUrl ?? null,
      },
    });

    return res.status(200).json({
      message: "CMS content saved successfully",
      data: cms,
    });
  } catch (error) {
    console.error("Error updating CMS:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/course", courseController.addCourse);
router.get("/course/:id", courseController.getCourseById);
router.put("/course/:id", courseController.updateCourse);
router.delete("/course/:id", courseController.deleteCourse);
//get all admission if approve from admin then move to the Stduent DB
//fees Download excel for all fess

//upload study material for branches/batches

// Student Management

//consultation bookings -> manage it in a way so that it can show and manage all of that

router.get("/students", adminStudentController.getAllStudents);
router.get("/students/:studentId", adminStudentController.getStudentById);
router.put("/students/:studentId", adminStudentController.updateStudent);
router.delete("/students/:studentId", adminStudentController.deleteStudent);

router.get("/fees/statistics", adminFeeController.getFeeStatistics);
router.get("/fees/defaulters", adminFeeController.getDefaulters);
router.get("/fees", adminFeeController.getAllFees);
router.get("/fees/student/:studentId", adminFeeController.getStudentFees);
router.post("/fees/manual-payment", adminFeeController.createManualPayment);
router.post("/fees/bulk-payment", adminFeeController.bulkPaymentUpdate);
router.put("/fees/:feeId", adminFeeController.updatePayment);
router.delete("/fees/:feeId", adminFeeController.deletePayment);

// router.get("/bookings", consultationController.getAllBookings);
// router.put("/bookings/:id/status", consultationController.updateStatus);

// router.get("/reviews", reviewController.getPending);
// router.put("/reviews/:id", reviewController.approveOrReject);

// router.get("/:section", cmsController.getContent);
// router.post("/", cmsController.createContent);
// router.put("/:section", cmsController.updateContent);
// router.delete("/:section", cmsController.deleteContent);

// router.post("/block", adminConsultationController.blockFullDay);
// router.post("/block-time", adminConsultationController.blockTimeRange);
// router.patch("/unblock", adminConsultationController.unblock);
// router.get("/blocked-slots", adminConsultationController.getBlockedSlots);
// router.get("/available-slots", adminConsultationController.getAvailableSlots);

// Get all bookings

// Update booking status

router.post("/slots/generate", adminSlotController.generateSlots);
router.get("/slots", adminSlotController.getSlots);
router.put("/slots/block", adminSlotController.blockSlots);
router.put("/slots/unblock", adminSlotController.unblockSlots);

router.get("/consultations", adminConsultationController.getAll);
router.put(
  "/consultations/:id/status",
  adminConsultationController.updateStatus
);
router.delete("/consultations/:id", adminConsultationController.delete);

// router.put("/schedule/slots/bulk", adminConsultationController.createBulkSlots);
// router.put("/schedule/slots/:id/block", adminConsultationController.blockSlot);
// router.delete(
//   "/schedule/slots/:id",
//   adminConsultationController.deleteConsultation
// );

// router.get("/students", adminController.getStudents);

// router.get("/", adminFeeController.getAllFees);

// // Get fees by student ID
// router.get("/student/:studentId", adminFeeController.getStudentFees);

// // Create manual payment entry
// router.post("/manual-payment", adminFeeController.createManualPayment);

// // Update existing payment
// router.put("/:feeId", adminFeeController.updatePayment);

// // Delete payment
// router.delete("/:feeId", adminFeeController.deletePayment);

// // Get fee statistics
// router.get("/statistics", adminFeeController.getFeeStatistics);

// // Get defaulters list
// router.get("/defaulters", adminFeeController.getDefaulters);

// // Bulk payment update
// router.post(
//   "/bulk-payment",

//   adminFeeController.bulkPaymentUpdate
// );

// // Get all students
// router.get("/", adminStudentController.getAllStudents);

// // Get single student
// router.get("/:studentId", adminStudentController.getStudentById);

// // Update student
// router.put("/:studentId", adminStudentController.updateStudent);

// // Delete student
// router.delete("/:studentId", adminStudentController.deleteStudent);

// router.post("/students/approve", adminController.approveStudent);

// // Batch Management

// // Fees
// router.get("/fees", feeController.getAllFees);

// // booking
// router.get("/bookings", consultationController.getAllBookings);
// router.put("/bookings/:id/status", consultationController.updateStatus);

// // Reviews
// router.get("/reviews", reviewController.getPending);
// router.put("/reviews/:id", reviewController.approveOrReject);

// // CMS
// router.get("/cms/:key", cmsController.getContent);
// router.post("/cms/:key", cmsController.updateContent);

export default router;
