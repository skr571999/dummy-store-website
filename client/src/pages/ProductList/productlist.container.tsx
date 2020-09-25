import React from "react";

import { Box, Grid, Paper } from "@material-ui/core";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import { PRODUCT_LIST } from "../../constants";

import ProductCard from "./components/ProductCard";
import CategoryFilter from "./components/CategoryFitler";
import PriceSort from "./components/PriceSort";

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
                                <Grid container>
                                    {PRODUCT_LIST.map((val, index) => (
                                        <Grid
                                            item
                                            xs={12}
                                            key={index}
                                            className={classes.productCard}
                                        >
                                            <ProductCard {...val} />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default ProductList;
