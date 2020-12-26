export interface User {
  _id?: string;
  name: string;
  email: string;
  storeId?: string;
  mobileNo?: string;
  gender?: string;
  country?: string;
  city?: string;
}

export interface RegisterResponse {
  data?: {
    user: User;
  };
  error: string;
  errors?: [];
  message: string;
}

export interface LoginResponse {
  data?: {
    user: User;
    token: string;
  };
  error: string;
  errors?: [];
  message: string;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: string;
  storage: {
    value: number;
    unit: string;
  };
  ram: {
    value: number;
    unit: string;
  };
  processor: string;
  size: string;
  color: string;
  description: string;
}

export interface ProductsResponse {
  data?: Product[];
  error: string;
  errors?: [];
  message: string;
}

export interface ProductByIdResponse {
  data?: Product;
  error: string;
  errors?: [];
  message: string;
}
