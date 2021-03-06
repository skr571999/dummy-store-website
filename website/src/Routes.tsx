import React, { useGlobal } from "reactn";

import { Switch, Route, Redirect, useLocation } from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import AddProductPage from "./pages/AddProduct";
import ProductDetailPage from "./pages/ProductDetail";
import ProductListPage from "./pages/ProductList";
import ProfilePage from "./pages/Profile";
import RegisterPage from "./pages/Register";
import MyProductsPage from "./pages/MyProducts";
import CartPage from "./pages/Cart";

interface PrivateRouteProps {
  component: React.FC;
  exact?: boolean;
  path: string;
}

const updateTitle = (_currentPath: string) => {
  let docTitle = "";
  console.log("Path : ", _currentPath);

  switch (_currentPath.split("/")[1]) {
    case "":
      docTitle = "Home";
      break;
    case "login":
      docTitle = "Login";
      break;
    case "register":
      docTitle = "Register";
      break;
    case "productlist":
      docTitle = "Product List";
      break;
    case "profile":
      docTitle = "Profile";
      break;
    case "addproduct":
      docTitle = "Add Product";
      break;
    case "product":
      docTitle = "Product Detail";
      break;
    case "myproducts":
      docTitle = "My Products";
      break;
    case "cart":
      docTitle = "My Cart";
      break;
  }

  document.title = `${docTitle} | DummyStore`;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const { isLogin } = useGlobal("userDetail")[0];

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const Routes = () => {
  const { pathname } = useLocation();
  updateTitle(pathname);

  return (
    <Switch>
      <Route path="/" exact component={ProductListPage} />
      <Route path="/home" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/register" exact component={RegisterPage} />
      <PrivateRoute path="/profile" exact component={ProfilePage} />
      <PrivateRoute path="/addproduct" exact component={AddProductPage} />
      <PrivateRoute path="/myproducts" exact component={MyProductsPage} />
      <PrivateRoute path="/cart" exact component={CartPage} />
      <Route path="/productlist" exact component={ProductListPage} />
      <Route path="/product/:productID" exact component={ProductDetailPage} />
    </Switch>
  );
};

export default Routes;
