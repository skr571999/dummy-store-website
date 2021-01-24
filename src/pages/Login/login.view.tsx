import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { DeepMap, FieldError } from "react-hook-form";

import {
  Box,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import { AlertStatusType, LoginValues } from "../../types";
import { APP_NAME } from "../../constants";

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
  register: (refOrValidateRule: any, validateRule?: any) => (ref: any) => void;
  handleLogin: () => void;
  errors: DeepMap<LoginValues, FieldError>;
  alertStatus: AlertStatusType;
}

const LoginView: React.FC<LoginViewProps> = ({
  errors,
  handleLogin,
  register,
  alertStatus,
}) => {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Paper>
          <Grid container justify="center">
            <Grid item xs={10}>
              <Box className={classes.center} mt="40px" mb="20px">
                <Typography variant="h4">Login to {APP_NAME}</Typography>
              </Box>

              {alertStatus.show && (
                <Alert severity={alertStatus.type}>{alertStatus.message}</Alert>
              )}

              <Box mt="30px">
                <TextField
                  id="emailID"
                  name="email"
                  inputRef={register({
                    required: "Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  label="Email ID"
                  variant="outlined"
                  className={classes.w100}
                  required
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              </Box>

              <Box mt="30px">
                <TextField
                  fullWidth
                  inputRef={register({
                    required: "Required",
                  })}
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  required
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              </Box>

              <Box mt="30px" className={clsx(classes.w100, classes.right)}>
                <Link component={RouterLink} to="/register">
                  Not have a account? Register here.
                </Link>
              </Box>

              <Box mt="30px" className={clsx(classes.w100, classes.center)}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLogin}
                  type="submit"
                >
                  Login
                </Button>
              </Box>

              <Box my="30px" className={clsx(classes.w100, classes.left)}>
                <Link component={RouterLink} to="/register">
                  Forgot Password?
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginView;
