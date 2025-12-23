import { Request, Response, Router } from "express";
import { prisma } from "../lib/prisma.js";

const router = Router();

const formatTime = (time: string) => {
  const [hourStr, minute] = time.split(":");
  let hour = Number(hourStr);
  const ampm = hour >= 12 ? "pm" : "am";
  hour = hour % 12 || 12;
  return `${hour}:${minute} ${ampm}`;
};

const formatDaysJSON = (classDays: any, classTime: any) => {
  const selectedDays = Object.keys(classDays)
    .filter((day) => classDays[day])
    .map((day) => day.charAt(0).toUpperCase() + day.slice(1));

  if (selectedDays.length === 0) return null;

  const from = formatTime(classTime.from);
  const to = formatTime(classTime.to);

  return `${selectedDays.join(", ")} - ${from} to ${to}`;
};

/* ======================================================
   CREATE BRANCH + SEMSTERS
====================================================== */
router.post("/branch", async (req: Request, res: Response) => {
  try {
    const { courseData } = req.body;

    console.log(courseData);

    // =========================
    // 1️⃣ FIND LOCATION
    // =========================
    let locationRecord = null;

    if (courseData.branch) {
      locationRecord = await prisma.location.findFirst({
        where: {
          location: {
            equals: courseData.branch,
            mode: "insensitive",
          },
        },
      });

      if (!locationRecord) {
        return res.status(404).json({
          error: `Location '${courseData.branch}' not found`,
        });
      }
    }

    // =========================
    // 2️⃣ FORMAT CLASS DAYS
    // =========================
    const daysJSON = formatDaysJSON(courseData.classDays, courseData.classTime);

    // =========================
    // 3️⃣ MAP SEMESTERS
    // =========================
    const semesters =
      courseData.semesters?.map((s: any) => ({
        name: s.name,
        number: Number(s.semesterNumber),
        startDate: s.start || null,
        endDate: s.end || null,
        admissionFee: s.admissionFees != null ? Number(s.admissionFees) : null,
        fees: s.monthlyFees != null ? Number(s.monthlyFees) : null,
        lateFeeDate: s.lateFineAfterDate || null,
        lateFeeFine: s.lateFineAmount != null ? Number(s.lateFineAmount) : null,
      })) || [];

    // =========================
    // 4️⃣ CREATE BRANCH
    // =========================

    console.log(courseData.photo1, courseData.photo2);
    const branch = await prisma.branch.create({
      data: {
        // BASIC
        name: courseData.courseName,
        branchCode: courseData.batchCode,
        durationMonths: Number(courseData.courseDuration),
        module: courseData.module,

        // LOCATION CONNECT
        location: locationRecord
          ? { connect: { id: locationRecord.id } }
          : undefined,

        // CLASS INFO
        daysPerWeek: courseData.daysPerWeek,
        daysJSON,
        classHour: Number(courseData.classTime?.hours),

        // TABS
        tabHeader1: courseData.tabName?.header1 || null,
        tabHeader2: courseData.tabName?.header2 || null,

        isoffline: courseData.isOffline,

        isActive: courseData.isActive,

        // PHOTOS (store filenames only)
        uploadPhoto1: courseData.photo1 || "",
        uploadPhoto2: courseData.photo2 || "",

        // FEES
        noofsemster: Number(courseData.staticSemesterInfo?.numberOfSemesters),
        admissionfee: Number(courseData.staticSemesterInfo?.admissionFee),
        monthlyfee: Number(courseData.staticSemesterInfo?.monthlyFee),

        // EXTRA
        text: courseData.text,

        // SEMESTERS
        semsters: {
          create: semesters,
        },
      },
      include: {
        semsters: true,
        location: true,
      },
    });

    res.json(branch);
  } catch (error) {
    console.error("Create branch error:", error);
    res.status(500).json({ error: "Failed to create branch" });
  }
});

/**
 * GET all locations
 */
router.get("/branches", async (_req: Request, res: Response) => {
  try {
    const branches = await prisma.branch.findMany({
      include: {
        location: {
          select: { id: true, location: true },
        },
        semsters: {
          orderBy: { number: "asc" },
        },
      },
    });

    res.json(branches);
  } catch (error) {
    console.error("Fetch branches error:", error);
    res.status(500).json({ error: "Failed to fetch branches" });
  }
});

router.put("/branches/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const existing = await prisma.branch.findUnique({
      where: { id },
      include: { semsters: true },
    });

    if (!existing) {
      return res.status(404).json({ error: "Branch not found" });
    }

    // =========================
    // 1️⃣ LOCATION CONNECT (OPTIONAL)
    // =========================
    let locationConnect = undefined;

    if (data.location?.location) {
      const loc = await prisma.location.findFirst({
        where: {
          location: {
            equals: data.location.location,
            mode: "insensitive",
          },
        },
      });

      if (!loc) {
        return res
          .status(404)
          .json({ error: `Location '${data.location.location}' not found` });
      }

      locationConnect = { connect: { id: loc.id } };
    }

    // =========================
    // 2️⃣ SEMESTER SYNC
    // =========================
    const incoming = data.semsters || [];
    const incomingIds = incoming.filter((s: any) => s.id).map((s: any) => s.id);

    await prisma.$transaction(async (tx) => {
      // 🔴 DELETE REMOVED SEMESTERS
      await tx.semester.deleteMany({
        where: {
          branchId: id,
          id: { notIn: incomingIds },
        },
      });

      // 🔵 UPSERT SEMESTERS
      for (const sem of incoming) {
        if (sem.id) {
          await tx.semester.update({
            where: { id: sem.id },
            data: {
              name: sem.name,
              number: Number(sem.number),
              startDate: sem.startDate || null,
              endDate: sem.endDate || null,
              fees: sem.fees != null ? Number(sem.fees) : null,
              admissionFee:
                sem.admissionFee != null ? Number(sem.admissionFee) : null,
              lateFeeDate: sem.lateFeeDate || null,
              lateFeeFine:
                sem.lateFeeFine != null ? Number(sem.lateFeeFine) : null,
            },
          });
        } else {
          await tx.semester.create({
            data: {
              name: sem.name,
              number: Number(sem.number),
              startDate: sem.startDate || null,
              endDate: sem.endDate || null,
              fees: sem.fees != null ? Number(sem.fees) : null,
              admissionFee:
                sem.admissionFee != null ? Number(sem.admissionFee) : null,
              lateFeeDate: sem.lateFeeDate || null,
              lateFeeFine:
                sem.lateFeeFine != null ? Number(sem.lateFeeFine) : null,
              branchId: id,
            },
          });
        }
      }

      // =========================
      // 3️⃣ UPDATE BRANCH
      // =========================
      await tx.branch.update({
        where: { id },
        data: {
          name: data.name,
          branchCode: data.branchCode,
          durationMonths: Number(data.durationMonths),
          module: data.module,
          daysPerWeek: data.daysPerWeek,
          daysJSON: data.daysJSON,

          tabHeader1: data.tabHeader1 || null,
          tabHeader2: data.tabHeader2 || null,

          uploadPhoto1: data.uploadPhoto1 || null,
          uploadPhoto2: data.uploadPhoto2 || null,

          noofsemster: Number(data.noofsemster),
          admissionfee: Number(data.admissionfee),
          monthlyfee: Number(data.monthlyfee),

          classHour: Number(data.classHour),
          classType: data.classType || null,
          daysPerClassType:
            data.daysPerClassType != null
              ? Number(data.daysPerClassType)
              : null,

          text: data.text,
          color: data.color,

          ...(locationConnect && { location: locationConnect }),
        },
      });
    });

    const updated = await prisma.branch.findUnique({
      where: { id },
      include: {
        location: true,
        semsters: { orderBy: { number: "asc" } },
      },
    });

    res.json(updated);
  } catch (error) {
    console.error("Update branch error:", error);
    res.status(500).json({ error: "Update failed" });
  }
});

router.delete("/branches/:id", async (req: Request, res: Response) => {
  try {
    await prisma.branch.delete({
      where: { id: req.params.id },
    });

    res.json({ success: true, message: "Branch deleted" });
  } catch (error) {
    console.error("Delete branch error:", error);
    res.status(500).json({ error: "Delete failed" });
  }
});

/**
 * CREATE location
 *
 */
const LOCATION_ALIASES: Record<string, string> = {
  tolluguge: "Tollygunge",
  "tolly gunge": "Tollygunge",
  tollygunge: "Tollygunge",

  midnapur: "Midnapore",
  midnapore: "Midnapore",
};

const normalizeLocation = (input: string) => {
  const key = input.toLowerCase().replace(/\s+/g, " ").trim();
  return LOCATION_ALIASES[key] || capitalizeWords(key);
};

const capitalizeWords = (str: string) =>
  str.replace(/\b\w/g, (c) => c.toUpperCase());

router.post("/location", async (req, res) => {
  const { location } = req.body;

  if (!location?.trim()) {
    return res.status(400).json({ error: "Location required" });
  }

  try {
    // 1️⃣ Normalize
    const normalized = normalizeLocation(location);

    // 2️⃣ Check existing (case-insensitive)
    const existing = await prisma.location.findFirst({
      where: {
        location: {
          equals: normalized,
          mode: "insensitive",
        },
      },
    });

    if (existing) {
      return res.json(existing); // ✅ return existing instead of error
    }

    // 3️⃣ Create clean location
    const created = await prisma.location.create({
      data: { location: normalized },
    });

    res.json(created);
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ error: "Failed to create location" });
  }
});
router.get("/locations", async (_req, res) => {
  try {
    const locations = await prisma.location.findMany({
      orderBy: { location: "asc" },
    });

    // 🔹 Normalize again (safety for old bad data)
    const uniqueMap = new Map<string, any>();

    for (const loc of locations) {
      const normalized = normalizeLocation(loc.location);

      if (!uniqueMap.has(normalized.toLowerCase())) {
        uniqueMap.set(normalized.toLowerCase(), {
          ...loc,
          location: normalized,
        });
      }
    }

    res.json([...uniqueMap.values()]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch locations" });
  }
});

/**
 * UPDATE location
 */
router.put("/location/:id", async (req, res) => {
  const { id } = req.params;
  const { location } = req.body;

  if (!location?.trim()) {
    return res.status(400).json({ error: "Location required" });
  }

  const normalized = normalizeLocation(location);

  try {
    // Check if another location already exists with same normalized name
    const existing = await prisma.location.findFirst({
      where: {
        location: {
          equals: normalized,
          mode: "insensitive",
        },
        NOT: { id },
      },
    });

    if (existing) {
      return res.status(409).json({
        error: "Location with same name already exists",
      });
    }

    const updated = await prisma.location.update({
      where: { id },
      data: { location: normalized },
    });

    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update location" });
  }
});

/**
 * DELETE location
 */
router.delete("/location/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Check if branches are using this location
    const branchCount = await prisma.branch.count({
      where: { locationId: id },
    });

    if (branchCount > 0) {
      return res.status(400).json({
        error:
          "Location is used by branches. Reassign branches before deleting.",
      });
    }

    await prisma.location.delete({
      where: { id },
    });

    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete location" });
  }
});

export default router;
