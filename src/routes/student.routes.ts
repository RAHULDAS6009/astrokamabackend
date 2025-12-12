import { Router } from "express";
import { studentController } from "../controllers/student.controller.js";
import { materialController } from "../controllers/material.controller.js";
import { feeController } from "../controllers/fee.controller.js";
import { consultationController } from "../controllers/consultation.controller.js";
import { reviewController } from "../controllers/review.controller.js";
import { auth } from "../middleware/auth.js";
import { studentPaymentController } from "../controllers/studentPaymentController.js";

const router = Router();

router.get("/basic/:studentId", studentController.getStudentBasic);

// Login
router.post("/login", studentController.login);
router.post("/register", studentController.createStudent);
router.post(
  "/pay/create-order-admission",
  consultationController.bookForClient
);

// Protected student routes
router.use(auth.student);

///============================================//
// PROFILE ROUTES
// ============================================
router.get("/profile", studentController.getProfile);
router.put("/profile", studentController.updateProfile);

// ============================================
// STUDY MATERIALS
// ============================================
router.get("/study-materials", studentController.getStudyMaterials);

// ============================================
// PAYMENT ROUTES
// ============================================
router.get("/razorpay-key", studentPaymentController.getRazorpayKey);
router.post("/pay/create-order", studentPaymentController.createOrder);
router.post("/pay/verify", studentPaymentController.verifyPayment);
router.get("/payment-history", studentPaymentController.getPaymentHistory);

export default router;
