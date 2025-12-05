import { prisma } from "../lib/prisma.js";
export const reviewController = {
    // ⭐ STUDENT CREATES REVIEW
    createStudentReview: async (req, res) => {
        try {
            const { rating, feedback } = req.body;
            const review = await prisma.review.create({
                data: {
                    studentId: req.user?.id,
                    rating,
                    feedback,
                    status: "Pending",
                },
            });
            res.json(review);
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ message: "Failed to submit review" });
        }
    },
    // ⭐ CLIENT REVIEW (WITHOUT LOGIN)
    createClientReview: async (req, res) => {
        try {
            const { rating, feedback } = req.body;
            const review = await prisma.review.create({
                data: {
                    rating,
                    feedback,
                    status: "Pending",
                    // clientId is optional — use if you add a client model later
                },
            });
            res.json(review);
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ message: "Failed to submit review" });
        }
    },
    // ⭐ GET ALL PENDING REVIEWS (ADMIN)
    getPending: async (req, res) => {
        try {
            const reviews = await prisma.review.findMany({
                where: { status: "Pending" },
                include: {
                    student: true,
                },
            });
            res.json(reviews);
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ message: "Failed to fetch reviews" });
        }
    },
    // ⭐ APPROVE / REJECT REVIEW
    approveOrReject: async (req, res) => {
        try {
            const { status } = req.body;
            if (!["Approved", "Rejected"].includes(status)) {
                return res.status(400).json({ message: "Invalid status" });
            }
            const review = await prisma.review.update({
                where: { id: Number(req.params.id) },
                data: { status },
            });
            res.json(review);
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ message: "Failed to update review status" });
        }
    },
};
