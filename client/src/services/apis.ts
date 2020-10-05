import { RegisterValues } from "../types";

const BASE_URL = "http://localhost:8000";

const sendGetRequest = (path: string) => {
    return fetch(BASE_URL + path);
};

const sendPostRequest = (url: string, data: object) => {
    return fetch(BASE_URL + url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
    });
};

export const connectServer = () => {
    return sendGetRequest("");
};

export const registerUser = (registerData: RegisterValues) => {
    return sendPostRequest("/user/register", registerData);
};
