import React from "react";
import GenericTable from "../../components/GenericTable";
import { call } from "../../utils/api";

const headers = ["ID Rol", "Nombre de Rol", "Descripción de Rol"];

const fields = ["ID_Rol", "NombreRol", "DescripcionRol"];

const Rol = ({ history }) => {
  const [rols, setRols] = React.useState([]);

  const getRols = React.useCallback(async () => {
    try {
      const res = await call("get", "/rol");
      if (Array.isArray(res)) setRols(res);
    } catch (e) {
      console.log("Error fetching facturas", e);
    }
  }, []);

  React.useEffect(() => {
    getRols();
  }, [getRols]);

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between  mb-2">
        <div>
          <h3>Rol</h3>
        </div>
        <div style={{ width: 300 }}>
          <button type="button" className="btn btn-primary">
            Crear Rol
          </button>
        </div>
      </div>
      <GenericTable headers={headers} fields={fields} data={rols} />
    </div>
  );
};

export default Rol;
