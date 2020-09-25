import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button, Grid } from "@material-ui/core";

import productImage from "../../../../assets/images/macbookpro.jpg";

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
    id: any;
    name: string;
    price: any;
    brand: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
    id,
    name,
    price,
    brand,
}) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Grid container>
                    <Grid item xs={4}>
                        <CardMedia
                            className={classes.media}
                            image={productImage}
                            title="Contemplative Reptile"
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
                                {brand} {name}
                            </Typography>
                            <Typography>
                                <b>Price</b> : {price}
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.right}>
                            <Button
                                size="small"
                                color="secondary"
                                component={RouterLink}
                                to={"/product/" + id}
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
