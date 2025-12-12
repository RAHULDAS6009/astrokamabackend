import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { prisma } from "../lib/prisma.js";
export const studentController = {
    createStudent: async (req, res) => {
        try {
            const { name, email, password, courseId, branchId, gurdianName, relationWithGurdain, courseMode, courseDetails, communicationAddress, permanentAddress, mobileNumber, gender, whatsappNumber, dateOfBirth, placeOfBirth, educationalQualification, extraExperience, astrologicalExperience, occupation, photoUrl, certificateUrl, idProofUrl, 
            // Payment details
            razorpayPaymentId, razorpayOrderId, razorpaySignature, } = req.body;
            // Validate branch exists and get semester info
            const branch = await prisma.branch.findUnique({
                where: { id: branchId },
                include: {
                    semsters: {
                        orderBy: { number: "asc" },
                        take: 1, // Get first semester
                    },
                },
            });
            if (!branch) {
                return res
                    .status(404)
                    .json({ success: false, message: "Branch not found" });
            }
            if (!branch.semsters || branch.semsters.length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "No semesters found for this branch",
                });
            }
            const firstSemester = branch.semsters[0];
            // const firstSemester = branch.semsters.find((sem) => sem.number == 1);
            if (!firstSemester.admissionFee) {
                return res.status(400).json({
                    success: false,
                    message: "Admission fee not set for this branch",
                });
            }
            // Find last rollNo for this branch
            const lastStudent = await prisma.student.findFirst({
                where: { branchId },
                orderBy: { rollNo: "desc" },
            });
            const nextRollNo = lastStudent ? lastStudent.rollNo + 1 : 1;
            // Generate Student ID
            const studentId = `${branch.branchCode}-${String(nextRollNo).padStart(3, "0")}`;
            // Hash Password
            const hashedPassword = await bcrypt.hash(password, 10);
            // Create Student and Fee record in a transaction
            const result = await prisma.$transaction(async (tx) => {
                // Create Student
                const student = await tx.student.create({
                    data: {
                        studentId,
                        name,
                        email,
                        gender,
                        password: hashedPassword,
                        courseId: Number(courseId),
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
                // Create Admission Fee Record
                const feeRecord = await tx.fee.create({
                    data: {
                        studentId: student.id,
                        semesterId: firstSemester.id,
                        description: `Admission Fee`,
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
                message: "Student created successfully with admission fee paid",
                data: {
                    student: result.student,
                    admissionFee: result.feeRecord,
                },
            });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error,
            });
        }
    },
    getStudentBasic: async (req, res) => {
        try {
            const { studentId } = req.params;
            const student = await prisma.student.findUnique({
                where: { studentId },
                select: { name: true, email: true }, // only send basic info
            });
            if (!student) {
                return res.status(404).json({ message: "Student not found" });
            }
            return res.json(student);
        }
        catch (error) {
            console.log("Error fetching student basic:", error);
            return res.status(500).json({ message: "Server error" });
        }
    },
    login: async (req, res) => {
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
            const token = jwt.sign({ id: student.id, role: "STUDENT" }, process.env.JWT_SECRET);
            res.json({
                success: true,
                message: "Login successful",
                token,
                student,
            });
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ message: "Login failed" });
        }
    },
    getProfile: async (req, res) => {
        try {
            if (!req.user?.id) {
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized",
                });
            }
            const student = await prisma.student.findUnique({
                where: { id: req.user.id },
                include: {
                    course: {
                        select: {
                            id: true,
                            name: true,
                            courseCode: true,
                        },
                    },
                    branch: {
                        include: {
                            semsters: {
                                orderBy: { number: "asc" },
                            },
                            studyMaterial: true,
                        },
                    },
                    fees: {
                        orderBy: { createdAt: "desc" },
                        include: {
                            semester: {
                                select: {
                                    name: true,
                                    number: true,
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
            const { password, ...studentData } = student;
            res.json({
                success: true,
                data: studentData,
            });
        }
        catch (error) {
            console.error("Error fetching student profile:", error);
            res.status(500).json({
                success: false,
                message: "Failed to fetch student profile",
            });
        }
    },
    updateProfile: async (req, res) => {
        try {
            if (!req.user?.id) {
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized",
                });
            }
            const { mobileNumber, communicationAddress, permanentAddress, email } = req.body;
            const student = await prisma.student.update({
                where: { id: req.user.id },
                data: {
                    ...(mobileNumber && { mobileNumber }),
                    ...(communicationAddress && { communicationAddress }),
                    ...(permanentAddress && { permanentAddress }),
                    ...(email && { email }),
                },
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
                message: "Profile updated successfully",
                data: student,
            });
        }
        catch (error) {
            console.error("Error updating student profile:", error);
            res.status(500).json({
                success: false,
                message: "Failed to update profile",
            });
        }
    },
    getStudyMaterials: async (req, res) => {
        try {
            if (!req.user?.id) {
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized",
                });
            }
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
            const branchMaterials = student.branch?.studyMaterial || [];
            const semesterMaterials = student.branch?.semsters?.flatMap((sem) => sem.studyMaterial || []) ||
                [];
            const allMaterials = [...branchMaterials, ...semesterMaterials];
            res.json({
                success: true,
                data: allMaterials,
            });
        }
        catch (error) {
            console.error("Error fetching study materials:", error);
            res.status(500).json({
                success: false,
                message: "Failed to fetch study materials",
            });
        }
    },
};
export const adminStudentController = {
    getAllStudents: async (req, res) => {
        try {
            const students = await prisma.student.findMany({
                include: {
                    course: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                    branch: {
                        include: {
                            semsters: {
                                orderBy: { number: "asc" },
                            },
                        },
                    },
                    fees: {
                        include: {
                            semester: {
                                select: {
                                    name: true,
                                    number: true,
                                },
                            },
                        },
                    },
                },
                orderBy: { createdAt: "desc" },
            });
            const studentsData = students.map(({ password, ...student }) => student);
            res.json({
                success: true,
                data: studentsData,
            });
        }
        catch (error) {
            console.error("Error fetching students:", error);
            res.status(500).json({
                success: false,
                message: "Failed to fetch students",
            });
        }
    },
    getStudentById: async (req, res) => {
        try {
            const { studentId } = req.params;
            const student = await prisma.student.findUnique({
                where: { id: parseInt(studentId) },
                include: {
                    course: {
                        select: {
                            id: true,
                            name: true,
                            courseCode: true,
                        },
                    },
                    branch: {
                        include: {
                            semsters: {
                                orderBy: { number: "asc" },
                            },
                        },
                    },
                    fees: {
                        orderBy: { createdAt: "desc" },
                        include: {
                            semester: {
                                select: {
                                    name: true,
                                    number: true,
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
            const { password, ...studentData } = student;
            res.json({
                success: true,
                data: studentData,
            });
        }
        catch (error) {
            console.error("Error fetching student:", error);
            res.status(500).json({
                success: false,
                message: "Failed to fetch student",
            });
        }
    },
    updateStudent: async (req, res) => {
        try {
            const { studentId } = req.params;
            const updateData = req.body;
            delete updateData.password;
            delete updateData.id;
            // ============================
            // VALIDATE ROLL NO (if provided)
            // ============================
            if (updateData.rollNo !== undefined) {
                const roll = Number(updateData.rollNo);
                // Only allow 1, 2, or 3
                if (![1, 2, 3].includes(roll)) {
                    return res.status(400).json({
                        success: false,
                        message: "Roll No must be 1, 2, or 3 only",
                    });
                }
                // Fetch student to know courseDetails
                const existingStudent = await prisma.student.findUnique({
                    where: { id: Number(studentId) },
                });
                if (!existingStudent) {
                    return res.status(404).json({
                        success: false,
                        message: "Student not found",
                    });
                }
                // Duplicate roll number check inside same courseDetails
                const duplicateRoll = await prisma.student.findFirst({
                    where: {
                        id: { not: Number(studentId) },
                        rollNo: roll,
                    },
                });
                if (duplicateRoll) {
                    return res.status(400).json({
                        success: false,
                        message: "This roll number is already taken for this batch",
                    });
                }
            }
            // ============================
            // UPDATE STUDENT
            // ============================
            const student = await prisma.student.update({
                where: { id: Number(studentId) },
                data: updateData,
                include: {
                    course: true,
                    branch: true,
                },
            });
            const { password, ...studentData } = student;
            res.json({
                success: true,
                message: "Student updated successfully",
                data: studentData,
            });
        }
        catch (error) {
            console.error("Error updating student:", error);
            res.status(500).json({
                success: false,
                message: "Failed to update student",
            });
        }
    },
    deleteStudent: async (req, res) => {
        try {
            const { studentId } = req.params;
            const id = parseInt(studentId);
            // 1️⃣ Delete fees first
            await prisma.fee.deleteMany({
                where: { studentId: id },
            });
            // 2️⃣ Delete payments (if exists)
            await prisma.fee
                ?.deleteMany({
                where: { studentId: id },
            })
                .catch(() => { });
            // 3️⃣ Delete attendance (if exists)
            // 4️⃣ Delete the student
            await prisma.student.delete({
                where: { id },
            });
            res.json({
                success: true,
                message: "Student deleted successfully",
            });
        }
        catch (error) {
            console.error("Error deleting student:", error);
            res.status(500).json({
                success: false,
                message: "Failed to delete student",
            });
        }
    },
};
