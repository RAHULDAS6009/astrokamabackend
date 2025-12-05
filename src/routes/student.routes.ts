import { Router } from "express";
import { studentController } from "../controllers/student.controller.js";
import { materialController } from "../controllers/material.controller.js";
import { feeController } from "../controllers/fee.controller.js";
import { consultationController } from "../controllers/consultation.controller.js";
import { reviewController } from "../controllers/review.controller.js";
import { auth } from "../middleware/auth.js";

const router = Router();

// Login
router.post("/login", studentController.login);

// Protected student routes
router.use(auth.student);

// Study Materials
router.get("/materials", materialController.getMaterialsByBatch);

// Fees
router.get("/fees", feeController.getStudentFees);
router.post("/fees/pay", feeController.payFee);

// Consultations
// router.post("/consultation/book", consultationController.bookForStudent);

// Reviews
router.post("/review", reviewController.createStudentReview);

// Profile
router.get("/profile", studentController.getProfile);
router.put("/profile", studentController.updateProfile);

export default router;
