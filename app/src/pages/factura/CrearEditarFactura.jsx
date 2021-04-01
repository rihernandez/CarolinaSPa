import React from "react";
import TextField from "../../components/TextField";
import Select from "../../components/Select";
<<<<<<< HEAD
import { withRouter, Link } from "react-router-dom";
import { call } from "../../utils/api";
import { getUser } from "../../utils/auth";
import swal from "sweetalert";

const CrearEditarFactura = ({ match, history }) => {
=======
import { withRouter } from "react-router-dom";
import { call } from "../../utils/api";
import { getUser } from "../../utils/auth";

const CrearEditarFactura = ({ match }) => {
>>>>>>> 3693dd4... auth impl working, Create edit factura impl started, sidebar design changed
  const ID_FACTURA = match.params.idfactura;
  const [factInfo, setFactInfo] = React.useState({});
  const [productos, setProductos] = React.useState([]);
  const [clientes, setClientes] = React.useState([]);
  const [estadosFactura, setEstadosFactura] = React.useState([]);

  const handleChange = (e) => {
<<<<<<< HEAD
    const name = e.target.name;
    const value = e.target.value;

    const cantProd =
      name === "CantidadProducto" ? value : factInfo.CantidadProducto;
    const nomProd = name === "nombreProducto" ? value : factInfo.nombreProducto;
    const total = getTotal(cantProd, nomProd);
    const precio = getSelectedProduct(nomProd)
      ? getSelectedProduct(nomProd).precio
      : 0;
    const ITBIS = getItbis(cantProd, nomProd);
    setFactInfo({
      ...factInfo,
      [name]: e.target.value,
      Total: total,
      Precio: precio,
      ITBIS,
=======
    setFactInfo({
      ...factInfo,
      [e.target.name]: e.target.value,
>>>>>>> 3693dd4... auth impl working, Create edit factura impl started, sidebar design changed
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

<<<<<<< HEAD
  const handleCrearFactura = async (factura, detalleFactua) => {
    delete factura.ID_Factura;
    delete detalleFactua.ID_FacturaDetalle;
    try {
      const newFactura = await call("post", `factura`, factura);
      await call("post", `facturadetalle`, {
        ...detalleFactua,
        ID_Factura: newFactura.ID_Factura,
      });
      swal(
        "La factura ha sido creada con exito",
        `Presiona "OK" para continuar`,
        "success"
      );
      history.replace("/factura");
    } catch (error) {
      console.log("Error al crear la factura", error);
      swal(
        "Error al crear la factura, favor revisa los campos",
        `Presiona "OK" para continuar`,
        "error"
      );
    }
  };

  const handleEditarFactura = async (factura, detalleFactua) => {
    try {
      await call("put", `factura/${factura.ID_Factura}`, factura);
      await call(
        "put",
        `facturadetalle/${detalleFactua.ID_FacturaDetalle}`,
        detalleFactua
      );
      swal(
        "La factura ha sido editada",
        `Presiona "OK" para continuar`,
        "success"
      );
      history.replace("/factura");
    } catch (error) {
      console.log("Error al editar la factura", error);
      swal(
        "Error al editar factura, favor revisa los campos",
        `Presiona "OK" para continuar`,
        "error"
      );
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const ID_Producto = getSelectedProduct(factInfo.nombreProducto);
    const ID_Usuario = getUsuario();
    const objectFactura = {
      ID_Producto: ID_Producto ? ID_Producto.id_Producto : null,
      ID_Usuario,
      ID_Cliente: factInfo.ID_Cliente,
      ID_EstadoFactura: getStadoFactura().ID_EstadoFactura,
      ID_Factura: factInfo.ID_Factura,
    };
    const objectDetalleFactura = {
      ID_Factura: factInfo.ID_Factura,
      CantidadProducto: factInfo.CantidadProducto,
      Precio: factInfo.Precio,
      ITBIS: factInfo.ITBIS,
      Total: factInfo.Total,
      ID_FacturaDetalle: factInfo.ID_FacturaDetalle,
    };

    if (ID_FACTURA) {
      handleEditarFactura(objectFactura, objectDetalleFactura);
    } else {
      handleCrearFactura(objectFactura, objectDetalleFactura);
    }
  };

  const getSelectedProduct = (nombreProducto) => {
    const prod = productos.find((pro) => {
      return pro.nombreProducto === nombreProducto;
    });
    return prod;
  };

  const getItbis = (cantProd, nombreProducto) => {
    const selectedProd = getSelectedProduct(nombreProducto);
    if (cantProd && selectedProd) {
      const itbis = cantProd * selectedProd.precio * 0.18;
      return itbis.toFixed(2);
    }
    return 0;
  };

  const getTotal = (cantProd, nombreProducto) => {
    const itbis = getItbis(cantProd, nombreProducto);
    if (itbis) {
      return (
        Number(cantProd * getSelectedProduct(nombreProducto).precio) +
        Number(itbis)
      );
    }
    return 0;
  };

  const getUsuario = () => {
    return ID_FACTURA ? factInfo.ID_Usuario : getUser().id;
  };

  const getStadoFactura = () => {
    const estadoFact = estadosFactura.find((estado) => {
      return estado.Descripcion === factInfo.Estado_Fact;
    });

    return estadoFact ? estadoFact : {};
  };
=======
  //   const crearFactura = async () => {
  //     try {
  //       const res = await call("get", `estadofactura`);
  //       if (Array.isArray(res)) setEstadosFactura(res);
  //     } catch (error) {
  //       console.log("Error fetching clientes", error);
  //     }
  //   };
>>>>>>> 3693dd4... auth impl working, Create edit factura impl started, sidebar design changed

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
<<<<<<< HEAD
      required
=======
>>>>>>> 3693dd4... auth impl working, Create edit factura impl started, sidebar design changed
    />
  );

  return (
    <div className="card" style={{ width: "90%" }}>
<<<<<<< HEAD
      <Link className="navbar-brand ml-3" to="/factura">
        Volver a Facturas
      </Link>
      <form onSubmit={handleFormSubmit}>
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
                  required
                />
              </div>

              <div className="col-md">
                <Select
                  label="Cliente"
                  onChange={handleChange}
                  name="ID_Cliente"
                  options={clientes}
                  optionsLabel="ID_Cliente"
                  optionLabelExpression="{option.Nombre +' '+ option.Apellidos}"
                  value={factInfo.ID_Cliente || ""}
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
                  disabled
                />
              </div>
              <div className="col-md">
                <TextField
                  label="ITBIS"
                  name="ITBIS"
                  placeholder="ITBIS Factura"
                  type="number"
                  value={factInfo.ITBIS | ""}
                  onChange={handleChange}
                  disabled
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
                      ? factInfo.Us_Nomb + " " + factInfo.Us_Ap
                      : getUser().name + " " + getUser().lastname
                  }
                  onChange={handleChange}
                  disabled
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
                  disabled
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
          <button type="submit" className="btn btn-primary">
            {ID_FACTURA ? "Editar" : "Crear"}
          </button>
        </div>
      </form>
=======
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
>>>>>>> 3693dd4... auth impl working, Create edit factura impl started, sidebar design changed
    </div>
  );
};

export default withRouter(CrearEditarFactura);
