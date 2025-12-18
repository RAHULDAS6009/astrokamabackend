import { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

export const courseController = {
  // =========================================
  // ADD COURSE
  // =========================================
  addCourse: async (req: Request, res: Response) => {
    try {
      const { ranking, name, description, bannerpdf, bannerimage, gridTitle } =
        req.body;

      const course = await prisma.course.create({
        data: {
          ranking,
          name,
          description,
          bannerpdf,
          bannerimage,
          gridTitle,
        },
      });

      return res.status(201).json({
        success: true,
        message: "Course created successfully",
        data: course,
      });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: error.message || "Failed to create course",
      });
    }
  },

  // =========================================
  // GET ALL COURSES
  // =========================================
  getAllCourses: async (_req: Request, res: Response) => {
    try {
      const courses = await prisma.course.findMany({
        orderBy: { ranking: "asc" },
      });

      return res.json({
        success: true,
        data: courses,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Failed to fetch courses",
      });
    }
  },

  // =========================================
  // GET SINGLE COURSE (FOR EDIT PAGE)
  // =========================================
  getCourseById: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const course = await prisma.course.findUnique({
        where: { id: Number(id) },
      });

      if (!course) {
        return res.status(404).json({
          success: false,
          message: "Course not found",
        });
      }

      return res.json({
        success: true,
        data: course,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Failed to fetch course",
      });
    }
  },

  // =========================================
  // UPDATE COURSE
  // =========================================
  updateCourse: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { ranking, name, description, bannerpdf, bannerimage, gridTitle } =
        req.body;

      const course = await prisma.course.update({
        where: { id: Number(id) },
        data: {
          ranking,
          name,
          description,
          bannerpdf,
          bannerimage,
          gridTitle,
        },
      });

      return res.json({
        success: true,
        message: "Course updated successfully",
        data: course,
      });
    } catch (error: any) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: error.message || "Failed to update course",
      });
    }
  },

  // =========================================
  // DELETE COURSE
  // =========================================
  deleteCourse: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await prisma.course.delete({
        where: { id: Number(id) },
      });

      return res.json({
        success: true,
        message: "Course deleted successfully",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        success: false,
        message: "Failed to delete course",
      });
    }
  },
};
