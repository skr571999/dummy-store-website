import React from "react";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import ProductListPage from "./pages/ProductList";
import ProfilePage from "./pages/Profile";
import RegisterPage from "./pages/Register";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/register" exact component={RegisterPage} />
            <Route path="/profile" exact component={ProfilePage} />
            <Route path="/productlist" exact component={ProductListPage} />
        </Switch>
    );
};

export default Routes;
