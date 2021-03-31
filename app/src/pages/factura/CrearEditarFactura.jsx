import React from "react";
import TextField from "../../components/TextField";
import Select from "../../components/Select";
import { withRouter } from "react-router-dom";
import { call } from "../../utils/api";
import { getUser } from "../../utils/auth";

const CrearEditarFactura = ({ match }) => {
  const ID_FACTURA = match.params.idfactura;
  const [factInfo, setFactInfo] = React.useState({});
  const [productos, setProductos] = React.useState([]);
  const [clientes, setClientes] = React.useState([]);
  const [estadosFactura, setEstadosFactura] = React.useState([]);

  const handleChange = (e) => {
    setFactInfo({
      ...factInfo,
      [e.target.name]: e.target.value,
    });
  };

  const fetchFacturaDetail = React.useCallback(async () => {
    try {
      const res = await call("get", `facturadetalle/${ID_FACTURA}`);
      if (res) setFactInfo(res);
    } catch (error) {
      console.log("Error fetching factura detalle", error);
    }
  }, [ID_FACTURA]);

  const fetchProductos = React.useCallback(async () => {
    try {
      const res = await call("get", `producto`);
      if (Array.isArray(res)) setProductos(res);
    } catch (error) {
      console.log("Error fetching productos", error);
    }
  }, []);

  const fetchClientes = React.useCallback(async () => {
    try {
      const res = await call("get", `clientes`);
      if (Array.isArray(res)) setClientes(res);
    } catch (error) {
      console.log("Error fetching clientes", error);
    }
  }, []);

  const fetchEstadoFactura = React.useCallback(async () => {
    try {
      const res = await call("get", `estadofactura`);
      if (Array.isArray(res)) setEstadosFactura(res);
    } catch (error) {
      console.log("Error fetching clientes", error);
    }
  }, []);

  //   const crearFactura = async () => {
  //     try {
  //       const res = await call("get", `estadofactura`);
  //       if (Array.isArray(res)) setEstadosFactura(res);
  //     } catch (error) {
  //       console.log("Error fetching clientes", error);
  //     }
  //   };

  React.useEffect(() => {
    if (ID_FACTURA) fetchFacturaDetail();
  }, [fetchFacturaDetail, ID_FACTURA]);

  React.useEffect(() => {
    fetchProductos();
    fetchClientes();
    fetchEstadoFactura();
  }, [fetchProductos, fetchClientes, fetchEstadoFactura]);

  const EstadoFacturaField = (
    <Select
      label="Estado Factura"
      onChange={handleChange}
      name="Estado_Fact"
      options={estadosFactura}
      optionsLabel="Descripcion"
      value={factInfo.Estado_Fact || ""}
    />
  );

  return (
    <div className="card" style={{ width: "90%" }}>
      <h4 className="card-title mt-3 text-center">
        {ID_FACTURA ? "Editar Factura" : "Crear Factura"}
      </h4>
      <div className="card-body">
        <div className="container">
          <div className="row">
            <div className="col-md">
              {ID_FACTURA ? (
                <TextField
                  label="ID Factura"
                  name="ID_Factura"
                  placeholder="ID Factura"
                  type="number"
                  value={factInfo.ID_Factura}
                  onChange={handleChange}
                  disabled
                />
              ) : (
                EstadoFacturaField
              )}
            </div>

            <div className="col-md">
              <Select
                label="Producto"
                onChange={handleChange}
                name="nombreProducto"
                options={productos}
                optionsLabel="nombreProducto"
                value={factInfo.nombreProducto || ""}
              />
            </div>

            <div className="col-md">
              <TextField
                label="Total Factura"
                name="Total"
                placeholder="Total Factura"
                type="number"
                value={factInfo.Total}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md">
              <TextField
                label="Cantidad Producto"
                name="CantidadProducto"
                placeholder="Cantidad Producto"
                type="number"
                value={factInfo.CantidadProducto}
                onChange={handleChange}
              />
            </div>

            <div className="col-md">
              <TextField
                label="Precio"
                name="Precio"
                placeholder="Precio Producto"
                type="number"
                value={factInfo.Precio}
                onChange={handleChange}
              />
            </div>
            <div className="col-md">
              <TextField
                label="ITBIS"
                name="ITBIS"
                placeholder="ITBIS Factura"
                type="number"
                value={factInfo.ITBIS}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md">
              <TextField
                label="Usuario"
                name="Usu_N"
                placeholder="Nombre Usuario"
                type="text"
                value={
                  ID_FACTURA
                    ? factInfo.Us_Nomb
                    : getUser().name + " " + getUser().lastname
                }
                onChange={handleChange}
                disabled
              />
            </div>
            <div className="col-md">
              <Select
                label="Cliente"
                onChange={handleChange}
                name="Cliente_Nomb"
                options={clientes}
                optionLabelExpression="{option.Nombre +' '+ option.Apellidos}"
                value={factInfo.Cliente_Nomb || ""}
              />
            </div>
            <div className="col-md">
              {ID_FACTURA && (
                <TextField
                  label="Fecha Factura"
                  name="FechaFactura"
                  placeholder="Fecha Factura"
                  type="text"
                  value={factInfo.FechaFactura}
                  onChange={handleChange}
                  disabled
                />
              )}
            </div>
          </div>

          <div className="row">
            {ID_FACTURA && <div className="col-4">{EstadoFacturaField}</div>}
          </div>
        </div>
      </div>
      <div style={{ width: "100px", marginLeft: "auto" }} className="mb-3">
        <button type="button" className="btn btn-primary">
          {ID_FACTURA ? "Editar" : "Crear"}
        </button>
      </div>
    </div>
  );
};

export default withRouter(CrearEditarFactura);
