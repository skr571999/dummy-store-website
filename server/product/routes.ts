import { Router } from "express";

import {
  AddProductController,
  GetProductByIdController,
  ProductListController,
} from "./controllers";

const router = Router();

router.get("/", ProductListController);
router.get("/:id", GetProductByIdController);
router.post("/", AddProductController);

export default router;
