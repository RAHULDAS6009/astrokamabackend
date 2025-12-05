import { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";
import { razorpay } from "../config/razorpay.js";
import crypto from "crypto";

export const consultationController = {
  // ======================================================
  // CLIENT BOOKING (NO SIGNUP)
  // ======================================================
  bookForClient: async (req: Request, res: Response) => {
    console.log("hello from bookForClient");

    try {
      const data = req.body;

      console.log("form book client", req.body);

      // Convert paymentAmount to paise
      const amountInPaise = Math.round(data.paymentAmount * 100);

      // 1️⃣ Create Razorpay Order
      const order = await razorpay.orders.create({
        amount: amountInPaise,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
      });

      // 2️⃣ Return order ONLY (NO DB WRITE)
      return res.status(201).json({
        success: true,
        orderId: order.id,
        amount: amountInPaise,
        key: process.env.RAZORPAY_KEY_ID,
        formData: data, // we need this later during verification
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error });
    }
  },

  // ======================================================
  // VERIFY PAYMENT
  // ======================================================
  verifyPayment: async (req: Request, res: Response) => {
    try {
      console.log("hello from verify payment");

      const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        formData,
      } = req.body;

      console.log("Verify body:", req.body);

      // Validate signature
      const sign = `${razorpay_order_id}|${razorpay_payment_id}`;

      const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
        .update(sign)
        .digest("hex");

      if (expectedSignature !== razorpay_signature) {
        return res.status(400).json({
          success: false,
          message: "Invalid Razorpay signature",
        });
      }

      // 3️⃣ CREATE consultation entry now (after successful payment)
      const consultation = await prisma.consultation.create({
        data: {
          consultationType: formData.consultType,
          preferredMode: formData.consultModes[0],
          consultationDate: "",
          timeSlot: formData.schedule.time,

          // Personal info
          fullName: formData.personal.fullName,
          gender: formData.personal.gender,
          dateOfBirth: new Date(formData.personal.dob),
          timeOfBirth: formData.personal.tob,
          placeOfBirth: `${formData.birthPlace.city}, ${formData.birthPlace.state}, ${formData.birthPlace.country}`,
          country: formData.birthPlace.country,
          state: formData.birthPlace.state,
          city: formData.birthPlace.city,
          pinCode: formData.birthPlace.pincode,

          phoneNumber: formData.contact.phone,
          emailAddress: formData.contact.email,

          // Preferences
          careerGuidance:
            formData.preferences.topics.includes("Career Guidance"),
          loveLife: formData.preferences.topics.includes("Love Life"),
          marriageLife: formData.preferences.topics.includes("Marriage Life"),
          healthWellbeing:
            formData.preferences.topics.includes("Health Wellbeing"),
          financialCondition: formData.preferences.topics.includes(
            "Financial Condition"
          ),
          business: formData.preferences.topics.includes("Business"),
          spiritualGrowth:
            formData.preferences.topics.includes("Spiritual Growth"),
          others: formData.preferences.others,

          consultedBefore: formData.consultedBefore === "Yes",
          specificQuestions: formData.specificConcerns,
          openToRemedies: formData.remedies,

          declarationAccepted: true,
          declarationDate: new Date(),

          bookingAmount: formData.paymentAmount,

          razorpayOrderId: razorpay_order_id,
          razorpayPaymentId: razorpay_payment_id,
          razorpaySignature: razorpay_signature,

          paymentStatus: "Paid",
          status: "Confirmed",
        },
      });

      return res.json({
        success: true,
        message: "Payment verified & consultation created",
        consultationId: consultation.id,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ success: false, error: err });
    }
  },

  // ======================================================
  // ADMIN → GET ALL BOOKINGS
  // ======================================================
  getAllBookings: async (req: Request, res: Response) => {
    try {
      const bookings = await prisma.consultation.findMany({
        orderBy: { createdAt: "desc" },
      });

      return res.json({
        success: true,
        data: bookings,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ success: false, error: err });
    }
  },

  // ======================================================
  // ADMIN → UPDATE STATUS (Pending / Confirmed / Completed / Cancelled)
  // ======================================================
  updateStatus: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const { status } = req.body;

      const updated = await prisma.consultation.update({
        where: { id },
        data: { status },
      });

      return res.json({
        success: true,
        message: "Status updated successfully",
        data: updated,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ success: false, error: err });
    }
  },
};
