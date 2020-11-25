export const API_BASE_URL = "http://localhost:8000";

export const FRONTEND_ENDPOINTS = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Login",
    link: "/login",
  },
  {
    name: "Register",
    link: "/register",
  },
  {
    name: "Product List",
    link: "/productlist",
  },
  {
    name: "Profile",
    link: "/profile",
  },
];

export const DETAILED_PRODUCT_LIST = [
  {
    id: 1001,
    name: "Mac Book Pro",
    brand: "Apple",
    price: "150000",
    storage: {
      value: 256,
      unit: "GB",
    },
    ram: {
      value: 16,
      unit: "GB",
    },
    processor: "intel 10 Gen i7",
    size: "16 inch",
    color: "Space Grey",
    description:
      "It has the brightness of 500 nits, support upto 64 GB of RAM and 8 TB of SSD storage and upto 8 core. ",
  },
  {
    id: 1002,
    name: "iPhone X Max Ultra",
    brand: "Apple",
    price: "100000",
    storage: {
      value: 256,
      unit: "GB",
    },
    ram: {
      value: 8,
      unit: "GB",
    },
    processor: "Snapdragon",
    size: "6.2inches",
    color: "Space Grey",
    description: "Best Phone Available",
  },
];

export const PRODUCT_LIST = DETAILED_PRODUCT_LIST.map((val) => {
  return (({ id, name, price, brand }) => ({ id, name, price, brand }))(val);
});
