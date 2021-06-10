import React, { useEffect, useState } from "react";

import { Box, Grid, Paper } from "@material-ui/core";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import ProductCard from "./components/ProductCard";
import CategoryFilter from "./components/CategoryFitler";
import PriceSort from "./components/PriceSort";
import { getProducts, getUserProducts } from "../../services/apis";
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

interface ProductListProps {
  isUserProducts?: boolean;
}

const ProductList: React.FC<ProductListProps> = ({
  isUserProducts = false,
}) => {
  const classes = useStyles();
  const [products, setProducts] = useState<Product[]>();
  const [priceSort, setPriceSort] = React.useState(true);
  const [categories, setCategories] = useState<string[]>();
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    (async () => {
      try {
        const response = isUserProducts
          ? await getUserProducts()
          : await getProducts();
        console.log("Response : ", response);
        if (response.data?.products) {
          const _products = response.data.products;
          const _categories = new Set<string>();
          _products.sort((a, b) => {
            _categories.add(a.category);
            _categories.add(b.category);
            return parseFloat(a.price) - parseFloat(b.price);
          });
          setCategories(
            Array.from(_categories).sort((a, b) => (a > b ? 1 : -1))
          );
          setProducts(_products);
        }
      } catch (error) {
        console.log("Error : ", error);
      }
    })();
  }, []);

  const handlePriceSort = () => {
    if (products) {
      const _products = [...products];
      _products.sort((a, b) =>
        !priceSort
          ? parseFloat(a.price) - parseFloat(b.price)
          : parseFloat(b.price) - parseFloat(a.price)
      );
      setProducts(_products);
      setPriceSort(!priceSort);
    }
  };

  const handleSelectCategory = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedCategory(event.target.value as string);
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Paper>
          <Grid container justify="center">
            <Grid item xs={11}>
              {products && categories ? (
                <>
                  <Box className={classes.center} mt="40px" mx={1}>
                    <Grid container alignItems="center">
                      <Grid item xs={8}>
                        <CategoryFilter
                          {...{
                            categories,
                            handleSelectCategory,
                            selectedCategory,
                          }}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <PriceSort {...{ handlePriceSort, priceSort }} />
                      </Grid>
                    </Grid>
                  </Box>
                  <Box className={classes.center} mt="40px">
                    <Grid container>
                      {products.length > 0 ? (
                        products
                          ?.filter((product) =>
                            selectedCategory !== "all"
                              ? product.category === selectedCategory
                              : true
                          )
                          .map((product, index) => (
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
                  </Box>
                </>
              ) : (
                <h2>Loading...</h2>
              )}
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProductList;
