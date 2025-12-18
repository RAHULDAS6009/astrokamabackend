import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "../config/s3.js";
import { Request, Response } from "express";

export const uploadFile = async (req: Request, res: Response) => {
  console.log("hello world");
  try {
    const file = req.file;
    const type = req.body.type || "image"; // or "pdf"

    if (!file) return res.status(400).json({ message: "No file" });

    const ext = file.originalname.split(".").pop();
    const random =
      Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 8);
    const key = `${type}/${random}.${ext}`;

    const cmd = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype, // important
      // ACL: "public-read", // avoid for security — use presigned or CloudFront
    });

    await s3.send(cmd);

    // public URL pattern (works if object is public or you use CloudFront)
    const url = `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

    return res.json({ success: true, url, key });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Upload failed" });
  }
};
