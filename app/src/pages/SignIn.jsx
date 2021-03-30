import React from "react";
import { withRouter, Link } from "react-router-dom";
import TextField from "../components/TextField";
import axios from "axios";
import swal from "sweetalert";
import { TOKEN_NAME } from "../config/constants";
import { setAuthorizationToken } from "../utils/api";

// All this shit should be refactored in reusable components, I know it but I just don't give a fuck
// because this is not my project
const SignIn = ({ history }) => {
  const [email, setEmail] = React.useState(null);
  const [pass, setPass] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, {
        Email: email,
        Contrasena: pass,
      });
      if (res.status === 200) {
        if (res.data.token) {
          sessionStorage.setItem(TOKEN_NAME, res.data.token);
          setAuthorizationToken(res.data.token);
        }
        history.replace("/factura");
      }
    } catch (e) {
      console.log("error login in ", e);
      swal("Email o contraseña invalida", "", "error");
    }
  };

  return (
    <div className="container">
      <div className="card bg-light">
        <article className="card-body mx-auto" style={{ maxWidth: "400px" }}>
          <h4 className="card-title mt-3 text-center">Inicia Sesión</h4>
          <form onSubmit={handleSubmit}>
            <TextField
              icon="fa fa-envelope"
              name="Email"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              icon="fa fa-lock"
              name="Contrasena"
              placeholder="Contraseña"
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                {" "}
                Inicia Sesión{" "}
              </button>
            </div>
            <Link className="text-center" to="/signup">
              No tienes una cuenta – Créala aquí
            </Link>{" "}
          </form>
        </article>
      </div>
    </div>
  );
};

export default withRouter(SignIn);
