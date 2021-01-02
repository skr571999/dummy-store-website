import { Router } from "express";
import { checkAuth, upload } from "../middleware";

import {
  AddProductController,
  GetProductByIdController,
  ProductListController,
} from "./controllers";

const router = Router();

router.get("/", ProductListController);
router.get("/:id", GetProductByIdController);
router.post("/", checkAuth, upload.array("images", 3), AddProductController);

export default router;
