import { Router } from "express";
import { batchController } from "../controllers/batch.controller.js";
import { auth } from "../middleware/auth.js";
// import auth from "../middlewares/auth";
const router = Router();
// Only admin
router.use(auth.admin);
router.post("/", batchController.createBatch);
router.get("/", batchController.getBatches);
router.put("/:id", batchController.updateBatch);
export default router;
