import React from "react";
import GenericTable from "../../components/GenericTable";
import { call } from "../../utils/api";
import { withRouter } from "react-router-dom";
import { isAdmin } from "../../utils/auth";

const headers = [
  "ID Factura",
  "Nombre Producto",
  "Nombre Cliente",
  "Apellido Cliente",
  "Estado Factura",
  "Fecha Factura",
];

const fields = [
  "ID_Factura",
  "nombreProducto",
  "Cli_N",
  "Cli_A",
  "EstF_Des",
  "FechaFactura",
];

const Factura = ({ history }) => {
  const [facturas, setFacturas] = React.useState([]);

  const getFacturas = React.useCallback(async () => {
    try {
      const res = await call("get", "factura");
      if (Array.isArray(res)) setFacturas(res);
    } catch (e) {
      console.log("Error fetching facturas", e);
    }
  }, []);

  const handleRowSelected = (id) => {
    history.replace(`/factura/detalle/${id}`);
  };

  React.useEffect(() => {
    getFacturas();
  }, [getFacturas]);

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between  mb-2">
        <div>
          <h3>Facturas</h3>
        </div>
        <div style={{ width: 150 }}>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => history.replace("/factura/detalle")}
          >
            Crear Factura
          </button>
        </div>
      </div>
      <GenericTable
        headers={headers}
        fields={fields}
        data={facturas}
        idName="ID_Factura"
        onRowSelected={handleRowSelected}
        showDelete={isAdmin()}
      />
    </div>
  );
};

export default withRouter(Factura);
