import { Router } from "express";
import { auth } from "../middleware/auth.js";
import { materialController } from "../controllers/material.controller.js";
const router = Router();
// Students can access their materials
router.get("/", auth.student, materialController.getMaterialsByBatch);
export default router;
