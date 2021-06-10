import { NextFunction } from "express";
import { verify } from "jsonwebtoken";
import multer from "multer";
import path from "path";
import { body } from "express-validator";

import { MyRequest, MyResponse, User } from "../types";
import { JWT_SECRET } from "../constants";

export const RegisterBodyValidator = [
  body("name").trim().exists({ checkNull: true, checkFalsy: true }),
  body("email").isEmail().normalizeEmail(),
  body("password").trim().exists({ checkNull: true, checkFalsy: true }),
];

export const LoginBodyValidator = [
  body("email").isEmail().normalizeEmail(),
  body("password").trim().exists({ checkNull: true, checkFalsy: true }),
];

export const checkAuth = (
  req: MyRequest,
  res: MyResponse,
  next: NextFunction
) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (authorizationHeader) {
      const token = authorizationHeader.split("Bearer ")[1];

      req["user"] = <User>verify(token, JWT_SECRET);
      next();
    } else {
      throw new Error("No Token");
    }
  } catch (error) {
    res.status(401).json({ error: error.message, status: "fail" });
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

export const upload = multer({ storage: storage });
