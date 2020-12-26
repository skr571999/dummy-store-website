import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { Box, Button, Grid, Link, Paper, Typography } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";

import PasswordField from "../../components/PasswordField";
import { AlertStatusType, RegisterValues } from "../../types";

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

interface RegisterViewProps {
  registerValues: RegisterValues;
  handleChange: (
    prop: keyof RegisterValues
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleRegister: () => void;
  alertStatus: AlertStatusType;
}

const RegisterView: React.FC<RegisterViewProps> = ({
  handleChange,
  registerValues,
  handleRegister,
  alertStatus,
}) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{ ...registerValues }}
      validate={(values) => {
        console.log("VALUE : ", values);

        const errors: Partial<RegisterValues> = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Grid container justify="center">
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <Form>
              <Paper>
                <Grid container justify="center">
                  <Grid item xs={10}>
                    <Box className={classes.center} mt="40px" mb="20px">
                      <Typography variant="h4">Register to iStore</Typography>
                    </Box>

                    {alertStatus.show && (
                      <Alert severity={alertStatus.type}>
                        {alertStatus.message}
                      </Alert>
                    )}

                    <Box mt="30px">
                      <Field
                        id="fullName"
                        name="name"
                        label="Full Name"
                        variant="outlined"
                        className={classes.w100}
                        // value={registerValues.name}
                        // onChange={handleChange("name")}
                        required
                        component={TextField}
                      />
                      {/* <TextField
                  /> */}
                    </Box>

                    <Box mt="30px">
                      <Field
                        id="emailID"
                        name="email"
                        type="email"
                        label="Email ID"
                        variant="outlined"
                        className={classes.w100}
                        // value={registerValues.email}
                        // onChange={handleChange("email")}
                        component={TextField}
                        required
                      />
                    </Box>

                    {/* <Box mt="30px">
                  <TextField
                    id="storeId"
                    label="Unique Store ID"
                    variant="outlined"
                    className={classes.w100}
                    value={registerValues.storeId}
                    onChange={handleChange("storeID")}
                    required
                  />
                </Box> */}

                    {/* <Box mt="30px">
                  <TextField
                    id="mobileNo"
                    label="Mobile No."
                    variant="outlined"
                    className={classes.w100}
                    value={registerValues.mobileNo}
                    onChange={handleChange("mobileNo")}
                    required
                  />
                </Box> */}

                    {/* <Box mt="30px">
                  <GenderField
                    gender={registerValues.gender}
                    handleChange={handleChange}
                  />
                </Box> */}

                    {/* <Box mt="30px">
                  <TextField
                    id="city"
                    label="City"
                    variant="outlined"
                    className={classes.w100}
                    value={registerValues.city}
                    onChange={handleChange("city")}
                    required
                  />
                </Box> */}

                    {/* <Box mt="30px">
                  <TextField
                    id="country"
                    label="Country"
                    variant="outlined"
                    className={classes.w100}
                    value={registerValues.country}
                    onChange={handleChange("country")}
                    required
                  />
                </Box> */}

                    <Box mt="30px">
                      <PasswordField
                        handleChange={handleChange}
                        password={registerValues.password}
                      />
                    </Box>

                    <Box mt="30px">
                      <PasswordField
                        handleChange={handleChange}
                        label="Confirm Password"
                        prop="confirmPassword"
                        password={registerValues.confirmPassword}
                      />
                    </Box>

                    <Box
                      mt="30px"
                      className={clsx(classes.w100, classes.right)}
                    >
                      <Link component={RouterLink} to="/login">
                        Already have a account? Login here.
                      </Link>
                    </Box>

                    <Box
                      my="30px"
                      className={clsx(classes.w100, classes.center)}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        // onClick={handleRegister}
                        onClick={submitForm}
                      >
                        Register
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Form>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
};

export default RegisterView;
