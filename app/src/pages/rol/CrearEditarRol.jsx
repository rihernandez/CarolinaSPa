import React from "react";
import TextField from "../../components/TextField";
import Select from "../../components/Select";
import { withRouter } from "react-router-dom";
import { call } from "../../utils/api";

const CrearEditarRol = ({ history }) => {
  const [rols, setRols] = React.useState([]);

  const handleChange = (e) => {
    setRols({
      ...rols,
      [e.target.name]: e.target.value,
    });
  };

  const getRols = React.useCallback(async () => {
    try {
      const res = await call("get", "/rol");
      if (Array.isArray(res)) setRols(res);
    } catch (e) {
      console.log("Error fetching rols", e);
    }
  }, []);

  React.useEffect(() => {
    getRols();
  }, [getRols]);

  return (
    <div className="card" style={{ width: "90%" }}>
      <h4 className="card-title mt-3 text-center">Crear o Editar Rol</h4>
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col-md">
              <TextField
                label="ID Factura"
                name="ID_Rol"
                placeholder="ID Rol"
                type="number"
                value={rols.ID_Rol}
                onChange={handleChange}
              />
            </div>

            <div className="col-md">
              <TextField
                label="Nombre Rol"
                name="NombreRol"
                placeholder="Nombre Rol"
                type="text"
                value={rols.NombreRol}
                onChange={handleChange}
              />
            </div>

            <div className="col-md">
              <TextField
                label="ID Factura"
                name="DescripcionRol"
                placeholder="Descripcion Rol"
                type="text"
                value={rols.DescripcionRol}
                onChange={handleChange}
              />
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

export default withRouter(CrearEditarRol);
