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
import Alert from "@material-ui/lab/Alert";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import PasswordField from "../../components/PasswordField";
import { AlertStatusType, LoginValues } from "../../types";

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
  loginValues: LoginValues;
  handleChange: (
    prop: keyof LoginValues
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => void;
  alertStatus: AlertStatusType;
}

const LoginView: React.FC<LoginViewProps> = ({
  loginValues,
  handleChange,
  handleLogin,
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
                <Typography variant="h4">Login to iStore</Typography>
              </Box>

              {alertStatus.show && (
                <Alert severity={alertStatus.type}>{alertStatus.message}</Alert>
              )}

              <Box mt="30px">
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  className={classes.w100}
                  value={loginValues.email}
                  onChange={handleChange("email")}
                  required
                />
              </Box>

              <Box mt="30px">
                <PasswordField
                  handleChange={handleChange}
                  password={loginValues.password}
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
