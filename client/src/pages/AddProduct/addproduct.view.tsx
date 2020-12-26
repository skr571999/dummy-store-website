import React from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
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
  })
);

interface LoginViewProps {
  formValues: Product;
  handleChange: (
    prop: keyof Product
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
}

const AddProductView: React.FC<LoginViewProps> = ({
  formValues,
  handleChange,
  handleSubmit,
}) => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Paper>
          <Grid container justify="center">
            <Grid item xs={10}>
              <Box className={classes.center} mt="40px" mb="20px">
                <Typography variant="h4">Add New Product</Typography>
              </Box>

              <Box mt="30px">
                <TextField
                  id="Name"
                  label="Name"
                  variant="outlined"
                  size="small"
                  className={classes.w100}
                  value={formValues.name}
                  onChange={handleChange("name")}
                  required
                />
              </Box>
              <Box mt="30px">
                <TextField
                  id="Brand"
                  label="Brand"
                  variant="outlined"
                  size="small"
                  className={classes.w100}
                  value={formValues.brand}
                  onChange={handleChange("brand")}
                  required
                />
              </Box>
              <Box mt="30px">
                <TextField
                  id="Category"
                  label="Category"
                  variant="outlined"
                  size="small"
                  className={classes.w100}
                  value={formValues.category}
                  onChange={handleChange("category")}
                  required
                />
              </Box>

              <Box mt="30px">
                <TextField
                  id="Price"
                  label="Price"
                  variant="outlined"
                  size="small"
                  className={classes.w100}
                  value={formValues.price}
                  onChange={handleChange("price")}
                  required
                />
              </Box>

              <Box mt="30px">
                <TextField
                  id="Description"
                  label="Description"
                  variant="outlined"
                  size="small"
                  className={classes.w100}
                  value={formValues.description}
                  multiline
                  rows={4}
                  onChange={handleChange("description")}
                  required
                />
              </Box>

              <Box my="30px" className={clsx(classes.w100, classes.center)}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                >
                  Add Product
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default AddProductView;
