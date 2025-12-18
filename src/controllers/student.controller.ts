import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma.js";

/* ======================================================
   STUDENT CONTROLLER
====================================================== */

export const studentController = {
  // ======================================================
  // CREATE STUDENT + ADMISSION FEE
  // ======================================================
  createStudent: async (req: Request, res: Response) => {
    try {
      const {
        name,
        email,
        password,
        branchId,
        gurdianName,
        relationWithGurdain,
        courseMode,
        courseDetails,
        communicationAddress,
        permanentAddress,
        mobileNumber,
        gender,
        whatsappNumber,
        dateOfBirth,
        placeOfBirth,
        educationalQualification,
        extraExperience,
        astrologicalExperience,
        occupation,
        photoUrl,
        certificateUrl,
        idProofUrl,
        razorpayPaymentId,
        razorpayOrderId,
        razorpaySignature,
      } = req.body;

      // ============================
      // VALIDATE BRANCH + FIRST SEM
      // ============================
      const branch = await prisma.branch.findUnique({
        where: { id: branchId },
        include: {
          semsters: {
            orderBy: { number: "asc" },
            take: 1,
          },
        },
      });

      if (!branch) {
        return res.status(404).json({
          success: false,
          message: "Branch not found",
        });
      }

      if (!branch.branchCode) {
        return res.status(400).json({
          success: false,
          message: "Branch code not set",
        });
      }

      if (!branch.semsters || branch.semsters.length === 0) {
        return res.status(400).json({
          success: false,
          message: "No semesters found for this branch",
        });
      }

      const firstSemester = branch.semsters[0];

      if (!firstSemester.admissionFee) {
        return res.status(400).json({
          success: false,
          message: "Admission fee not set for this semester",
        });
      }

      // ============================
      // GENERATE ROLL NO + STUDENT ID
      // ============================
      const lastStudent = await prisma.student.findFirst({
        where: { branchId },
        orderBy: { rollNo: "desc" },
      });

      const nextRollNo = lastStudent ? (lastStudent.rollNo ?? 0) + 1 : 1;

      const studentId = `${branch.branchCode}-${String(nextRollNo).padStart(
        3,
        "0"
      )}`;

      const hashedPassword = await bcrypt.hash(password, 10);

      // ============================
      // TRANSACTION
      // ============================
      const result = await prisma.$transaction(async (tx) => {
        const student = await tx.student.create({
          data: {
            studentId,
            name,
            email,
            gender,
            password: hashedPassword,
            branchId,
            rollNo: nextRollNo,
            gurdianName,
            relationWithGurdain,
            courseMode,
            courseDetails,
            communicationAddress,
            permanentAddress,
            mobileNumber,
            whatsappNumber,
            dateOfBirth,
            placeOfBirth,
            educationalQualification,
            extraExperience,
            astrologicalExperience,
            occupation,
            photoUrl,
            certificateUrl,
            idProofUrl,
          },
        });

        const feeRecord = await tx.fee.create({
          data: {
            studentId: student.id,
            semesterId: firstSemester.id,
            description: "Admission Fee",
            amount: Number(firstSemester.admissionFee),
            lateFine: 0,
            status: "Paid",
            paymentMode: "Online - Razorpay",
            paymentDate: new Date(),
            paymentId: razorpayPaymentId,
            orderId: razorpayOrderId,
            month: new Date().toLocaleString("default", { month: "long" }),
            year: new Date().getFullYear(),
          },
        });

        return { student, feeRecord };
      });

      return res.json({
        success: true,
        message: "Student created successfully",
        data: result,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  },

  // ======================================================
  // GET STUDENT BASIC
  // ======================================================
  getStudentBasic: async (req: Request, res: Response) => {
    try {
      const { studentId } = req.params;

      const student = await prisma.student.findUnique({
        where: { studentId },
        select: {
          name: true,
          email: true,
        },
      });

      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      res.json(student);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  },

  // ======================================================
  // LOGIN
  // ======================================================
  login: async (req: Request, res: Response) => {
    try {
      const { studentId, password } = req.body;

      const student = await prisma.student.findUnique({
        where: { studentId },
      });

      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      const isMatch = await bcrypt.compare(password, student.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid password" });
      }

      const token = jwt.sign(
        { id: student.id, role: "STUDENT" },
        process.env.JWT_SECRET!
      );

      res.json({
        success: true,
        token,
        student,
      });
    } catch {
      res.status(500).json({ message: "Login failed" });
    }
  },

  // ======================================================
  // GET PROFILE
  // ======================================================
  getProfile: async (req: Request, res: Response) => {
    try {
      if (!req.user?.id) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const student = await prisma.student.findUnique({
        where: { id: req.user.id },
        include: {
          branch: {
            include: {
              semsters: { orderBy: { number: "asc" } },
              studyMaterial: true,
            },
          },
          fees: {
            orderBy: { createdAt: "desc" },
            include: {
              semester: {
                select: { name: true, number: true },
              },
            },
          },
        },
      });

      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      const { password, ...data } = student;

      res.json({ success: true, data });
    } catch {
      res.status(500).json({ message: "Failed to fetch profile" });
    }
  },

  // ======================================================
  // UPDATE PROFILE
  // ======================================================
  updateProfile: async (req: Request, res: Response) => {
    try {
      if (!req.user?.id) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const student = await prisma.student.update({
        where: { id: req.user.id },
        data: req.body,
        select: {
          id: true,
          studentId: true,
          name: true,
          email: true,
          mobileNumber: true,
          communicationAddress: true,
          permanentAddress: true,
        },
      });

      res.json({
        success: true,
        data: student,
      });
    } catch {
      res.status(500).json({ message: "Update failed" });
    }
  },

  // ======================================================
  // STUDY MATERIALS
  // ======================================================
  getStudyMaterials: async (req: Request, res: Response) => {
    try {
      if (!req.user?.id) {
        return res.status(401).json({ message: "Unauthorized" });
      }

      const student = await prisma.student.findUnique({
        where: { id: req.user.id },
        include: {
          branch: {
            include: {
              studyMaterial: true,
              semsters: {
                include: { studyMaterial: true },
              },
            },
          },
        },
      });

      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      const branchMaterials = student.branch?.studyMaterial || [];
      const semesterMaterials =
        student.branch?.semsters.flatMap((s) => s.studyMaterial) || [];

      res.json({
        success: true,
        data: [...branchMaterials, ...semesterMaterials],
      });
    } catch {
      res.status(500).json({ message: "Failed to fetch materials" });
    }
  },
};

/* ======================================================
   ADMIN STUDENT CONTROLLER
====================================================== */

export const adminStudentController = {
  // ======================================================
  // GET ALL STUDENTS
  // ======================================================
  getAllStudents: async (_req: Request, res: Response) => {
    try {
      const students = await prisma.student.findMany({
        include: {
          branch: {
            include: {
              semsters: { orderBy: { number: "asc" } },
            },
          },
          fees: {
            include: {
              semester: { select: { name: true, number: true } },
            },
          },
        },
      });

      const data = students.map(({ password, ...s }) => s);

      res.json({ success: true, data });
    } catch {
      res.status(500).json({ message: "Failed to fetch students" });
    }
  },

  // ======================================================
  // GET STUDENT BY ID
  // ======================================================
  getStudentById: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.studentId);

      const student = await prisma.student.findUnique({
        where: { id },
        include: {
          branch: {
            include: {
              semsters: { orderBy: { number: "asc" } },
            },
          },
          fees: {
            orderBy: { createdAt: "desc" },
            include: {
              semester: { select: { name: true, number: true } },
            },
          },
        },
      });

      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }

      const { password, ...data } = student;
      res.json({ success: true, data });
    } catch {
      res.status(500).json({ message: "Fetch failed" });
    }
  },

  // ======================================================
  // UPDATE STUDENT
  // ======================================================
  updateStudent: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.studentId);
      delete req.body.password;
      delete req.body.id;

      const student = await prisma.student.update({
        where: { id },
        data: req.body,
        include: { branch: true },
      });

      const { password, ...data } = student;
      res.json({ success: true, data });
    } catch {
      res.status(500).json({ message: "Update failed" });
    }
  },

  // ======================================================
  // DELETE STUDENT
  // ======================================================
  deleteStudent: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.studentId);

      await prisma.fee.deleteMany({ where: { studentId: id } });
      await prisma.student.delete({ where: { id } });

      res.json({ success: true, message: "Student deleted" });
    } catch {
      res.status(500).json({ message: "Delete failed" });
    }
  },
};
