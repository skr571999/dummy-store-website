import { Router } from "express";
import { checkAuth, upload } from "../../middleware";

import {
  AddProductController,
  GetProductByIdController,
  ProductListController,
  UserProductListController,
} from "./controllers";

const router = Router();

router.get("/", ProductListController);
router.get("/myproducts", checkAuth, UserProductListController);
router.get("/:id", GetProductByIdController);
router.post("/", checkAuth, upload.array("images", 3), AddProductController);

export default router;
