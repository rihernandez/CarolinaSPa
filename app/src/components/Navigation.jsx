import React from "react";
import { Link, withRouter } from "react-router-dom";
import { TOKEN_NAME } from "../config/constants";
import Sidebar from "./sidebar/Sidebar";

const Navigation = ({ history }) => {
  const isThereSession = () => {
    return sessionStorage.getItem(TOKEN_NAME);
  };

  const handleCloseSession = () => {
    sessionStorage.removeItem(TOKEN_NAME);
  };

  return (
    <>
      <nav
        className="navbar sticky-top navbar-expand-lg navbar-dark "
        style={{
          backgroundColor: "#161e2e",
          color: "white",
          boxShadow: "0 2px 2px -2px rgba(0,0,0,.2)",
        }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            AlbumsApp
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/signin"
                  onClick={handleCloseSession}
                >
                  {isThereSession() ? "Cerrar sesion" : "Iniciar sesión"}
                </Link>
              </li>
              {!isThereSession() && (
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Registrarse
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {isThereSession() && <Sidebar />}
    </>
  );
};

export default withRouter(Navigation);
