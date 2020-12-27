import React from "react";

import { Grid } from "@material-ui/core";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
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

interface CategoryFilter {
  categories: string[];
  handleSelectCategory: (event: React.ChangeEvent<{ value: unknown }>) => void;
  selectedCategory: string;
}

const CategoryFilter: React.FC<CategoryFilter> = ({
  categories,
  handleSelectCategory,
  selectedCategory,
}) => {
  const classes = useStyles();

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
            value={selectedCategory}
            onChange={handleSelectCategory}
            label="Category"
          >
            <MenuItem value="all">
              <em>All</em>
            </MenuItem>
            {categories.map((category, index) => (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default CategoryFilter;
