import React from "react";
import TextField from "../../components/TextField";
import swal from "sweetalert";
import { withRouter, Link } from "react-router-dom";
import { call } from "../../utils/api";

const CrearEditarRol = ({ match, history }) => {
  const ID_ROL = match.params.idrol;

  const [rol, setRol] = React.useState({});

  const handleChange = (e) => {
    setRol({
      ...rol,
      [e.target.name]: e.target.value,
    });
  };

  const getRol = React.useCallback(async () => {
    try {
      const res = await call("get", `rol/${ID_ROL}`);
      if (res) setRol(res);
    } catch (e) {
      console.log("Error fetching rols", e);
    }
  }, [ID_ROL]);

  const handleEditarRol = async () => {
    try {
      await call("put", `rol/${rol.ID_Rol}`, rol);
      swal(
        "El rol ha sido editado con exito",
        `Presiona "OK" para continuar`,
        "success"
      );
      history.replace("/rol");
    } catch (error) {
      console.log("Error al editar el rol", error);
      swal(
        "Error al editar el rol, favor revisa los campos",
        `Presiona "OK" para continuar`,
        "error"
      );
    }
  };

  const handleCrearRol = async () => {
    try {
      await call("post", `rol`, rol);
      swal(
        "El rol ha sido creado con exito",
        `Presiona "OK" para continuar`,
        "success"
      );
      history.replace("/rol");
    } catch (error) {
      console.log("Error al crear el rol", error);
      swal(
        "Error al crear el rol, favor revisa los campos",
        `Presiona "OK" para continuar`,
        "error"
      );
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (ID_ROL) {
      handleEditarRol();
    } else {
      handleCrearRol();
    }
  };

  React.useEffect(() => {
    if (ID_ROL) getRol();
  }, [getRol, ID_ROL]);

  return (
    <div className="card" style={{ width: "90%" }}>
      <Link className="navbar-brand ml-3" to="/rol">
        Volver a Roles
      </Link>

      <h4 className="card-title mt-3 text-center">
        {ID_ROL ? "Editar Rol" : "Crear Rol"}
      </h4>
      <div className="card-body">
        <div className="container">
          <form onSubmit={handleSubmitForm}>
            <div className="row">
              {ID_ROL && (
                <div className="col-md">
                  <TextField
                    label="ID Factura"
                    name="ID_Rol"
                    placeholder="ID Rol"
                    type="number"
                    value={rol.ID_Rol}
                    onChange={handleChange}
                    disabled
                  />
                </div>
              )}

              <div className="col-md">
                <TextField
                  label="Nombre Rol"
                  name="NombreRol"
                  placeholder="Nombre Rol"
                  type="text"
                  value={rol.NombreRol}
                  onChange={handleChange}
                  disabled={ID_ROL}
                />
              </div>

              <div className="col-md">
                <TextField
                  label="Descripcion Rol"
                  name="DescripcionRol"
                  placeholder="Descripcion Rol"
                  type="text"
                  value={rol.DescripcionRol}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div
              style={{ width: "100px", marginLeft: "auto" }}
              className="mb-3"
            >
              <button type="submit" className="btn btn-primary">
                {ID_ROL ? "Editar" : "Crear"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CrearEditarRol);
