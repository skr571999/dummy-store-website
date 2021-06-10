import { Request, Response } from "express";

import { MyRequest, MyResponse } from "../../types";
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

export const AddProductController = async (req: MyRequest, res: MyResponse) => {
  (async () => {
    try {
      if ((await ProductModal.find({ name: req.body.name }).count()) > 0) {
        throw new Error("Product with same name already exists.");
      }

      const addedProduct = (
        await ProductModal.create({
          ...req.body,
          images: req.files,
          user: req.user?._id,
        })
      ).toJSON();
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

export const UserProductListController = async (
  req: MyRequest,
  res: MyResponse
) => {
  (async () => {
    try {
      const products = await ProductModal.find({ user: req.user?._id });
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
