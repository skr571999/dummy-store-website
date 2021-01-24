import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button, Grid } from "@material-ui/core";

import productImage from "../../../../assets/images/noImageAvailable.png";
import { API_BASE_URL } from "../../../../constants";
import { Product } from "../../../../services/model";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  media: {
    height: 140,
  },
  right: {
    textAlign: "right",
  },
});

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const classes = useStyles();
  let image = productImage;
  if (product.images.length > 0) {
    image = API_BASE_URL + "/" + product.images[0].path.replace("\\", "\\\\");
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container>
          <Grid item xs={4}>
            <CardMedia
              className={classes.media}
              image={image}
              title={product.name}
            />
          </Grid>
          <Grid item xs={6}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                component="h3"
                // noWrap
              >
                {product.brand} {product.name}
              </Typography>
              <Typography>
                <b>Price</b> : {product.price}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.right}>
              <Button
                size="small"
                color="secondary"
                component={RouterLink}
                to={"/product/" + product._id}
              >
                See Detail
              </Button>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
