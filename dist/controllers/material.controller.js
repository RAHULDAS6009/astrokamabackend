import { prisma } from "../lib/prisma.js";
export const materialController = {
    getMaterialsByBatch: async (req, res) => {
        try {
            // 1️⃣ Find the logged-in student
            const student = await prisma.student.findUnique({
                where: { id: req.user?.id },
            });
            if (!student) {
                return res.status(404).json({ message: "Student not found" });
            }
            // 2️⃣ Check if batch is assigned
            if (!student.batchId) {
                return res
                    .status(400)
                    .json({ message: "Student is not assigned to any batch yet" });
            }
            // 3️⃣ Fetch materials for student's batch
            const materials = await prisma.studyMaterial.findMany({
                where: { batchId: student.batchId },
            });
            res.json(materials);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to fetch materials" });
        }
    },
};
