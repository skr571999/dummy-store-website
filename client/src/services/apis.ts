import axios from "axios";

import { API_BASE_URL } from "../constants";
import { LoginValues, RegisterValues } from "../types";
import {
  LoginResponse,
  ProductByIdResponse,
  ProductsResponse,
  RegisterResponse,
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
