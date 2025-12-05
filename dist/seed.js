import { prisma } from "./lib/prisma.js";
import bcrypt from "bcrypt";
async function main() {
    console.log("🌱 Seeding database...");
    // -----------------------------
    // 1. Hash Passwords using bcrypt
    // -----------------------------
    const adminPassword = await bcrypt.hash("admin123", 10);
    const student1Password = await bcrypt.hash("password123", 10);
    const student2Password = await bcrypt.hash("password123", 10);
    // -----------------------------
    // 2. Create Admin
    // -----------------------------
    const admin = await prisma.admin.create({
        data: {
            email: "admin@example.com",
            password: adminPassword,
            name: "Super Admin",
        },
    });
    // -----------------------------
    // 3. Create Batches
    // -----------------------------
    const batch1 = await prisma.batch.create({
        data: {
            name: "Batch A",
            timing: "10:00 AM - 12:00 PM",
            monthlyFee: 1500,
        },
    });
    const batch2 = await prisma.batch.create({
        data: {
            name: "Batch B",
            timing: "6:00 PM - 8:00 PM",
            monthlyFee: 2000,
        },
    });
    // -----------------------------
    // 4. Create Students
    // -----------------------------
    const student1 = await prisma.student.create({
        data: {
            studentId: "STU001",
            name: "Rahul Das",
            email: "rahul@example.com",
            password: student1Password,
            batchId: batch1.id,
            fatherName: "Mr. Das",
            courseMode: "Online",
            courseDetails: "Full Astrology Course",
            communicationAddress: "Kolkata, India",
            permanentAddress: "Kolkata, India",
            mobileNumber: "9876543210",
            dateOfBirth: "2001-05-10",
            placeOfBirth: "Kolkata",
            educationalQualification: "B.Tech",
            extraExperience: "Tarot Reading",
            astrologicalExperience: "Beginner",
            occupation: "Student",
        },
    });
    const student2 = await prisma.student.create({
        data: {
            studentId: "STU002",
            name: "Priya Sharma",
            email: "priya@example.com",
            password: student2Password,
            batchId: batch2.id,
            fatherName: "Mr. Sharma",
            courseMode: "Offline",
            courseDetails: "Palmistry Course",
            communicationAddress: "Delhi, India",
            permanentAddress: "Delhi, India",
            mobileNumber: "9123456780",
            dateOfBirth: "1999-11-12",
            placeOfBirth: "Delhi",
            educationalQualification: "M.Com",
            astrologicalExperience: "Intermediate",
            occupation: "Working Professional",
        },
    });
    // -----------------------------
    // 5. Study Materials
    // -----------------------------
    await prisma.studyMaterial.createMany({
        data: [
            {
                title: "Astrology Basics",
                type: "PDF",
                url: "https://example.com/astrology.pdf",
                batchId: batch1.id,
            },
            {
                title: "Palmistry Guide",
                type: "Video",
                url: "https://example.com/palmistry.mp4",
                batchId: batch2.id,
            },
        ],
    });
    // -----------------------------
    // 6. Fees
    // -----------------------------
    await prisma.fee.createMany({
        data: [
            {
                studentId: student1.id,
                month: "January",
                year: 2025,
                amount: 1500,
                status: "Paid",
            },
            {
                studentId: student2.id,
                month: "January",
                year: 2025,
                amount: 2000,
                status: "Pending",
            },
        ],
    });
    // -----------------------------
    // 7. Consultations (Optional)
    // -----------------------------
    await prisma.consultation.create({
        data: {
            studentId: student1.id,
            consultationType: "1st Consultation",
            preferredMode: "Phone Call",
            consultationDate: new Date("2025-02-10T10:00:00"),
            timeSlot: "10:00 AM - 10:30 AM",
            fullName: "Rahul Das",
            gender: "Male",
            dateOfBirth: new Date("2001-05-10"),
            timeOfBirth: "10:30 AM",
            placeOfBirth: "Kolkata",
            country: "India",
            state: "West Bengal",
            city: "Kolkata",
            pinCode: "700001",
            phoneNumber: "9876543210",
            emailAddress: "rahul@example.com",
            consultedBefore: false,
            declarationAccepted: true,
            openToRemedies: "Yes",
            bookingAmount: 1600,
        },
    });
    // -----------------------------
    // 8. Reviews (Optional)
    // -----------------------------
    await prisma.review.create({
        data: {
            rating: 5,
            feedback: "Amazing consultation!",
            status: "Approved",
            studentId: student1.id,
        },
    });
    console.log("🌱 Seeding completed!");
}
main()
    .catch((err) => {
    console.error(err);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
