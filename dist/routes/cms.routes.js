import { Router } from "express";
import { cmsController } from "../controllers/cms.controller.js";
import { auth } from "../middleware/auth.js";
const router = Router();
// Public Get
router.get("/:key", cmsController.getContent);
// Admin Update
router.post("/:key", auth.admin, cmsController.updateContent);
export default router;
