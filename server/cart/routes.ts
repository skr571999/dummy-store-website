import { Router } from "express";
import { checkAuth } from "../middleware";

import {
  AddProductToCartController,
  CartProductListController,
  RemoveProductToCartController,
} from "./controllers";

const router = Router();

router.get("/", checkAuth, CartProductListController);
router.post("/add", checkAuth, AddProductToCartController);
router.post("/remove", checkAuth, RemoveProductToCartController);

export default router;
