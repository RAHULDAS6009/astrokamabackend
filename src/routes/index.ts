import { Router } from "express";

// Import all route files
import adminRoutes from "./admin.routes.js";
import studentRoutes from "./student.routes.js";
import clientRoutes from "./client.routes.js";
import batchRoutes from "./batch.routes.js";
// import feeRoutes from "./fee.routes.js";
// import consultationRoutes from "./consultation.routes.js";
import reviewRoutes from "./review.routes.js";
import materialRoutes from "./material.routes.js";
import cmsRoutes from "./cms.routes.js";

const router = Router();

// Base paths for modules
router.use("/admin", adminRoutes);
router.use("/student", studentRoutes);
router.use("/client", clientRoutes);

router.use("/batch", batchRoutes);
// router.use("/fees", feeRoutes);
// router.use("/consultation", consultationRoutes);
router.use("/review", reviewRoutes);
router.use("/material", materialRoutes);
router.use("/cms", cmsRoutes);

export default router;
