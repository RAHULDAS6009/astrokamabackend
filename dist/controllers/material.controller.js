import { prisma } from "../lib/prisma.js";
export const materialController = {
    /* =====================================================
       GET MATERIALS BY STUDENT BATCH (BRANCH)
    ====================================================== */
    getMaterialsByBatch: async (req, res) => {
        try {
            // ============================
            // AUTH CHECK
            // ============================
            if (!req.user?.id) {
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized",
                });
            }
            // ============================
            // FETCH STUDENT WITH BRANCH
            // ============================
            const student = await prisma.student.findUnique({
                where: { id: req.user.id },
                include: {
                    branch: {
                        include: {
                            studyMaterial: true,
                            semsters: {
                                include: {
                                    studyMaterial: true,
                                },
                            },
                        },
                    },
                },
            });
            if (!student) {
                return res.status(404).json({
                    success: false,
                    message: "Student not found",
                });
            }
            // ============================
            // CHECK BATCH (BRANCH)
            // ============================
            if (!student.branchId || !student.branch) {
                return res.status(400).json({
                    success: false,
                    message: "Student is not assigned to any batch yet",
                });
            }
            // ============================
            // COLLECT MATERIALS
            // ============================
            const branchMaterials = student.branch.studyMaterial || [];
            const semesterMaterials = student.branch.semsters.flatMap((sem) => sem.studyMaterial || []) || [];
            const allMaterials = [...branchMaterials, ...semesterMaterials];
            // ============================
            // RESPONSE
            // ============================
            res.json({
                success: true,
                data: allMaterials,
            });
        }
        catch (error) {
            console.error("Error fetching materials:", error);
            res.status(500).json({
                success: false,
                message: "Failed to fetch materials",
            });
        }
    },
};
