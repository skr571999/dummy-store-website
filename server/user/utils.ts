import { NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { MyRequest, MyResponse } from "../types";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const checkAuth = (
    req: MyRequest,
    res: MyResponse,
    next: NextFunction
) => {
    try {
        const authorizationHeader = req.headers.authorization;
        if (authorizationHeader) {
            const token = authorizationHeader.split("Bearer ")[1];

            req["user"] = verify(token, JWT_SECRET);
            next();
        } else {
            throw new Error("No Token");
        }
    } catch (error) {
        res.status(401).json({ error: "Invalid Token" });
    }
};
