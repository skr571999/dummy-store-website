import "reactn";

export interface UserDetail {
  name: string;
  email: string;
  isLogin: boolean;
}

declare module "reactn/default" {
  export interface Reducers {
    // TODO: Add Reducer Type Here
  }

  export interface State {
    userDetail: UserDetail;
  }
}
