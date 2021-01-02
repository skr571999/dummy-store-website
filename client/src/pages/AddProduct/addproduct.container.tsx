import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { addProduct } from "../../services/apis";
import { Product } from "../../services/model";

import AddProductView from "./addproduct.view";

const AddProduct = () => {
  const history = useHistory();

  const [photos, setPhotos] = useState<FileObject[]>([]);
  const [formValues, setFormValues] = useState<Product>({
    brand: "",
    category: "",
    description: "",
    _id: "",
    name: "",
    price: "",
    images: [],
  });

  interface FileObject {
    imgStr: string;
    fileObj: File;
  }

  const handleChange = (prop: keyof Product) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormValues({ ...formValues, [prop]: event.target.value });
  };

  const handleSubmit = () => {
    (async () => {
      try {
        console.log("Values : ", formValues);

        const formData = new FormData();

        formData.append("category", formValues.category);
        formData.append("name", formValues.name);
        formData.append("brand", formValues.brand);
        formData.append("description", formValues.description);
        formData.append("price", formValues.price);
        for (const value of photos) {
          formData.append("images", value.fileObj);
        }
        const response = await addProduct(formData);
        console.log("Response : ", response);

        if (response.status === "success") {
          setTimeout(() => {
            history.push("/productlist");
          }, 1000);
        } else {
          console.log("In Valid");
        }
      } catch (error) {
        console.log("Error : ", error);
      }
    })();
  };

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files) {
      const _files = Array.from(files);
      for (let i of _files) {
        let fr = new FileReader();
        fr.onload = (_e) => {
          if (_e.target?.result) {
            const _obj: FileObject = {
              fileObj: i,
              imgStr: _e.target?.result.toString(),
            };
            setPhotos([...photos, _obj]);
          }
        };
        fr.readAsDataURL(i);
      }
    }
  };

  const handleUploadImageRemove = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    const _photos = [...photos];
    _photos.splice(index, 1);

    setPhotos([..._photos]);
  };

  return (
    <AddProductView
      {...{
        formValues,
        handleChange,
        handleSubmit,
        handleFileInput,
        handleUploadImageRemove,
        photos,
      }}
    />
  );
};

export default AddProduct;
