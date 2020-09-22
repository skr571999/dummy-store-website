import React from "react";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
        </Switch>
    );
};

export default Routes;
