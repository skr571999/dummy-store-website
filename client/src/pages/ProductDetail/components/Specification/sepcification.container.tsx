import React from "react";

import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import clsx from "clsx";
import { ProductDetail } from "../../productdetail.modal";

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
    product: ProductDetail;
}

const Sepcification: React.FC<SepcificationProps> = ({ product }) => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={5}>
                {[
                    "Storage",
                    "RAM",
                    "Processor",
                    "Size",
                    "Color",
                    "Description",
                ].map((val, index) => (
                    <Box key={index} className={classes.center} mt="15px">
                        <Typography
                            className={clsx(classes.bold, classes.left)}
                        >
                            {val}
                        </Typography>
                    </Box>
                ))}
            </Grid>
            <Grid item xs={7}>
                {[
                    product.storage.value + " " + product.storage.unit,
                    product.ram.value + " " + product.ram.unit,
                    product.processor,
                    product.size,
                    product.color,
                    product.description,
                ].map((val, index) => (
                    <Box key={index} className={classes.center} mt="15px">
                        <Typography className={classes.left}>{val}</Typography>
                    </Box>
                ))}
            </Grid>
        </Grid>
    );
};

export default Sepcification;
