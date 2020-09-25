import React from "react";

import { useParams } from "react-router-dom";

import { DETAILED_PRODUCT_LIST } from "../../constants";

interface ParamTypes {
    productID: string;
}

const ProductDetail = () => {
    const { productID } = useParams<ParamTypes>();

    const productIndex = DETAILED_PRODUCT_LIST.findIndex(
        (val) => val.id === parseInt(productID)
    );

    const product = DETAILED_PRODUCT_LIST[productIndex];

    return (
        <div>
            <h1>Product Detail</h1>
            <p>{productID}</p>

            <pre>{JSON.stringify(product, null, "...")}</pre>
        </div>
    );
};

export default ProductDetail;
