import { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export const courseController = {
  /* ------------------------------------
     CREATE COURSE (with branches + semesters)
  -------------------------------------- */
  createCourse: async (req: Request, res: Response) => {
    try {
      const {
        ranking,
        name,
        type,
        description,
        duration,
        bannerpdf,
        bannerimage,
        courseCode,
        gridTitle,
        courseType,
        branches,
      } = req.body;

      const course = await prisma.course.create({
        data: {
          ranking: ranking ? Number(ranking) : null,
          name,
          type,
          description,
          duration: duration ? Number(duration) : null,
          bannerpdf,
          bannerimage,
          courseCode,
          gridTitle,
          courseType,

          branches: {
            create:
              branches?.map((b: any) => ({
                name: b.name,
                color: b.color ?? null,
                durationMonths: b.durationMonths ?? null,
                classType: b.classType ?? null,
                daysPerClassType: b.daysPerClassType ?? null,
                classHour: b.classHour ?? null,
                daysJSON: b.daysJSON ?? null,
                branchCode: b.branchCode ?? "",
                semsters: {
                  create:
                    b.semsters?.map((s: any) => ({
                      name: s.name,
                      number: s.number,
                      startDate: s.startDate,
                      endDate: s.endDate,
                      fees: s.fees,
                      lateFeeDate: s.lateFeeDate,
                      lateFeeFine: s.lateFeeFine,
                      admissionFee: s.admissionFee,
                    })) || [],
                },
              })) || [],
          },
        },

        include: {
          branches: {
            include: {
              semsters: true,
            },
          },
        },
      });

      return res.json({ success: true, data: course });
    } catch (error: any) {
      console.log(error);
      return res.status(400).json({ success: false, message: error.message });
    }
  },

  /* ------------------------------------
     GET ALL COURSES
  -------------------------------------- */
  getAllCourses: async (req: Request, res: Response) => {
    try {
      const courses = await prisma.course.findMany({
        orderBy: { createdAt: "desc" },
        include: {
          branches: {
            include: { semsters: true },
          },
          studyMaterials: true,
          students: true,
          _count: {
            select: {
              students: true,
              branches: true,
              studyMaterials: true,
            },
          },
        },
      });

      return res.json({ success: true, data: courses });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch courses",
        error: error.message,
      });
    }
  },

  /* ------------------------------------
     GET SINGLE COURSE
  -------------------------------------- */
  getCourseById: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const course = await prisma.course.findUnique({
        where: { id },
        include: {
          branches: {
            include: { semsters: true },
          },
          studyMaterials: true,
          students: {
            orderBy: { rollNo: "asc" },
          },
        },
      });

      if (!course) {
        return res.status(404).json({
          success: false,
          message: "Course not found",
        });
      }

      return res.json({ success: true, data: course });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch course",
        error: error.message,
      });
    }
  },

  /* ------------------------------------
     UPDATE COURSE
  -------------------------------------- */
  updateCourse: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);
      const {
        ranking,
        name,
        type,
        description,
        duration,
        bannerpdf,
        bannerimage,
        courseCode,
        gridTitle,
        courseType,
        isActive,
        branches = [],
      } = req.body;

      /* ---------------------------------------------
       1. COLLECT EXISTING BRANCH & SEMESTER IDs
    ----------------------------------------------*/
      const existing = await prisma.course.findUnique({
        where: { id },
        include: {
          branches: {
            include: { semsters: true },
          },
        },
      });

      if (!existing) {
        return res
          .status(404)
          .json({ success: false, message: "Course not found" });
      }

      const existingBranchIds = existing.branches.map((b) => b.id);

      const incomingBranchIds = branches
        .filter((b: any) => b.id)
        .map((b: any) => b.id);

      const branchesToDelete = existingBranchIds.filter(
        (bId) => !incomingBranchIds.includes(bId)
      );

      /* ---------------------------------------------
       2. PREPARE BRANCH UPDATE/CREATE OPERATIONS
    ----------------------------------------------*/
      const branchOps: any = {
        deleteMany: { id: { in: branchesToDelete } },
        upsert: [],
        create: [],
      };

      for (const b of branches) {
        const baseBranchData = {
          name: b.name,
          branchCode: b.branchCode ?? null,
          color: b.color ?? null,
          durationMonths: b.durationMonths ?? null,
          classType: b.classType ?? null,
          daysPerClassType: b.daysPerClassType ?? null,
          classHour: b.classHour ?? null,
          daysJSON: b.daysJSON ?? null,
        };

        // NEW BRANCH → CREATE
        if (!b.id) {
          branchOps.create.push({
            ...baseBranchData,
            semsters: {
              create:
                b.semsters?.map((s: any) => ({
                  name: s.name,
                  number: s.number,
                  startDate: s.startDate,
                  endDate: s.endDate,
                  fees: s.fees,
                  lateFeeDate: s.lateFeeDate,
                  lateFeeFine: s.lateFeeFine,
                  admissionFee: s.admissionFee,
                })) ?? [],
            },
          });
        }

        // EXISTING BRANCH → UPSERT
        if (b.id) {
          const existingSemIds =
            existing.branches
              .find((x) => x.id === b.id)
              ?.semsters.map((s) => s.id) ?? [];

          const incomingSemIds =
            b.semsters?.filter((s: any) => s.id).map((s: any) => s.id) ?? [];

          const semToDelete = existingSemIds.filter(
            (sid) => !incomingSemIds.includes(sid)
          );

          branchOps.upsert.push({
            where: { id: b.id },
            update: {
              ...baseBranchData,
              semsters: {
                deleteMany: { id: { in: semToDelete } },
                upsert: (b.semsters ?? [])
                  .filter((s: any) => s.id)
                  .map((s: any) => ({
                    where: { id: s.id },
                    update: {
                      name: s.name,
                      number: s.number,
                      startDate: s.startDate,
                      endDate: s.endDate,
                      fees: s.fees,
                      lateFeeDate: s.lateFeeDate,
                      lateFeeFine: s.lateFeeFine,
                      admissionFee: s.admissionFee,
                    },
                    create: {
                      name: s.name,
                      number: s.number,
                      startDate: s.startDate,
                      endDate: s.endDate,
                      fees: s.fees,
                      lateFeeDate: s.lateFeeDate,
                      lateFeeFine: s.lateFeeFine,
                      admissionFee: s.admissionFee,
                    },
                  })),
                create: (b.semsters ?? [])
                  .filter((s: any) => !s.id)
                  .map((s: any) => ({
                    name: s.name,
                    number: s.number,
                    startDate: s.startDate,
                    endDate: s.endDate,
                    fees: s.fees,
                    lateFeeDate: s.lateFeeDate,
                    lateFeeFine: s.lateFeeFine,
                    admissionFee: s.admissionFee,
                  })),
              },
            },
            create: {
              ...baseBranchData,
              semsters: {
                create:
                  b.semsters?.map((s: any) => ({
                    name: s.name,
                    number: s.number,
                    startDate: s.startDate,
                    endDate: s.endDate,
                    fees: s.fees,
                    lateFeeDate: s.lateFeeDate,
                    lateFeeFine: s.lateFeeFine,
                    admissionFee: s.admissionFee,
                  })) ?? [],
              },
            },
          });
        }
      }

      /* ---------------------------------------------
       3. UPDATE COURSE
    ----------------------------------------------*/
      const updatedCourse = await prisma.course.update({
        where: { id },
        data: {
          ranking: ranking ? Number(ranking) : null,
          name,
          type,
          description,
          duration: duration ? Number(duration) : null,
          bannerpdf,
          bannerimage,
          courseCode,
          gridTitle,
          courseType,
          isActive,

          branches: branchOps,
        },
        include: {
          branches: {
            include: { semsters: true },
          },
        },
      });

      return res.json({
        success: true,
        message: "Course updated successfully",
        data: updatedCourse,
      });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Failed to update course",
        error: error.message,
      });
    }
  },

  /* ------------------------------------
     DELETE COURSE
  -------------------------------------- */
  deleteCourse: async (req: Request, res: Response) => {
    try {
      const id = Number(req.params.id);

      const studentCount = await prisma.student.count({
        where: { courseId: id },
      });

      if (studentCount > 0) {
        return res.status(400).json({
          success: false,
          message: `Cannot delete course with ${studentCount} students`,
        });
      }

      await prisma.course.delete({ where: { id } });

      return res.json({
        success: true,
        message: "Course deleted successfully",
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: "Failed to delete course",
        error: error.message,
      });
    }
  },

  /* ------------------------------------
     ENROLL STUDENT
  -------------------------------------- */
  // enrollStudent: async (req: Request, res: Response) => {
  //   try {
  //     const courseId = Number(req.params.courseId);
  //     const studentData = req.body;

  //     const course = await prisma.course.findUnique({
  //       where: { id: courseId },
  //     });

  //     if (!course)
  //       return res
  //         .status(404)
  //         .json({ success: false, message: "Course not found" });

  //     const last = await prisma.student.findFirst({
  //       where: { courseId },
  //       orderBy: { rollNo: "desc" },
  //     });

  //     const nextRollNo = last ? last.rollNo + 1 : 1;
  //     const studentId = `${course.courseCode}_${nextRollNo}`;

  //     const student = await prisma.student.create({
  //       data: {
  //         ...studentData,
  //         rollNo: nextRollNo,
  //         studentId,
  //         courseId,
  //       },
  //     });

  //     return res.json({
  //       success: true,
  //       message: "Student enrolled successfully",
  //       data: student,
  //     });
  //   } catch (error: any) {
  //     return res.status(500).json({
  //       success: false,
  //       message: "Failed to enroll student",
  //       error: error.message,
  //     });
  //   }
  // },

  /* ------------------------------------
     COURSE STATS
  -------------------------------------- */
  getCourseStats: async (req: Request, res: Response) => {
    try {
      const courses = await prisma.course.findMany({
        select: {
          id: true,
          name: true,
          courseCode: true,
          type: true,
          isActive: true,
          _count: {
            select: { students: true },
          },
        },
      });

      const summary = {
        totalCourses: courses.length,
        activeCourses: courses.filter((c) => c.isActive).length,
        totalStudents: courses.reduce((acc, c) => acc + c._count.students, 0),
      };

      return res.json({
        success: true,
        data: { summary, courses },
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: "Failed to fetch stats",
        error: error.message,
      });
    }
  },
};
