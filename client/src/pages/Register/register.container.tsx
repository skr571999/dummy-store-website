import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import RegisterView from "./register.view";

import { registerUser } from "../../services/apis";
import { AlertStatusType, RegisterValues } from "../../types";

const Register = () => {
  const history = useHistory();
  const [alertStatus, setAlertStatus] = useState<AlertStatusType>({
    show: false,
    message: "",
    type: undefined,
  });

  const { handleSubmit, register, errors, watch } = useForm<RegisterValues>({
    defaultValues: {},
  });

  const password = useRef({});
  password.current = watch("password", "");

  const handleRegister = handleSubmit((data) => {
    (async () => {
      try {
        const response = await registerUser(data);
        setAlertStatus({
          message: response?.error || response.message,
          show: true,
          type: response?.error || response?.errors ? "error" : "success",
        });
        console.log("Response : ", response);
        setTimeout(() => {
          history.push("/login");
        }, 1000);
      } catch (error) {
        console.log("Error : ", error);
      }
    })();
  });

  return (
    <RegisterView
      {...{ register, errors, password, handleRegister, alertStatus }}
    />
  );
};

export default Register;
