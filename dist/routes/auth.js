"use strict";
// import { Router } from "express";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { prisma } from "../lib/prisma";
// const router = Router();
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;
//   const user = await prisma.user.findUnique({ where: { email } });
//   if (!user) return res.status(404).json({ message: "User not found" });
//   const match = await bcrypt.compare(password, user.password);
//   if (!match) return res.status(401).json({ message: "Incorrect password" });
//   const token = jwt.sign(
//     { id: user.id, role: user.role },
//     process.env.JWT_SECRET || "secret",
//     { expiresIn: "1d" }
//   );
//   res.json({ token });
// });
// export default router;
