import { Router } from "express";
import { adminController } from "../controllers/admin.controller.js";
import { consultationController } from "../controllers/consultation.controller.js";
import { reviewController } from "../controllers/review.controller.js";
import { feeController } from "../controllers/fee.controller.js";
import { batchController } from "../controllers/batch.controller.js";
import { cmsController } from "../controllers/cms.controller.js";
import { auth } from "../middleware/auth.js";

const router = Router();

// NO auth for login
router.post("/login", adminController.login);

// Admin Protected Routes
router.use(auth.admin);

// Student Management
router.get("/students", adminController.getStudents);
router.post("/students/approve", adminController.approveStudent);

// Batch Management
router.post("/batch", batchController.createBatch);
router.get("/batch", batchController.getBatches);
router.put("/batch/:id", batchController.updateBatch);

// Fees
router.get("/fees", feeController.getAllFees);

// Admin
router.get("/bookings", consultationController.getAllBookings);
router.put("/bookings/:id/status", consultationController.updateStatus);

// Reviews
router.get("/reviews", reviewController.getPending);
router.put("/reviews/:id", reviewController.approveOrReject);

// CMS
router.get("/cms/:key", cmsController.getContent);
router.post("/cms/:key", cmsController.updateContent);

export default router;
