import { Router } from "express";
import { consultationController } from "../controllers/consultation.controller.js";
import { reviewController } from "../controllers/review.controller.js";

const router = Router();

// Book consultation
// router.get("/slots", consultationController.getAvailableSlots);
router.post("/consultation/book", consultationController.bookForClient);
router.post("/consultation/verify", consultationController.verifyPayment);

// Give review
router.post("/review", reviewController.createClientReview);

export default router;
