import { Request, Response } from "express";
import { sign } from "jsonwebtoken";

import { User as UserModal } from "./modals";
import { MyRequest, MyResponse } from "../types";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const RegisterController = async (req: Request, res: Response) => {
    (async () => {
        try {
            const registerData = req.body;
            console.log(registerData);

            const userData = await UserModal.create(registerData);
            console.log(userData);

            res.send({ message: "Registration successful" });
        } catch (error) {
            res.send({ error: "Error Occured" });
        }
    })();
};

export const LoginController = async (req: Request, res: Response) => {
    (async () => {
        try {
            const { storeId, password } = req.body;

            const userData = await UserModal.findOne(
                { storeId, password },
                { password: 0, createdAt: 0, updatedAt: 0, __v: 0 }
            );

            if (userData) {
                const token = sign(userData.toObject(), JWT_SECRET);
                res.send({
                    message: "Login Successful",
                    data: { user: userData, token },
                });
            } else {
                res.status(400).send({ error: "Invalid Login Crendicals" });
            }
        } catch (error) {
            res.send({ error: "Error Occured" });
        }
    })();
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
