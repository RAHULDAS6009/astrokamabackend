import { Router } from "express";
import { reviewController } from "../controllers/review.controller.js";
import { auth } from "../middleware/auth.js";

const router = Router();

// Student review
router.post("/student", auth.student, reviewController.createStudentReview);

// Client review
router.post("/client", reviewController.createClientReview);

// Admin approval
router.get("/pending", auth.admin, reviewController.getPending);
router.put("/:id", auth.admin, reviewController.approveOrReject);

export default router;
