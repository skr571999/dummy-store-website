import React, { useEffect } from "react";

import RegisterView from "./register.view";

import { initialRegisterValues, REGISTER_USER_VALUES } from "../../data";
import { registerUser } from "../../services/apis";
import { RegisterValues } from "../../types";

const Register = () => {
    const [registerValues, setRegisterValues] = React.useState<RegisterValues>(
        initialRegisterValues
    );

    // TOREMOVE: for testing
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
                console.log("Rsponse : ", response);

                const data = await response.json();
                console.log("Data : ", data);
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
        />
    );
};

export default Register;
