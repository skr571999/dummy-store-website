import React from "react";

import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Routes from "./Routes";
import NavBar from "./components/NavBar";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes />
        </Router>
    );
}

export default App;
