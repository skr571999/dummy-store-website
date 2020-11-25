import React, { useEffect, useState } from "react";

import RegisterView from "./register.view";

import { initialRegisterValues, REGISTER_USER_VALUES } from "../../data";
import { registerUser } from "../../services/apis";
import { AlertStatusType, RegisterValues } from "../../types";

const Register = () => {
  const [registerValues, setRegisterValues] = useState<RegisterValues>(
    initialRegisterValues
  );

  const [alertStatus, setAlertStatus] = useState<AlertStatusType>({
    show: false,
    message: "",
    type: undefined,
  });

  // For Testing
  useEffect(() => {
    setRegisterValues(REGISTER_USER_VALUES);
  }, [setRegisterValues]);

  const handleChange = (prop: keyof RegisterValues) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRegisterValues({ ...registerValues, [prop]: event.target.value });
  };

  const handleRegister = () => {
    (async () => {
      try {
        console.log("Values : ", registerValues);

        const response = await registerUser(registerValues);
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
    <RegisterView
      handleChange={handleChange}
      handleRegister={handleRegister}
      registerValues={registerValues}
      alertStatus={alertStatus}
    />
  );
};

export default Register;
