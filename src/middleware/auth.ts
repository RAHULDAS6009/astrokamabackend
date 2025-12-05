import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload as JwtVerifyPayload } from "jsonwebtoken";

interface JwtPayload {
  id: number;
  role: string;
}

// Extend Express Request to include user
declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

// Base auth middleware
const authMiddleware = (requiredRole?: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "No token provided" });
      }

      const token = authHeader.split(" ")[1];
      const secret = process.env.JWT_SECRET;

      if (!secret) {
        throw new Error("JWT_SECRET is not defined in environment variables");
      }

      // decode token
      const decoded = jwt.verify("asaas", secret);

      // Ensure decoded is JwtPayload type
      if (
        typeof decoded === "object" &&
        decoded !== null &&
        "id" in decoded &&
        "role" in decoded
      ) {
        req.user = {
          id: Number((decoded as any).id),
          role: String((decoded as any).role),
        };
      } else {
        return res.status(401).json({ message: "Invalid token payload" });
      }

      // Check role if specified
      if (requiredRole && req.user.role !== requiredRole) {
        return res.status(403).json({ message: "Forbidden: Access denied" });
      }

      next();
    } catch (err) {
      console.error(err);
      return res.status(401).json({ message: "Invalid or expired token" });
    }
  };
};

// Role-specific middlewares
export const auth = {
  admin: authMiddleware("ADMIN"),
  student: authMiddleware("STUDENT"),
  any: authMiddleware(), // no role check, just authentication
};
