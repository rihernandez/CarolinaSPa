import axios from "axios";

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export function makeCallFunction(axiosInstance) {
    return async function(method = "get", url, payload, config) {
        try {
            const res = await axiosInstance({
                method,
                url: url,
                data: payload,
                ...config,
            });
            return res.data;
        } catch (error) {
            throw error;
        }
    };
}

export function setAuthorizationToken(token) {
    if (token) {
        request.defaults.headers.common["auth-token"] = `${token}`;
    } else {
        delete request.defaults.headers.common["Authorization"];
    }
}

export const call = makeCallFunction(request);