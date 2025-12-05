import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();
const corsOptions = {
  origin: "http://localhost:8080", // Replace with your actual frontend domain
  optionsSuccessStatus: 200, // Some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors());
app.use(express.json());

// app.use("/api/auth", authRoutes);
app.use("/api/v1/", routes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port 5000`);
});
