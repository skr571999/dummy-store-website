import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import AppleIcon from "@material-ui/icons/Apple";

import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    })
);

const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="primary" style={{ height: "7vh" }}>
                <Toolbar>
                    {/* <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Typography variant="h6" className={classes.title}>
                        <AppleIcon /> iStore
                    </Typography>
                    <Button component={RouterLink} to="/login" color="inherit">
                        Login
                    </Button>
                    <Button
                        component={RouterLink}
                        to="/register"
                        color="inherit"
                    >
                        Register
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
