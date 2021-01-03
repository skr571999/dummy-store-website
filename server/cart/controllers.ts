import { MyRequest, MyResponse } from "../types";
import { Cart as CartModal } from "./modals";

export const CartProductListController = async (
  req: MyRequest,
  res: MyResponse
) => {
  try {
    const cartProducts = await CartModal.find({});
    res.send({
      status: "success",
      message: "Successful",
      data: { cart: cartProducts },
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      error: error.message,
      message: "Failed to send Cart Products",
    });
  }
};

export const AddProductToCartController = async (
  req: MyRequest,
  res: MyResponse
) => {
  try {
    const { product } = req.body;
    const user = req.user?._id;
    let cartProduct;
    let message = "";

    console.log("User : ", user);

    const userCart = CartModal.find({ user });

    if ((await userCart.count()) === 0) {
      cartProduct = (
        await CartModal.create({ user, products: [{ product, quantity: 1 }] })
      ).toJSON();
      message = "Added Product to Cart";
    } else {
      const quantityCount = await userCart
        .find({
          "products.product": product,
        })
        .count();

      console.log("User Cart ", quantityCount);
      if (quantityCount === 0) {
        cartProduct = await CartModal.updateOne(
          { user },
          { $push: { products: { product, quantity: 1 } } }
        );

        message = "Added Product to Cart";
      } else if (quantityCount > 0) {
        cartProduct = await CartModal.updateOne(
          { user, "products.product": product },
          { $inc: { "products.$.quantity": 1 } }
        );
        message = "Updated Product Quantity";
      }
    }

    res.send({
      status: "success",
      message: message,
      data: { cart: cartProduct },
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      error: error.message,
      message: "Failed to send Cart Products",
    });
  }
};

export const RemoveProductToCartController = async (
  req: MyRequest,
  res: MyResponse
) => {
  try {
    const { product } = req.body;
    const user = req.user?._id;
    let cartProduct;
    let message = "";

    const quantityCount = await CartModal.find({
      user,
      "products.product": product,
    });

    if (quantityCount.length === 0) {
      message = "Product not in Cart";
    } else if (quantityCount.length > 0) {
      const productQuantity = quantityCount[0].products[0].quantity;

      if (productQuantity === 1) {
        cartProduct = await CartModal.updateOne(
          { user },
          { $pull: { products: { product } } }
        );
        message = "Removed Product from Cart";
      } else if (productQuantity > 1) {
        cartProduct = await CartModal.updateOne(
          { user, "products.product": product },
          { $inc: { "products.$.quantity": -1 } }
        );
        message = "Decreased Product Quantity";
      }
    }

    res.send({
      status: "success",
      message: message,
      data: { cart: cartProduct },
    });
  } catch (error) {
    res.status(400).send({
      status: "fail",
      error: error.message,
      message: "Failed to send Cart Products",
    });
  }
};
