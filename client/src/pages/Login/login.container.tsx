import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { loginUser } from "../../services/apis";
import { AlertStatusType, LoginValues } from "../../types";
import LoginView from "./login.view";

const Login = () => {
  const history = useHistory();
  const { handleSubmit, register, errors } = useForm<LoginValues>({
    defaultValues: {},
  });

  const [alertStatus, setAlertStatus] = useState<AlertStatusType>({
    show: false,
    message: "",
    type: undefined,
  });

  const handleLogin = handleSubmit(async (data) => {
    try {
      console.log("Values : ", data);

      const response = await loginUser(data);
      setAlertStatus({
        message: response?.error || response.message,
        show: true,
        type: response?.error || response?.errors ? "error" : "success",
      });
      if (response.status === "success") {
        setTimeout(() => {
          history.push("/");
        }, 1000);
      }
      console.log("Response : ", response);
    } catch (error) {
      console.log("Error : ", error);
    }
  });

  return <LoginView {...{ register, errors, handleLogin, alertStatus }} />;
};

export default Login;
