import React from "react";
import TextField from "../../components/TextField";
import Select from "../../components/Select";
import { withRouter } from "react-router-dom";
import { call } from "../../utils/api";

const CrearEditarUsuario = ({ history }) => {
  const [usuarios, setUsuarios] = React.useState([]);

  const handleChange = (e) => {
    setUsuarios({
      ...usuarios,
      [e.target.name]: e.target.value,
    });
  };

  const getUsuarios = React.useCallback(async () => {
    try {
      const res = await call("get", "/usuario");
      if (Array.isArray(res)) setUsuarios(res);
    } catch (e) {
      console.log("Error fetching usuarios", e);
    }
  }, []);

  React.useEffect(() => {
    getUsuarios();
  }, [getUsuarios]);

  return (
    <div className="card" style={{ width: "90%" }}>
      <h4 className="card-title mt-3 text-center">Crear o Editar Usuario</h4>
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <TextField
                label="ID Usuario"
                name="ID_Usuario"
                placeholder="ID Usuario"
                type="number"
                value={usuarios.ID_Usuario}
                onChange={handleChange}
              />
            </div>

            <div className="col-md">
              <TextField
                label="Nombre Usuario"
                name="Nombre"
                placeholder="Nombre Usuario"
                type="text"
                value={usuarios.Nombre}
                onChange={handleChange}
              />
            </div>

            <div className="col-md">
              <TextField
                label="Email"
                name="Email"
                placeholder="Email"
                type="text"
                value={usuarios.Email}
                onChange={handleChange}
              />
            </div>
            <div className="container">
              <div className="row">
                <div className="col-4">
                  <TextField
                    label="Nombre Rol"
                    name="NombreRol"
                    placeholder="Nombre Rol"
                    type="text"
                    value={usuarios.NombreRol}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "100px", marginLeft: "auto" }} className="mb-3">
            <button type="button" className="btn btn-primary">
              Crear o Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CrearEditarUsuario);
