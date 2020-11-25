import { Router } from "express";

import {
  checkAuth,
  LoginBodyValidator,
  RegisterBodyValidator,
} from "../middleware";

import {
  LoginController,
  RegisterController,
  UserDetailController,
} from "./controllers";

const router = Router();

router.post("/register", RegisterBodyValidator, RegisterController);
router.post("/login", LoginBodyValidator, LoginController);
router.get("/detail", checkAuth, UserDetailController);

export default router;
