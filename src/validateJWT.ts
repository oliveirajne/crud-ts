import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const validateJWT = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header("Authorization")?.split(" ")[1]; // Bearer <token>

  const SECRET_KEY = process.env.JWT_SECRET || 'default_secret_key';

  if (!token) {
    res.status(401).json({ error: "Missing token" });
    return;
  }

  try {
    jwt.verify(token, SECRET_KEY as string);
    next();
  } catch (error) {
    res.status(403).json({ error: "Invalid token" });
    return;
  }
};
