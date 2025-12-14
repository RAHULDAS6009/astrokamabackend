// ============================================================
// FILE 1: Backend - Update consultationController.ts
// ============================================================

import { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";
import { razorpay } from "../config/razorpay.js";
import crypto from "crypto";

export const consultationController = {
  // ======================================================
  // GET AVAILABLE SLOTS FOR A DATE RANGE
  // ======================================================
  getAvailableSlots: async (_: Request, res: Response) => {
    const slots = await prisma.timeSlot.findMany({
      orderBy: { date: "asc" },
    });

    res.json({
      success: true,
      message: "Available slots",
      data: slots,
      meta: { total: slots.length },
    });
  },

  // ======================================================
  // CLIENT BOOKING WITH SLOT RESERVATION
  // ======================================================
  bookForClient: async (req: Request, res: Response) => {
    try {
      const data = req.body;

      console.log(data);

      // Validate slot availability
      if (data.slotId) {
        const slot = await prisma.timeSlot.findUnique({
          where: { id: parseInt(data.slotId) },
        });

        if (!slot || slot.isBooked || slot.isBlocked) {
          return res.status(400).json({
            success: false,
            message: "Selected time slot is no longer available",
          });
        }
      }

      const amountInPaise = Math.round(data.paymentAmount * 100);

      const order = await razorpay.orders.create({
        amount: amountInPaise,
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
      });

      return res.status(201).json({
        success: true,
        orderId: order.id,
        amount: amountInPaise,
        key: process.env.RAZORPAY_KEY_ID,
        formData: data,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ success: false, error });
    }
  },

  // ======================================================
  // VERIFY PAYMENT AND BOOK SLOT
  // ======================================================
  verifyPayment: async (req: Request, res: Response) => {
    try {
      const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        formData,
      } = req.body;

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

      // Use transaction to ensure slot is booked atomically
      const result = await prisma.$transaction(async (tx) => {
        // Check and book slot
        let slotId = null;
        if (formData.slotId) {
          const slot = await tx.timeSlot.findUnique({
            where: { id: parseInt(formData.slotId) },
          });

          if (!slot || slot.isBooked || slot.isBlocked) {
            throw new Error("Time slot is no longer available");
          }

          slotId = slot.id;
        }

        // Create consultation
        const consultation = await tx.consultation.create({
          data: {
            consultationType: formData.consultType,
            preferredMode: formData.consultModes[0],
            consultationDate: formData.schedule?.date || "",
            timeSlot: slotId
              ? {
                  connect: { id: slotId },
                }
              : undefined,

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

        // Mark slot as booked
        if (slotId) {
          await tx.timeSlot.update({
            where: { id: slotId },
            data: {
              isBooked: true,
              consultationId: consultation.id,
            },
          });
        }

        return consultation;
      });

      return res.json({
        success: true,
        message: "Payment verified & consultation created",
        consultationId: result.id,
      });
    } catch (err: any) {
      console.log(err);
      return res.status(500).json({
        success: false,
        error: err.message || "Booking failed",
      });
    }
  },

  getAllBookings: async (req: Request, res: Response) => {
    console.log("ssdsds");
    try {
      const bookings = await prisma.consultation.findMany({
        include: {
          timeSlot: true,
        },
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

const addMinutes = (time: string, mins: number) => {
  const [h, m] = time.split(":").map(Number);
  const d = new Date();
  d.setHours(h, m + mins, 0);
  return d.toTimeString().slice(0, 5);
};

export const adminSlotController = {
  // Generate slots for a date
  generateSlots: async (req: Request, res: Response) => {
    const { date, startTime, endTime, duration } = req.body;

    const slots = [];
    let start = startTime;

    while (start < endTime) {
      const end = addMinutes(start, duration);

      slots.push({
        date: new Date(date),
        startTime: start,
        endTime: end,
        duration,
      });

      start = end;
    }

    await prisma.timeSlot.createMany({ data: slots });

    res.json({ success: true });
  },

  // Admin sees all slots
  getSlots: async (req: Request, res: Response) => {
    const { date } = req.query;

    const slots = await prisma.timeSlot.findMany({
      where: date ? { date: new Date(date as string) } : {},
      orderBy: { startTime: "asc" },
    });

    res.json({ success: true, data: slots });
  },

  // Block slots
  blockSlots: async (req: Request, res: Response) => {
    const { slotIds } = req.body;

    await prisma.timeSlot.updateMany({
      where: { id: { in: slotIds }, isBooked: false },
      data: { isBlocked: true },
    });

    res.json({ success: true });
  },

  // Unblock slots
  unblockSlots: async (req: Request, res: Response) => {
    const { slotIds } = req.body;

    await prisma.timeSlot.updateMany({
      where: { id: { in: slotIds } },
      data: { isBlocked: false },
    });

    res.json({ success: true });
  },
};
export const adminConsultationController = {
  getAll: async (req: Request, res: Response) => {
    const { status, mode } = req.query;

    const consultations = await prisma.consultation.findMany({
      where: {
        status: status as string | undefined,
        preferredMode: mode as string | undefined,
      },
      include: { timeSlot: true },
      orderBy: { createdAt: "desc" },
    });

    res.json({
      success: true,
      data: consultations,
    });
  },

  updateStatus: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { status } = req.body;

    const updated = await prisma.consultation.update({
      where: { id },
      data: { status },
    });

    res.json({
      success: true,
      message: "Status updated",
      data: updated,
    });
  },

  delete: async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    await prisma.consultation.delete({ where: { id } });

    res.json({
      success: true,
      message: "Consultation deleted",
    });
  },
};
