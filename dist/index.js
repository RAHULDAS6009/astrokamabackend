import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import { uploadFile } from "./controllers/uploadImageController.js";
import upload from "./middleware/multer.js";
import { prisma } from "./lib/prisma.js";
const app = express();
const corsOptions = {
    origin: ["http://localhost:8080", "http://localhost:3000"], // Replace with your actual frontend domain
    optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(express.json());
// app.use("/api/auth", authRoutes);
app.use("/api/v1/", routes);
// ============================================
// UPDATED /allcourse ENDPOINT
// ============================================
// Add 'id' to both course and branches so frontend has all data needed
app.get("/allcourse", async (req, res) => {
    try {
        const courses = await prisma.course.findMany({
            where: { isActive: true },
            select: {
                id: true, // ✅ ADD THIS - needed for courseId
                ranking: true,
                name: true,
                type: true,
                description: true,
                duration: true,
                bannerpdf: true,
                bannerimage: true,
                gridTitle: true,
                courseType: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
                branches: {
                    select: {
                        id: true, // ✅ ADD THIS - needed for branchId
                        name: true,
                        color: true,
                        classType: true,
                        daysPerClassType: true,
                        classHour: true,
                        daysJSON: true,
                        semsters: {
                            select: {
                                name: true,
                                number: true,
                                startDate: true,
                                endDate: true,
                                fees: true,
                                admissionFee: true,
                            },
                        },
                    },
                },
            },
        });
        return res.status(200).json({
            success: true,
            message: "All courses fetched successfully",
            data: courses,
        });
    }
    catch (error) {
        console.error("Error fetching courses:", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
});
// ============================================
// OPTIONAL: Add this route for fallback
// ============================================
// Only needed if you want a separate endpoint to find branch
// But with the above fix, the frontend won't need to call this
app.get("/api/branch/find", async (req, res) => {
    try {
        const { courseId, branchName } = req.query;
        if (!courseId || !branchName) {
            return res.status(400).json({
                success: false,
                message: "courseId and branchName are required",
            });
        }
        const courseIdNum = parseInt(courseId, 10);
        if (isNaN(courseIdNum)) {
            return res.status(400).json({
                success: false,
                message: "Invalid courseId format",
            });
        }
        const branch = await prisma.branch.findFirst({
            where: {
                courseId: courseIdNum,
                name: branchName,
            },
        });
        if (!branch) {
            return res.status(404).json({
                success: false,
                message: `Branch '${branchName}' not found for course ID ${courseIdNum}`,
            });
        }
        return res.status(200).json({
            success: true,
            message: "Branch found successfully",
            data: branch,
        });
    }
    catch (error) {
        console.error("Error finding branch:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
});
app.post("/upload-file", upload.single("file"), uploadFile);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port 5000`);
});
