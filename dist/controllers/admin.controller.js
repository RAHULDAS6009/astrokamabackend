import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";
export const adminController = {
    // -------------------------------
    // ADMIN LOGIN
    // -------------------------------
    login: async (req, res) => {
        try {
            const { email, password } = req.body;
            console.log(email, password);
            const admin = await prisma.admin.findUnique({ where: { email } });
            if (!admin)
                return res.status(400).json({ message: "Admin not found" });
            // const match = await bcrypt.compare(password, admin.password);
            const match = password === admin.password;
            if (!match)
                return res.status(400).json({ message: "Invalid password" });
            console.log("hello");
            const token = jwt.sign({ id: admin.id, role: "ADMIN" }, process.env.JWT_SECRET || "");
            res.json({ token, admin });
        }
        catch (err) {
            res.status(500).json({ error: err });
        }
    },
    // -------------------------------
    // GET ALL STUDENTS
    // -------------------------------
    getStudents: async (req, res) => {
        try {
            const students = await prisma.student.findMany({});
            res.json(students);
        }
        catch (err) {
            res.status(500).json({ error: err });
        }
    },
    // -------------------------------
    // APPROVE STUDENT (Admission Approval)
    // -------------------------------
    approveStudent: async (req, res) => {
        try {
            const { id } = req.body; // actual DB ID of student record
            // Generate studentId example: STU832194
            const studentId = "STU" + Math.floor(100000 + Math.random() * 900000);
            // Hash default password 1234
            const hashedPassword = await bcrypt.hash("1234", 10);
            const updatedStudent = await prisma.student.update({
                where: { id: Number(id) },
                data: {
                    studentId,
                    password: hashedPassword,
                },
            });
            res.json({
                message: "Student approved successfully",
                student: updatedStudent,
            });
        }
        catch (err) {
            res.status(500).json({ error: err });
        }
    },
};
