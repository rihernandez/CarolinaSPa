import jwtDecode from "jwt-decode";
import { TOKEN_NAME } from "../config/constants";

export const getUser = () => {
    const token = sessionStorage.getItem(TOKEN_NAME);
    if (token) {
        const tokenDecoded = jwtDecode(token);
        if (tokenDecoded) return tokenDecoded;
    }
    return null;
};

export const isAdmin = () => {
    const user = getUser();
    if (user && user.rol) {
        return user.rol.NombreRol.toUpperCase() === "ADMIN";
    }
    return false;
};