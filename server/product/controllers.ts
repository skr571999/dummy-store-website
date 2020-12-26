import { Request, Response } from "express";

import { DETAILED_PRODUCT_LIST } from "../data";
import { Product as ProductModal } from "./modals";

export const ProductListController = async (req: Request, res: Response) => {
  (async () => {
    try {
      const products = await ProductModal.find({});
      res.send({
        status: "success",
        message: "Successful",
        data: { products: products },
      });
    } catch (error) {
      res.status(400).send({
        status: "fail",
        error: error.message,
        message: "Failed to send Products",
      });
    }
  })();
};

export const GetProductByIdController = async (req: Request, res: Response) => {
  (async () => {
    try {
      const productID = req.params.id?.toString() || "0";
      const product = await ProductModal.findById(productID);

      res.send({
        status: "success",
        message: "Successful",
        data: { product: product },
      });
    } catch (error) {
      res.status(400).send({
        status: "fail",
        error: error.message,
        message: "Failed to send Products",
      });
    }
  })();
};

export const AddProductController = async (req: Request, res: Response) => {
  (async () => {
    try {
      const addedProduct = (await ProductModal.create(req.body)).toJSON();
      res.send({
        status: "success",
        message: "Successful Added Product",
        data: { product: addedProduct },
      });
    } catch (error) {
      res.status(400).send({
        status: "fail",
        error: error.message,
        message: "Failed to Add Products",
      });
    }
  })();
};
