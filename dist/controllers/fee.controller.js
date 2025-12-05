import { prisma } from "../lib/prisma.js";
export const feeController = {
    // ===============================
    // ADMIN → GET ALL FEES
    // ===============================
    getAllFees: async (req, res) => {
        try {
            const fees = await prisma.fee.findMany({
                include: { student: true },
            });
            res.json(fees);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to fetch fees" });
        }
    },
    // ===============================
    // STUDENT → GET OWN FEES
    // ===============================
    getStudentFees: async (req, res) => {
        try {
            const fees = await prisma.fee.findMany({
                where: { studentId: req.user?.id },
            });
            res.json(fees);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Failed to fetch student fees" });
        }
    },
    // ===============================
    // STUDENT → PAY FEE
    // ===============================
    // Make sure this route uses authMiddleware
    payFee: async (req, res) => {
        try {
            if (!req.user || !req.user.id) {
                return res.status(401).json({ message: "Unauthorized" });
            }
            const { month, year, finalAmount, delayCharge } = req.body;
            const fee = await prisma.fee.create({
                data: {
                    studentId: req.user.id, // ✔ always number
                    month,
                    year: Number(year),
                    amount: finalAmount,
                    status: delayCharge > 0 ? "Overdue" : "Paid",
                },
            });
            res.json(fee);
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: "Unable to process payment" });
        }
    },
};
