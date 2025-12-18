import { Router } from "express";
import { adminController } from "../controllers/admin.controller.js";
import { adminConsultationController, adminSlotController, } from "../controllers/consultation.controller.js";
import { courseController } from "../controllers/course.controller.js";
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
router.put("/cms/:section", async (req, res) => {
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
    }
    catch (error) {
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
router.put("/consultations/:id/status", adminConsultationController.updateStatus);
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
