import React from "react";

import { Link as RouterLink } from "react-router-dom";
import {
    Drawer,
    Hidden,
    List,
    ListItem,
    ListItemText,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { FRONTEND_ENDPOINTS } from "../../constants";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        title: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        list: {
            width: "auto",
        },
    })
);

const NavBar = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Hidden mdUp>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            onClick={handleDrawer}
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Hidden>
                    <Typography variant="h6" noWrap className={classes.title}>
                        iStore
                    </Typography>
                    <Hidden smDown>
                        {FRONTEND_ENDPOINTS.map((val, index) => (
                            <Button
                                key={val.link}
                                component={RouterLink}
                                to={val.link}
                                color="inherit"
                            >
                                {val.name}
                            </Button>
                        ))}
                    </Hidden>
                </Toolbar>
            </AppBar>
            <Hidden mdUp>
                <Drawer variant={"persistent"} anchor="top" open={open}>
                    <div className={classes.list} role="presentation">
                        <List>
                            {FRONTEND_ENDPOINTS.map((val, index) => (
                                <ListItem
                                    button
                                    key={val.link}
                                    component={RouterLink}
                                    to={val.link}
                                    onClick={handleDrawer}
                                >
                                    <ListItemText primary={val.name} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>
            </Hidden>
        </>
    );
};

export default NavBar;
