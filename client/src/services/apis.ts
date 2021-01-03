import axios from "axios";

import { API_BASE_URL } from "../constants";
import { LoginValues, RegisterValues } from "../types";
import {
  CartProductResponse,
  LoginResponse,
  ProductByIdResponse,
  ProductsResponse,
  RegisterResponse,
  UserResponse,
  ResponseType,
} from "./model";

axios.defaults.baseURL = API_BASE_URL;

export const updateBearToken = () => {
  const AUTH_TOKEN = localStorage.getItem("AUTH_TOKEN");

  if (AUTH_TOKEN)
    axios.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;
};

export const registerUser = async (
  registerData: RegisterValues
): Promise<RegisterResponse> => {
  try {
    const response = await axios.post("/user/register", registerData);
    return response.data;
  } catch (error) {
    const errorResponseData = error?.response?.data;
    return errorResponseData;
  }
};

export const loginUser = async (
  loginData: LoginValues
): Promise<LoginResponse> => {
  try {
    const response = await axios.post("/user/login", loginData);
    return response.data;
  } catch (error) {
    const errorResponseData = error?.response?.data;
    return errorResponseData;
  }
};

export const getUser = async (): Promise<UserResponse> => {
  try {
    const response = await axios.get("/user");
    return response.data;
  } catch (error) {
    const errorResponseData = error?.response?.data;
    return errorResponseData;
  }
};

export const getProducts = async (): Promise<ProductsResponse> => {
  try {
    const response = await axios.get("/product");
    return response.data;
  } catch (error) {
    const errorResponseData = error?.response?.data;
    return errorResponseData;
  }
};

export const getProductById = async (
  id: string
): Promise<ProductByIdResponse> => {
  try {
    const response = await axios.get("/product/" + id);
    return response.data;
  } catch (error) {
    const errorResponseData = error?.response?.data;
    return errorResponseData;
  }
};

export const addProduct = async (
  product: FormData
): Promise<ProductByIdResponse> => {
  try {
    const response = await axios.post("/product", product);
    return response.data;
  } catch (error) {
    const errorResponseData = error?.response?.data;
    return errorResponseData;
  }
};

export const getUserProducts = async (): Promise<ProductsResponse> => {
  try {
    const response = await axios.get("/product/myproducts");
    return response.data;
  } catch (error) {
    const errorResponseData = error?.response?.data;
    return errorResponseData;
  }
};

export const getCartProducts = async (): Promise<CartProductResponse> => {
  try {
    const response = await axios.get("/cart");
    return response.data;
  } catch (error) {
    const errorResponseData = error?.response?.data;
    return errorResponseData;
  }
};

export const addProductToCart = async (
  productId: string
): Promise<ResponseType> => {
  try {
    const response = await axios.post("/cart/add", { product: productId });
    return response.data;
  } catch (error) {
    const errorResponseData = error?.response?.data;
    return errorResponseData;
  }
};

export const removeProductFromCart = async (
  productId: string
): Promise<ResponseType> => {
  try {
    const response = await axios.post("/cart/remove", { product: productId });
    return response.data;
  } catch (error) {
    const errorResponseData = error?.response?.data;
    return errorResponseData;
  }
};

export const emptyCart = async (): Promise<ResponseType> => {
  try {
    const response = await axios.post("/cart/empty");
    return response.data;
  } catch (error) {
    const errorResponseData = error?.response?.data;
    return errorResponseData;
  }
};
