import React, { useEffect, useState } from "react";

import { useHistory, useParams } from "react-router-dom";

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

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import Specification from "./components/Specification";
import { addProductToCart, getProductById } from "../../services/apis";
import { Product } from "../../services/model";
import { API_BASE_URL } from "../../constants";

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
  const history = useHistory();
  const [product, setProduct] = useState<Product>();
  const { productID } = useParams<ParamTypes>();

  useEffect(() => {
    (async () => {
      try {
        const response = await getProductById(productID);
        console.log("Response : ", response);
        if (response.data?.product) setProduct(response.data.product);
      } catch (error) {
        console.log("Error : ", error);
      }
    })();
  }, []);

  const handleAddToCart = async () => {
    if (!product?._id) return;

    const response = await addProductToCart(product?._id);
    if (response.status === "success") {
      history.push("/cart");
    } else {
      alert("Error Occurred");
    }
  };

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
                  <Grid container justify="space-around">
                    {product.images.map((value, index) => (
                      <Grid item xs key={index}>
                        <img
                          src={
                            API_BASE_URL +
                            "/" +
                            value.path.replace("\\", "\\\\")
                          }
                          alt={product.name + " " + (index + 1)}
                          style={{ height: "5rem" }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                <Box className={classes.left} mt="40px">
                  <Typography variant="h5">₹ {product.price}</Typography>
                </Box>

                <Box my={2}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Specification product={product} />
                    </Grid>
                  </Grid>
                </Box>

                <Box my={2}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddToCart}
                      >
                        Add to Cart
                      </Button>
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
