import React, { useEffect, useState } from "react";

import { Box, Grid, Paper } from "@material-ui/core";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import ProductCard from "./components/ProductCard";
import CategoryFilter from "./components/CategoryFitler";
import PriceSort from "./components/PriceSort";
import { getProducts } from "../../services/apis";
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
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    productCard: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  })
);

const ProductList = () => {
  const classes = useStyles();
  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {
    (async () => {
      try {
        const response = await getProducts();
        console.log("Response : ", response);
        if (response.data?.products) setProducts(response.data.products);
      } catch (error) {
        console.log("Error : ", error);
      }
    })();
  }, []);

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Paper>
          <Grid container justify="center">
            <Grid item xs={11}>
              <Box className={classes.center} mt="40px" mx={1}>
                <Grid container alignItems="center">
                  <Grid item xs={8}>
                    <CategoryFilter />
                  </Grid>
                  <Grid item xs={4}>
                    <PriceSort />
                  </Grid>
                </Grid>
              </Box>
              <Box className={classes.center} mt="40px">
                {products ? (
                  <Grid container>
                    {products.length > 0 ? (
                      products?.map((product, index) => (
                        <Grid
                          item
                          xs={12}
                          key={index}
                          className={classes.productCard}
                        >
                          <ProductCard product={product} />
                        </Grid>
                      ))
                    ) : (
                      <h2>No Product Available</h2>
                    )}
                  </Grid>
                ) : (
                  <h2>Loading...</h2>
                )}
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductList;
