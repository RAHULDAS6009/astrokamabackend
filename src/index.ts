import dotenv from "dotenv";
dotenv.config();
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import routes from "./routes/index.js";
import { uploadFile } from "./controllers/uploadImageController.js";
import upload from "./middleware/multer.js";
import { prisma } from "./lib/prisma.js";

import locationroutes from "./routes/location.routes.js";

const app = express();
const corsOptions = {
  origin: ["https://astrokama.com", "https://astro-admin-seven.vercel.app"],
  // Replace with your actual frontend domain
  optionsSuccessStatus: 200,
  // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.method, req.url);
  next();
});

// app.use("/api/auth", authRoutes);

app.get("/", async (req: Request, res: Response) => {
  res.json({ msg: "helo world" });
});

app.use("/api", locationroutes);

/**
 * GET all branches with tabName = tabHeader1 + tabHeader2
 */

app.use("/api/v1/", routes);

// ============================================
// UPDATED /allcourse ENDPOINT
// ============================================
// Add 'id' to both course and branches so frontend has all data needed

// ============================================
// OPTIONAL: Add this route for fallback
// ============================================
// Only needed if you want a separate endpoint to find branch
// But with the above fix, the frontend won't need to call this

app.post("/upload-file", upload.single("file"), uploadFile);
app.post("/", upload.single("file"), uploadFile);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port 5000`);
});
