const BASE_URL = "http://localhost:8000";

export const sendGetRequest = (path: string) => {
    return fetch(BASE_URL + path);
};
