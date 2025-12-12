import { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export const reviewController = {
  // ⭐ CLIENT REVIEW (WITHOUT LOGIN)
  createClientReview: async (req: Request, res: Response) => {
    try {
      const { rating, feedback, imageUrl, name, phoneno, email } = req.body;

      if (!name) {
        return res.status(400).json({ msg: "Please enter your name" });
      }

      let client = null;

      // ✔ CHECK if email exists, but don't throw error if not found
      if (email) {
        client = await prisma.consultation.findFirst({
          where: {
            emailAddress: email,
          },
        });
      }

      // ✔ Create review (clientId only if exists)
      await prisma.review.create({
        data: {
          name,
          phoneno,
          email,
          rating: Number(rating),
          feedback,
          imageUrl,
          status: "Pending",
          clientId: client ? client.id : null, // optional linking
        },
      });

      return res.json({
        msg: "Review submitted successfully!",
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to submit review" });
    }
  },

  // ⭐ GET ALL PENDING REVIEWS (ADMIN)
  getPending: async (req: Request, res: Response) => {
    try {
      const reviews = await prisma.review.findMany({
        where: { status: "Pending" },
      });

      res.json(reviews);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to fetch reviews" });
    }
  },

  // ⭐ APPROVE / REJECT REVIEW
  approveOrReject: async (req: Request, res: Response) => {
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
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to update review status" });
    }
  },
};
