import React from "react";

import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import AddProductPage from "./pages/AddProduct";
import ProductDetailPage from "./pages/ProductDetail";
import ProductListPage from "./pages/ProductList";
import ProfilePage from "./pages/Profile";
import RegisterPage from "./pages/Register";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={ProductListPage} />
      <Route path="/home" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/register" exact component={RegisterPage} />
      <Route path="/profile" exact component={ProfilePage} />
      <Route path="/addproduct" exact component={AddProductPage} />
      <Route path="/productlist" exact component={ProductListPage} />
      <Route path="/product/:productID" exact component={ProductDetailPage} />
    </Switch>
  );
};

export default Routes;
