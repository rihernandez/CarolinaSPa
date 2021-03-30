import React from "react";
import GenericTable from "../../components/GenericTable";
import { call } from "../../utils/api";

const headers = [
  "ID Factura",
  "ID Producto",
  "Nombre Producto",
  "Nombre Usuario",
  "Apellido Usuario",
  "Nombre Cliente",
  "Apellido Cliente",
  "Estado Factura",
  "Fecha Factura",
];

const fields = [
  "ID_Factura",
  "ID_Producto",
  "nombreProducto",
  "Usu_N",
  "Usu_AP",
  "Cli_N",
  "Cli_A",
  "EstF_Des",
  "FechaFactura",
];

const Factura = ({ history }) => {
  const [facturas, setFacturas] = React.useState([]);

  const getFacturas = React.useCallback(async () => {
    try {
      const res = await call("get", "/factura");
      if (Array.isArray(res)) setFacturas(res);
    } catch (e) {
      console.log("Error fetching facturas", e);
    }
  }, []);

  React.useEffect(() => {
    getFacturas();
  }, [getFacturas]);

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between  mb-2">
        <div>
          <h3>Facturas</h3>
        </div>
        <div style={{ width: 300 }}>
          <button type="button" className="btn btn-primary">
            Crear Factura
          </button>
        </div>
      </div>
      <GenericTable headers={headers} fields={fields} data={facturas} />
    </div>
  );
};

export default Factura;
