import { Router } from "express";
import { courseController } from "../controllers/course.controller.js";
// import auth from "../middlewares/auth";

const router = Router();

router.get("/", courseController.getAllCourses);
// Only admin

export default router;
