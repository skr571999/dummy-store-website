export const APP_NAME = "DummyStore";

export const FRONTEND_ENDPOINTS = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Login",
    link: "/login",
    protect: false,
  },
  {
    name: "Register",
    link: "/register",
    protect: false,
  },
  {
    name: "Product List",
    link: "/productlist",
  },
  {
    name: "Add Product",
    link: "/addproduct",
    protect: true,
  },
  {
    name: "Profile",
    link: "/profile",
    protect: true,
  },
  {
    name: "My Products",
    link: "/myproducts",
    protect: true,
  },
  {
    name: "Cart",
    link: "/cart",
    protect: true,
  },
];

const prod = {
  API_BASE_URL: "http://localhost:8000",
};

const dev = {
  API_BASE_URL: "http://localhost:8000",
};

export const API_BASE_URL =
  process.env.NODE_ENV === "development" ? dev.API_BASE_URL : prod.API_BASE_URL;
