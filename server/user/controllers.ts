import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { validationResult } from "express-validator";

import { User as UserModal } from "./modals";
import { MyRequest, MyResponse } from "../types";
import { JWT_SECRET } from "../constants";

export const RegisterController = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array(), message: "Registration Failed" });
    }

    const isEmailRegistered =
      (await UserModal.find({ email: req.body.email })).length > 0;

    if (!isEmailRegistered) {
      const registeredUser = (await UserModal.create(req.body)).toJSON();

      delete registeredUser.__v;
      delete registeredUser.createdAt;
      delete registeredUser.updatedAt;
      delete registeredUser.password;

      res.send({ message: "Registration successful", data: registeredUser });
    } else {
      throw new Error("Email Already Registered");
    }
  } catch (error) {
    res.send({ error: error.message, message: "Registration Failed" });
  }
};

export const LoginController = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.array(), message: "Login Failed" });
    }

    const userData = await UserModal.findOne(req.body, {
      password: 0,
      createdAt: 0,
      updatedAt: 0,
      __v: 0,
    });

    if (userData) {
      const token = sign(userData.toObject(), JWT_SECRET);
      res.send({
        message: "Login Successful",
        data: { user: userData, token },
      });
    } else {
      throw new Error("Invalid Login Credentials");
    }
  } catch (error) {
    res.status(400).send({ error: error.message, message: "Login Failed" });
  }
};

export const UserDetailController = async (req: MyRequest, res: MyResponse) => {
  (async () => {
    try {
      // const { storeId, } = req.user;

      res.send({
        data: req.user,
      });
      // } else {
      //     res.status(400).send({ error: "Invalid Login Crendicals" });
      // }
    } catch (error) {
      res.send({ error: "Error Occured" });
    }
  })();
};
