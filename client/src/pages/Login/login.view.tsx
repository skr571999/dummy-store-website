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
    loginValues: any;
    handleChange: any;
    handleLogin: any;
}

const LoginView: React.FC<LoginViewProps> = ({
    loginValues,
    handleChange,
    handleLogin,
}) => {
    const classes = useStyles();

    return (
        <Grid container justify="center">
            <Grid item xs={12} sm={10} md={8} lg={6}>
                <Paper>
                    <Grid container justify="center">
                        <Grid item xs={10}>
                            <Box className={classes.center} mt="40px">
                                <Typography variant="h4">
                                    Login to iStore
                                </Typography>
                            </Box>

                            <Box mt="30px">
                                <TextField
                                    id="outlined-basic"
                                    label="Store ID"
                                    variant="outlined"
                                    className={classes.w100}
                                    onChange={handleChange("storeID")}
                                    required
                                />
                            </Box>

                            <Box mt="30px">
                                <PasswordField
                                    handleChange={handleChange}
                                    password={loginValues.password}
                                />
                            </Box>

                            <Box
                                mt="30px"
                                className={clsx(classes.w100, classes.right)}
                            >
                                <Link component={RouterLink} to="/register">
                                    Not have a account? Register here.
                                </Link>
                            </Box>

                            <Box
                                mt="30px"
                                className={clsx(classes.w100, classes.center)}
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleLogin}
                                >
                                    Login
                                </Button>
                            </Box>

                            <Box
                                my="30px"
                                className={clsx(classes.w100, classes.left)}
                            >
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
