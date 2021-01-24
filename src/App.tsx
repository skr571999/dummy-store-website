import React, { useDispatch } from "reactn";

import { BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { Box, CssBaseline, ThemeProvider } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { setUserDetailReducer } from "./reducers";
import Routes from "./Routes";
import NavBar from "./components/NavBar";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
    },
    // secondary: {
    //     main: "#F2994A",
    // },
  },
  // typography: {
  //     fontFamily: ["Montserrat", "sans-serif"].join(","),
  // },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    mainContent: {
      padding: theme.spacing(3),
      backgroundColor: "#F8F8F8",
      width: "100%",
    },
    list: {
      width: "auto",
    },
  })
);

const App = () => {
  const classes = useStyles();

  useDispatch(setUserDetailReducer)();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <div className={classes.drawerHeader} />
        <Box className={classes.mainContent}>
          <Routes />
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
