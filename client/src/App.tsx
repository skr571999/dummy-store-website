import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core/styles";
import { Box, CssBaseline, ThemeProvider } from "@material-ui/core";

import "./App.css";
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

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <NavBar />
                <Box
                    bgcolor="#F8F8F8"
                    width="100%"
                    height="93vh"
                    mt="7vh"
                    p="1rem"
                >
                    <Routes />
                </Box>
            </Router>
        </ThemeProvider>
    );
}

export default App;
