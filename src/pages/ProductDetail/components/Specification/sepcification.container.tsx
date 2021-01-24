import React from "react";

import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import clsx from "clsx";
import { Product } from "../../../../services/model";

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

interface SepcificationProps {
  product: Product;
}

const Sepcification: React.FC<SepcificationProps> = ({ product }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={5}>
        {["Brand", "Category", "Description"].map((val, index) => (
          <Box key={index} className={classes.center} mt="15px">
            <Typography className={clsx(classes.bold, classes.left)}>
              {val}
            </Typography>
          </Box>
        ))}
      </Grid>
      <Grid item xs={7}>
        {[product.brand, product.category, product.description].map(
          (val, index) => (
            <Box key={index} className={classes.center} mt="15px">
              <Typography className={classes.left}>{val}</Typography>
            </Box>
          )
        )}
      </Grid>
    </Grid>
  );
};

export default Sepcification;
