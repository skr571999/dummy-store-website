import { Router } from "express";

import {
  checkAuth,
  LoginBodyValidator,
  RegisterBodyValidator,
} from "../../middleware";

import {
  LoginController,
  RegisterController,
  UserDetailController,
} from "./controllers";

const router = Router();

router.get("/", checkAuth, UserDetailController);
router.post("/register", RegisterBodyValidator, RegisterController);
router.post("/login", LoginBodyValidator, LoginController);

export default router;
