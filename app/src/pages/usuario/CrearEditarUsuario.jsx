import React from "react";
import TextField from "../../components/TextField";
import Select from "../../components/Select";
import { withRouter, Link } from "react-router-dom";
import { call } from "../../utils/api";
import swal from "sweetalert";

const CrearEditarUsuario = ({ history, match }) => {
  const ID_USUARIO = match.params.idusuario;
  const [usuario, setUsuario] = React.useState({});
  const [roles, setRoles] = React.useState([]);

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const getGeneratedRandomPass = () => {
    return Math.random().toString(36).slice(-8);
  };

  const getUsuario = React.useCallback(async () => {
    try {
      const res = await call("get", `usuario/${ID_USUARIO}`);
      if (res) setUsuario(res);
    } catch (e) {
      console.log("Error fetching usuario", e);
    }
  }, [ID_USUARIO]);

  const getRols = React.useCallback(async () => {
    try {
      const res = await call("get", "/rol");
      if (Array.isArray(res)) setRoles(res);
    } catch (e) {
      console.log("Error fetching facturas", e);
    }
  }, []);

  const handleEditarUsuario = async (user) => {
    try {
      await call("put", `usuario/${usuario.ID_Usuario}`, user);
      swal(
        "El usuario ha sido editado con exito",
        `Presiona "OK" para continuar`,
        "success"
      );
      history.replace("/usuario");
    } catch (error) {
      console.log("Error al crear el rol", error);
      swal(
        "Error al editar el usuario, favor revisa los campos",
        `Presiona "OK" para continuar`,
        "error"
      );
    }
  };

  const handleCrearUsuario = async (user) => {
    try {
      await call("post", `usuario`, user);
      swal(
        "El usuario ha sido creado con exito",
        `Presiona "OK" para continuar`,
        "success"
      );
      history.replace("/usuario");
    } catch (error) {
      console.log("Error al crear el rol", error);
      swal(
        "Error al crear el usuario, favor revisa los campos",
        `Presiona "OK" para continuar`,
        "error"
      );
    }
  };

  const getRole = () => {
    const rol = roles.find((r) => {
      return r.NombreRol === usuario.NombreRol;
    });
    return rol;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const ID_Rol = getRole() ? getRole().ID_Rol : null;

    const user = {
      ...usuario,
      ID_Rol,
    };
    delete user.NombreRol;

    if (ID_USUARIO) {
      handleEditarUsuario(user);
    } else {
      handleCrearUsuario(user);
    }
  };

  React.useEffect(() => {
    if (ID_USUARIO) {
      getUsuario();
    } else {
      setUsuario({
        Contrasena: getGeneratedRandomPass(),
      });
    }
    getRols();
  }, [getUsuario, getRols, ID_USUARIO]);

  return (
    <div className="card" style={{ width: "90%" }}>
      <Link className="navbar-brand ml-3" to="/usuario">
        Volver a Usuarios
      </Link>
      <h4 className="card-title mt-3 text-center">
        {ID_USUARIO ? "Editar Usuario " : "Crear Usuario"}
      </h4>
      <div className="card-body">
        <div className="container">
          <form onSubmit={handleFormSubmit}>
            <div className="row">
              {ID_USUARIO && (
                <div className="col-md">
                  <TextField
                    label="ID Usuario"
                    name="ID_Usuario"
                    placeholder="ID Usuario"
                    type="number"
                    value={usuario.ID_Usuario}
                    onChange={handleChange}
                    disabled
                  />
                </div>
              )}

              <div className="col-md">
                <TextField
                  label="Nombre Usuario"
                  name="Nombre"
                  placeholder="Nombre Usuario"
                  type="text"
                  value={usuario.Nombre}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md">
                <TextField
                  label="Email"
                  name="Email"
                  placeholder="Email"
                  type="text"
                  value={usuario.Email}
                  onChange={handleChange}
                />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md">
                    <Select
                      label="Rol"
                      onChange={handleChange}
                      name="NombreRol"
                      options={roles}
                      optionsLabel="NombreRol"
                      value={usuario.NombreRol || ""}
                      required
                    />
                  </div>
                  <div className="col-md">
                    <TextField
                      label="Apellidos del Usuario"
                      name="Apellidos"
                      placeholder="Apellidos Usuario"
                      type="text"
                      value={usuario.Apellidos}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md">
                    <TextField
                      label="Cedula del Usuario"
                      name="Cedula"
                      placeholder="Cedula Usuario"
                      type="text"
                      value={usuario.Cedula}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <TextField
                      label="Fecha de nacimiento del Usuario"
                      name="FechaNacimiento"
                      placeholder="FechaNacimiento Usuario"
                      type="date"
                      value={usuario.FechaNacimiento}
                      onChange={handleChange}
                    />
                  </div>
                  {!ID_USUARIO && (
                    <div className="col-4">
                      <TextField
                        label="Default Password"
                        name="Contrasena"
                        type="text"
                        value={usuario.Contrasena}
                        onChange={handleChange}
                        disabled
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              style={{ width: "100px", marginLeft: "auto" }}
              className="mb-3"
            >
              <button type="submit" className="btn btn-primary">
                {ID_USUARIO ? "Editar " : "Crear"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CrearEditarUsuario);
