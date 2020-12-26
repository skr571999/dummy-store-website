import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addProduct } from "../../services/apis";
import { Product } from "../../services/model";

import AddProductView from "./addproduct.view";

const AddProduct = () => {
  const history = useHistory();

  const [formValues, setFormValues] = useState<Product>({
    brand: "",
    category: "",
    description: "",
    _id: "",
    name: "",
    price: "",
  });

  const handleChange = (prop: keyof Product) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormValues({ ...formValues, [prop]: event.target.value });
  };

  const handleSubmit = () => {
    (async () => {
      try {
        console.log("Values : ", formValues);

        const response = await addProduct(formValues);
        history.push("/productlist");
        console.log("Response : ", response);
      } catch (error) {
        console.log("Error : ", error);
      }
    })();
  };
  return <AddProductView {...{ formValues, handleChange, handleSubmit }} />;
};

export default AddProduct;
