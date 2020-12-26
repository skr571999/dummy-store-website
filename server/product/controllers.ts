import { Request, Response } from "express";

import { DETAILED_PRODUCT_LIST } from "../data";

export const ProductListController = async (req: Request, res: Response) => {
  (async () => {
    try {
      res.send({
        status: "success",
        message: "Successful",
        data: DETAILED_PRODUCT_LIST,
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

export const ProductByIdController = async (req: Request, res: Response) => {
  (async () => {
    const productID = req.params.id?.toString() || "0";
    console.log("Req ", req.params);
    const index = DETAILED_PRODUCT_LIST.findIndex(
      (val) => val.id === parseInt(productID)
    );

    try {
      res.send({
        status: "success",
        message: "Successful",
        data: DETAILED_PRODUCT_LIST[index],
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
