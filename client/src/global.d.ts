import "reactn";
import { Product } from "./services/model";

export interface UserDetail {
  name: string;
  email: string;
  isLogin: boolean;
}

// interface  CartProduct extends Product{
interface CartProduct {
  product: string;
  quantity: number;
}

export interface UserCart {
  products: CartProduct[];
}

declare module "reactn/default" {
  export interface Reducers {
    // TODO: Add Reducer Type Here
  }

  export interface State {
    userDetail: UserDetail;
    cart: UserCart;
  }
}
