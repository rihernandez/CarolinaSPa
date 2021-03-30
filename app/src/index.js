import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { setAuthorizationToken } from "./utils/api";
import { TOKEN_NAME } from "./config/constants";

const token = sessionStorage.getItem(TOKEN_NAME);
if (token) {
    setAuthorizationToken(token);
}

ReactDOM.render( <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode>,
    document.getElementById("root")
);