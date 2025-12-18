import { Request, Response, Router } from "express";

// Import all route files
import adminRoutes from "./admin.routes.js";
import studentRoutes from "./student.routes.js";
import courseRoutes from "./course.routes.js";
// import feeRoutes from "./fee.routes.js";
// import consultationRoutes from "./consultation.routes.js";
import reviewRoutes from "./review.routes.js";

import { studentController } from "../controllers/student.controller.js";
import { prisma } from "../lib/prisma.js";
import { consultationController } from "../controllers/consultation.controller.js";

const router = Router();

// path to get all cms
router.get("/cms", async (req: Request, res: Response) => {
  try {
    const allCMS = await prisma.cMS.findMany({
      orderBy: { section: "asc" }, // optional sorting
    });

    res.json({
      count: allCMS.length,
      data: allCMS,
    });
  } catch (error) {
    console.error("Error fetching CMS:", error);
    res.status(500).json({ message: "Internal Server Error" });
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
