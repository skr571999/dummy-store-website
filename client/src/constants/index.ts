export const API_BASE_URL = "http://localhost:8000";

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
];
