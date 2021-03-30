import React from "react";
import { withRouter, Link } from "react-router-dom";
import TextField from "../components/TextField";
import axios from "axios";
import swal from "sweetalert";

// All this shit should be refactored in reusable components, I know it but I just don't give a fuck
// because this is not my project
const SignUp = ({ history }) => {
  const [userInfo, setUserInfo] = React.useState({});
  const [confirmPass, setConfirmPass] = React.useState(null);

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userInfo.Contrasena !== confirmPass) {
      swal("Las contraseñas deben de ser las mismas", "", "error");
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/usuario`,
        userInfo
      );
      swal(
        "La cuenta ha sido creada",
        `Presiona "OK" para iniciar sesión`,
        "success"
      );
      if (res.status === 200) {
        history.replace("/signin");
      }
    } catch (e) {
      console.log("Error creating user ", e);
    }
  };

  return (
    <div className="container">
      <div className="card bg-light">
        <article className="card-body mx-auto" style={{ maxWidth: "400px" }}>
          <h4 className="card-title mt-3 text-center">Crear cuenta</h4>
          <form onSubmit={handleSubmit}>
            <TextField
              icon="fa fa-user"
              name="Nombre"
              placeholder="Nombre"
              value={userInfo.Nombre}
              onChange={handleChange}
            />
            <TextField
              icon="fa fa-user"
              name="Apellidos"
              placeholder="Apellidos"
              value={userInfo.Apellidos}
              onChange={handleChange}
            />
            <TextField
              icon="fas fa-id-card-alt"
              name="Cedula"
              placeholder="Cédula"
              value={userInfo.Cedula}
              onChange={handleChange}
            />
            <TextField
              icon="far fa-calendar"
              name="FechaNacimiento"
              placeholder="Fecha de nacimiento"
              type="date"
              value={userInfo.FechaNacimiento}
              onChange={handleChange}
            />
            <TextField
              icon="fa fa-envelope"
              name="Email"
              placeholder="Email"
              type="email"
              value={userInfo.Email}
              onChange={handleChange}
            />
            <TextField
              icon="fa fa-lock"
              name="Contrasena"
              placeholder="Contraseña"
              value={userInfo.Contrasena}
              onChange={handleChange}
              type="password"
            />
            <TextField
              icon="fa fa-lock"
              name="Contrasena"
              placeholder="Repita la contraseña"
              onChange={(e) => setConfirmPass(e.target.value)}
              value={confirmPass}
              type="password"
            />
            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-block">
                Crear cuenta{" "}
              </button>
            </div>
            <Link className="text-center" to="/signin">
              ¿Tienes una cuenta? – Inicia sesión
            </Link>{" "}
          </form>
        </article>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
