import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

// import clsx from "clsx";
// import { DETAILED_PRODUCT_LIST } from "../../constants";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import ProductImage from "./../../assets/images/macbookpro.jpg";
import Specification from "./components/Specification";
import { getProductById } from "../../services/apis";
import { Product } from "../../services/model";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      width: "25ch",
    },
    w100: {
      width: "100%",
    },
    center: {
      textAlign: "center",
    },
    left: {
      textAlign: "left",
    },
    right: {
      textAlign: "right",
    },
    bold: {
      fontWeight: "bold",
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),
      margin: "auto",
    },
  })
);

interface ParamTypes {
  productID: string;
}

const ProductDetail = () => {
  const classes = useStyles();
  const [product, setProduct] = useState<Product>();
  const { productID } = useParams<ParamTypes>();

  // const productIndex = DETAILED_PRODUCT_LIST.findIndex(
  //   (val) => val.id === parseInt(productID)
  // );

  useEffect(() => {
    (async () => {
      try {
        const response = await getProductById(productID);
        console.log("Response : ", response);
        if (response.data) setProduct(response.data);
      } catch (error) {
        console.log("Error : ", error);
      }
    })();
  }, []);

  // const product = DETAILED_PRODUCT_LIST[productIndex];

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Box component={Paper} my={1}>
          <IconButton
            component={RouterLink}
            to="/productlist"
            color="primary"
            aria-label="go back"
          >
            <ArrowBackIcon />
          </IconButton>
          <Grid container justify="center">
            {!!product ? (
              <Grid item xs={11}>
                <Box className={classes.left} mt="40px">
                  <Typography>{product.brand}</Typography>
                  <Typography variant="h4">{product.name}</Typography>
                </Box>

                <Box mt="40px" className={classes.center}>
                  <img src={ProductImage} alt="Product Pic" width={200} />
                </Box>

                <Box className={classes.left} mt="40px">
                  <Typography variant="h5">
                    ₹ {product.price}
                    {/* 1,50,000 */}
                  </Typography>
                </Box>

                <Box my={2}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Specification product={product} />
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            ) : (
              <h2>Loading...</h2>
            )}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
