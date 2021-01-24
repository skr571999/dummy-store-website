import { UserDetail } from "../global";
import { updateBearToken } from "../services/apis";
import { LoginResponse } from "../services/model";

export const setUserDetailReducer = (global: any, dispatch: any) => {
  const USER_DATA: LoginResponse = JSON.parse(
    localStorage.getItem("USER_DATA") || "{}"
  );

  const isLogin = !!localStorage.getItem("AUTH_TOKEN");

  const userDetail: UserDetail = {
    name: "",
    email: "",
    isLogin: isLogin,
  };

  if (isLogin && USER_DATA.data) {
    const {
      data: { user },
    } = USER_DATA;

    userDetail.email = user.email;
    userDetail.name = user.name;
    userDetail.isLogin = isLogin;
  }

  updateBearToken();

  return {
    ...global,
    userDetail: {
      ...userDetail,
    },
  };
};

// export const setCartDetail = (global: any, dispatch: any) => {
//   console.log("Global : ", global);
//   console.log("Dispatch : ", dispatch);

//   return global;
// };
