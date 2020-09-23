import React from "react";
import RegisterView from "./register.view";

interface RegisterValues {
    fullName: string;
    emailId: string;
    storeID: string;
    mobileNo: string;
    gender: string;
    city: string;
    country: string;
    password: string;
    confirmPassword: string;
}

const Register = () => {
    const [registerValues, setRegisterValues] = React.useState<RegisterValues>({
        fullName: "",
        emailId: "",
        storeID: "",
        mobileNo: "",
        gender: "",
        city: "",
        country: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (prop: keyof RegisterValues) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRegisterValues({ ...registerValues, [prop]: event.target.value });
    };

    const handleRegister = () => {
        console.log("Values : ", registerValues);
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
