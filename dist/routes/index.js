import { Router } from "express";
// Import all route files
import adminRoutes from "./admin.routes.js";
import studentRoutes from "./student.routes.js";
// import feeRoutes from "./fee.routes.js";
// import consultationRoutes from "./consultation.routes.js";
import reviewRoutes from "./review.routes.js";
import { studentController } from "../controllers/student.controller.js";
import { prisma } from "../lib/prisma.js";
import { consultationController } from "../controllers/consultation.controller.js";
const router = Router();
router.get("/alumnis", async (_req, res) => {
    try {
        const alumniList = await prisma.alumni.findMany({
            orderBy: {
                id: "desc",
            },
            select: {
                id: true,
                name: true,
                imageUrl: true,
                RegistrationNumber: true,
            },
        });
        return res.json(alumniList);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Failed to fetch alumni",
        });
    }
});
router.get("/all-students", async (_req, res) => {
    try {
        const students = await prisma.student.findMany({
            orderBy: {
                id: "desc",
            },
            select: {
                id: true,
                name: true,
                photoUrl: true, // 👈 student image
            },
        });
        return res.status(200).json(students);
    }
    catch (error) {
        console.error("Fetch students error:", error);
        return res.status(500).json({
            message: "Failed to fetch students",
        });
    }
});
// path to get all cms
router.get("/cms", async (req, res) => {
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
router.post("/check-followup", async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.json({ eligible: false });
        }
        const lastConsultation = await prisma.consultation.findFirst({
            where: {
                emailAddress: email,
                paymentStatus: "Paid",
            },
            orderBy: {
                createdAt: "desc",
            },
        });
        if (!lastConsultation) {
            return res.json({ eligible: false });
        }
        const now = new Date();
        const lastDate = new Date(lastConsultation.createdAt);
        const diffMonths = (now.getFullYear() - lastDate.getFullYear()) * 12 +
            (now.getMonth() - lastDate.getMonth());
        const eligible = diffMonths <= 3;
        return res.json({
            eligible,
            lastBookingDate: lastDate,
            fees: eligible
                ? {
                    offline: 1000,
                    online: 1200,
                    bookingAmount: 500,
                }
                : {
                    offline: 1500,
                    online: 1800,
                    bookingAmount: 500,
                },
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ eligible: false });
    }
});
// router.get("/courses", async (req: Request, res: Response) => {
//   try {
//     const allCMS = await prisma.course.findMany({where:{
//     ranking:
//     }});
//   } catch (error) {
//     console.error("Error fetching CMS:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// });
// Get available slots for booking calendar
router.use("/admission/check-email", async (req, res) => {
    try {
        const { email } = req.body;
        // 🔒 Validate input
        if (!email) {
            return res.status(400).json({
                exists: false,
                message: "Email is required",
            });
        }
        // 🔍 Check email
        const existingStudent = await prisma.student.findFirst({
            where: { email },
            select: { id: true }, // lightweight query
        });
        return res.status(200).json({
            exists: !!existingStudent,
        });
    }
    catch (error) {
        console.error("Check email error:", error);
        return res.status(500).json({
            exists: false,
            message: "Internal server error",
        });
    }
});
router.get("/available-slots", consultationController.getAvailableSlots);
// Create booking order (before payment)
router.post("/book-client", consultationController.bookForClient);
// Verify payment and confirm booking
router.post("/verify-payment", consultationController.verifyPayment);
router.use("/admin", adminRoutes);
router.use("/admission", studentController.createStudent);
router.use("/student", studentRoutes);
// router.use("/course", courseRoutes);
// // router.use("/fees", feeRoutes);
// router.use("/consultation", consultationRoutes);
router.use("/review", reviewRoutes);
// router.use("/material", materialRoutes);
// router.use("/cms", cmsRoutes);
export default router;
