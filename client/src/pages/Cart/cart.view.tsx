import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import {
  getCartProducts,
  removeProductFromCart,
  addProductToCart,
  emptyCart,
} from "../../services/apis";
import { CartProduct } from "../../services/model";
import CartProductCard from "./components/CartProductCard";

const CartView = () => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>();

  useEffect(() => {
    updateCartProducts();
  }, []);

  const updateCartProducts = async () => {
    const response = await getCartProducts();

    if (response.status === "success" && response.data && response.data.cart) {
      setCartProducts([...response.data?.cart.products]);
    }
    console.log("Response : ", response);
  };

  const decreaseProductQuantity = async (productID?: string) => {
    if (!productID) return;
    const response = await removeProductFromCart(productID);

    if (response.status === "success") {
      updateCartProducts();
    }
  };

  const increaseProductQuantity = async (productID?: string) => {
    if (!productID) return;
    const response = await addProductToCart(productID);

    if (response.status === "success") {
      updateCartProducts();
    }
  };

  const handleEmptyCart = async () => {
    const response = await emptyCart();

    if (response.status === "success") {
      updateCartProducts();
    }
  };

  return (
    <div>
      <h1>My Cart</h1>
      <div>
        {cartProducts ? (
          <>
            {cartProducts.length > 0 ? (
              <>
                {cartProducts.map((cartProduct, index) => (
                  <CartProductCard
                    key={index}
                    {...{
                      cartProduct,
                      decreaseProductQuantity,
                      increaseProductQuantity,
                    }}
                  />
                ))}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleEmptyCart}
                >
                  Empty Cart
                </Button>
              </>
            ) : (
              <h2>No Product in Cart</h2>
            )}
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default CartView;
