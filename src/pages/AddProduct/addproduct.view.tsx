import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  TextField,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import DeleteIcon from "@material-ui/icons/Delete";
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
    inputFile: {
      display: "none",
    },
    margin: {
      margin: theme.spacing(1),
    },
  })
);

interface FileObject {
  imgStr: string;
  fileObj: File;
}

interface LoginViewProps {
  formValues: Product;
  handleChange: (
    prop: keyof Product
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  handleFileInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUploadImageRemove: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => void;
  photos: FileObject[];
}

const AddProductView: React.FC<LoginViewProps> = ({
  formValues,
  handleChange,
  handleSubmit,
  handleFileInput,
  handleUploadImageRemove,
  photos,
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
                <input
                  accept="image/*"
                  className={classes.inputFile}
                  id="contained-button-file"
                  onInput={handleFileInput}
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Upload Photo
                  </Button>
                </label>
                {photos && photos.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {photos?.map((value, index) => (
                      <div key={index} style={{ margin: ".5rem" }}>
                        <img
                          width="101"
                          src={value.imgStr}
                          alt={"uploaded : " + index}
                        />
                        <IconButton
                          aria-label="delete"
                          className={classes.margin}
                          onClick={(e) => handleUploadImageRemove(e, index)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    ))}
                  </div>
                )}
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
