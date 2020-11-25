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

import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

import PasswordField from "../../components/PasswordField";
// import GenderField from "../../components/GenderField";
import { RegisterValues } from "../../types";

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
  handleChange: any;
  handleRegister: any;
}

const RegisterView: React.FC<RegisterViewProps> = ({
  handleChange,
  registerValues,
  handleRegister,
}) => {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Paper>
          <Grid container justify="center">
            <Grid item xs={10}>
              <Box className={classes.center} mt="40px">
                <Typography variant="h4">Register to iStore</Typography>
              </Box>

              <Box mt="30px">
                <TextField
                  id="fullName"
                  label="Full Name"
                  variant="outlined"
                  className={classes.w100}
                  value={registerValues.fullName}
                  onChange={handleChange("fullName")}
                  required
                />
              </Box>

              <Box mt="30px">
                <TextField
                  id="emailID"
                  label="Email ID"
                  variant="outlined"
                  className={classes.w100}
                  value={registerValues.emailId}
                  onChange={handleChange("emailId")}
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

              <Box mt="30px" className={clsx(classes.w100, classes.right)}>
                <Link component={RouterLink} to="/login">
                  Already have a account? Login here.
                </Link>
              </Box>

              <Box my="30px" className={clsx(classes.w100, classes.center)}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleRegister}
                >
                  Register
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RegisterView;
