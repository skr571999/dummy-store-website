import { Router } from "express";

import {
    LoginController,
    RegisterController,
    UserDetailController,
} from "./controllers";
import { checkAuth } from "./utils";

const router = Router();

router.post("/register", RegisterController);
router.post("/login", LoginController);
router.get("/detail", checkAuth, UserDetailController);

export default router;
