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

import IconButton from "@material-ui/core/IconButton";
// import Input from "@material-ui/core/Input";
// import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexWrap: "wrap",
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
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

interface State {
    storeID: string;
    password: string;
    showPassword: boolean;
}

interface ErrorValues {
    storeID: boolean;
    password: boolean;
}

const LoginView = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        storeID: "",
        password: "",
        showPassword: false,
    });

    const [errorvalues, setErrorvalues] = React.useState<ErrorValues>({
        storeID: false,
        password: false,
    });

    const handleChange = (prop: keyof State) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    const handleLogin = () => {
        if (values.storeID.length === 0) {
            setErrorvalues({ ...errorvalues, storeID: true });
        } else {
            setErrorvalues({ ...errorvalues, storeID: false });
        }

        if (values.password.length === 0) {
            setErrorvalues({ ...errorvalues, password: true });
        } else {
            setErrorvalues({ ...errorvalues, password: false });
        }

        if (!errorvalues.password && !errorvalues.storeID) {
            console.log("Values : ", values);
        }
    };

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
                                    helperText="Required"
                                    onChange={handleChange("storeID")}
                                    required
                                    error={errorvalues.storeID}
                                />
                            </Box>

                            <Box mt="30px">
                                <FormControl
                                    className={clsx(
                                        classes.textField,
                                        classes.w100
                                    )}
                                    variant="outlined"
                                >
                                    <InputLabel
                                        htmlFor="outlined-adornment-password"
                                        required
                                    >
                                        Password
                                    </InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={
                                            values.showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        value={values.password}
                                        onChange={handleChange("password")}
                                        required
                                        error={errorvalues.password}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={
                                                        handleClickShowPassword
                                                    }
                                                    onMouseDown={
                                                        handleMouseDownPassword
                                                    }
                                                    edge="end"
                                                >
                                                    {values.showPassword ? (
                                                        <Visibility />
                                                    ) : (
                                                        <VisibilityOff />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        labelWidth={70}
                                    />
                                    <FormHelperText>Required</FormHelperText>
                                </FormControl>
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
