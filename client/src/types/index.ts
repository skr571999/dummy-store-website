export interface RegisterValues {
  name: string;
  email: string;
  storeId?: string;
  mobileNo?: string;
  gender?: string;
  city?: string;
  country?: string;
  password: string;
  confirmPassword: string;
}

export interface LoginValues {
  email: string;
  password: string;
}

export interface AlertStatusType {
  show: boolean;
  message: string;
  type: "success" | "info" | "warning" | "error" | undefined;
}
