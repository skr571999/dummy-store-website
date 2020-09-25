import React from "react";

import { Grid, IconButton } from "@material-ui/core";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const PriceSort = () => {
    const [priceSort, setPriceSort] = React.useState(true);

    const handlePriceChange = () => {
        setPriceSort(!priceSort);
    };

    return (
        <Grid container alignItems="center">
            <Grid item>Price :</Grid>
            <Grid item>
                <IconButton aria-label="arrow" onClick={handlePriceChange}>
                    {priceSort ? (
                        <ArrowDownwardIcon fontSize="inherit" />
                    ) : (
                        <ArrowUpwardIcon fontSize="inherit" />
                    )}
                </IconButton>
            </Grid>
        </Grid>
    );
};

export default PriceSort;
