import React from "react";

import {
    Box,
    Button,
    Grid,
    IconButton,
    Link,
    Paper,
    TextField,
    Typography,
} from "@material-ui/core";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

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

const CategoryFilter = () => {
    const classes = useStyles();

    const [category, setCategory] = React.useState("");

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setCategory(event.target.value as string);
    };

    return (
        <Grid container alignItems="center">
            <Grid item>Category :</Grid>
            <Grid item>
                <FormControl
                    variant="outlined"
                    size="small"
                    className={classes.formControl}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Category
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={category}
                        onChange={handleChange}
                        label="Category"
                    >
                        <MenuItem value="All">
                            <em>All</em>
                        </MenuItem>
                        <MenuItem value={"iPhone"}>iPhone</MenuItem>
                        <MenuItem value={"iPad"}>iPad</MenuItem>
                        <MenuItem value={"iMac"}>iMac</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default CategoryFilter;
