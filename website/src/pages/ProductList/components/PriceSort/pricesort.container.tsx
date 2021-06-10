import React from "react";

import { Grid, IconButton } from "@material-ui/core";

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

interface PriceSortProps {
  handlePriceSort: () => void;
  priceSort: boolean;
}

const PriceSort: React.FC<PriceSortProps> = ({
  handlePriceSort,
  priceSort,
}) => {
  return (
    <Grid container alignItems="center">
      <Grid item>Price :</Grid>
      <Grid item>
        <IconButton aria-label="arrow" onClick={handlePriceSort}>
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
