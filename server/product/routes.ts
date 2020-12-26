import { Router } from "express";

import { ProductByIdController, ProductListController } from "./controllers";

const router = Router();

router.get("/", ProductListController);
router.get("/:id", ProductByIdController);

export default router;
