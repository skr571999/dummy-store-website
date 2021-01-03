import React, { useEffect, useState } from "react";
import { getUserProducts } from "../../services/apis";
import { Product } from "../../services/model";

const MyProducts = () => {
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    (async () => {
      const response = await getUserProducts();

      if (response.status === "success" && response.data?.products) {
        setProducts([...response.data?.products]);
      }

      console.log("Response : ", response);
    })();
  }, []);

  return (
    <div>
      <h1>My Products</h1>
      <div>
        <pre>{JSON.stringify(products, null, 4)}</pre>
      </div>
    </div>
  );
};

export default MyProducts;
