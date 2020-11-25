import React, { useState } from "react";

import { loginUser } from "../../services/apis";
import { AlertStatusType, LoginValues } from "../../types";
import LoginView from "./login.view";

const Login = () => {
  const [loginValues, setLoginValues] = useState<LoginValues>({
    email: "admin@gmail.com",
    password: "admin",
  });

  const [alertStatus, setAlertStatus] = useState<AlertStatusType>({
    show: false,
    message: "",
    type: undefined,
  });

  const handleChange = (prop: keyof LoginValues) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoginValues({ ...loginValues, [prop]: event.target.value });
  };

  const handleLogin = () => {
    (async () => {
      try {
        console.log("Values : ", loginValues);

        const response = await loginUser(loginValues);
        setAlertStatus({
          message: response?.error || response.message,
          show: true,
          type: response?.error || response?.errors ? "error" : "success",
        });
        console.log("Response : ", response);
      } catch (error) {
        console.log("Error : ", error);
      }
    })();
  };

  return (
    <LoginView
      loginValues={loginValues}
      handleChange={handleChange}
      handleLogin={handleLogin}
      alertStatus={alertStatus}
    />
  );
};

export default Login;
