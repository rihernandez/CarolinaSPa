import React from "react";
import GenericTable from "../../components/GenericTable";
import { call } from "../../utils/api";

const headers = [
  "ID Usuario",
  "Nombre Usuario",
  "Apellidos Usuario",
  "Email",
  "Rol Usuario",
];

const fields = ["ID_Usuario", "Nombre", "Apellidos", "Email", "NombreRol"];

const Usuario = ({ history }) => {
  const [usuarios, setUsuarios] = React.useState([]);

  const getUsuarios = React.useCallback(async () => {
    try {
      const res = await call("get", "/usuario");
      if (Array.isArray(res)) setUsuarios(res);
    } catch (e) {
      console.log("Error fetching facturas", e);
    }
  }, []);

  React.useEffect(() => {
    getUsuarios();
  }, [getUsuarios]);

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between  mb-2">
        <div>
          <h3>Usuario</h3>
        </div>
        <div style={{ width: 300 }}>
          <button type="button" className="btn btn-primary">
            Crear Usuario
          </button>
        </div>
      </div>
      <GenericTable headers={headers} fields={fields} data={usuarios} />
    </div>
  );
};

export default Usuario;
