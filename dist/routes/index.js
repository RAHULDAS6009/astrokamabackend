import { Router } from "express";
// Import all route files
import adminRoutes from "./admin.routes.js";
import studentRoutes from "./student.routes.js";
import clientRoutes from "./client.routes.js";
// import feeRoutes from "./fee.routes.js";
// import consultationRoutes from "./consultation.routes.js";
import reviewRoutes from "./review.routes.js";
import { studentController } from "../controllers/student.controller.js";
import { prisma } from "../lib/prisma.js";
const router = Router();
// path to get all cms
router.get("/", async (req, res) => {
    try {
        const allCMS = await prisma.cMS.findMany({
            orderBy: { section: "asc" }, // optional sorting
        });
        res.json({
            count: allCMS.length,
            data: allCMS,
        });
    }
    catch (error) {
        console.error("Error fetching CMS:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
router.use("/admin", adminRoutes);
router.use("/admission", studentController.createStudent);
router.use("/student", studentRoutes);
router.use("/client", clientRoutes);
// router.use("/course", courseRoutes);
// // router.use("/fees", feeRoutes);
// router.use("/consultation", consultationRoutes);
router.use("/review", reviewRoutes);
// router.use("/material", materialRoutes);
// router.use("/cms", cmsRoutes);
export default router;
