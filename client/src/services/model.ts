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
