import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma.js";

export const studentController = {
  // ⭐ STUDENT LOGIN
  login: async (req: Request, res: Response) => {
    try {
      const { studentId, password } = req.body;

      const student = await prisma.student.findUnique({
        where: { studentId },
      });

      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      const match = await bcrypt.compare(password, student.password);
      if (!match) {
        return res.status(400).json({ message: "Invalid password" });
      }

      const token = jwt.sign(
        { id: student.id, role: "STUDENT" },
        process.env.JWT_SECRET!,
        { expiresIn: "2d" }
      );

      res.json({ token, student });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Login failed" });
    }
  },

  // ⭐ GET STUDENT PROFILE
  getProfile: async (req: Request, res: Response) => {
    try {
      const student = await prisma.student.findUnique({
        where: { id: req.user?.id },
        include: {
          batch: true,
          fees: true,
          // consultations: true,
        },
      });

      res.json(student);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to fetch profile" });
    }
  },

  // ⭐ UPDATE STUDENT PROFILE
  updateProfile: async (req: Request, res: Response) => {
    try {
      // Block security-sensitive fields from being updated
      const forbiddenFields = ["password", "email", "studentId", "batchId"];

      forbiddenFields.forEach((field) => {
        if (req.body[field]) delete req.body[field];
      });

      const updated = await prisma.student.update({
        where: { id: req.user?.id },
        data: req.body,
      });

      res.json(updated);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Failed to update profile" });
    }
  },
};
