import React from "react";
import LoginView from "./login.view";

interface LoginValues {
    storeID: string;
    password: string;
}

const Login = () => {
    const [loginValues, setLoginValues] = React.useState<LoginValues>({
        storeID: "",
        password: "",
    });

    const handleChange = (prop: keyof LoginValues) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setLoginValues({ ...loginValues, [prop]: event.target.value });
    };

    const handleLogin = () => {
        console.log("Values : ", loginValues);
    };

    return (
        <LoginView
            loginValues={loginValues}
            handleChange={handleChange}
            handleLogin={handleLogin}
        />
    );
};

export default Login;
