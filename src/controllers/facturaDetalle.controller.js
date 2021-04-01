const db = require("../models");
const facturaDetalle = db.facturaDetalleProducto;
const Op = db.Sequelize.Op;
const { QueryTypes } = require("sequelize");
const sequelize = require("../models/index");

//Create and save a new factura detalle
exports.create = (req, res) => {
    facturaDetalle
        .create(req.body)
        .then((result) => res.json(result))
        .catch((err) => {
            res.status(412).json({ error: err.message });
        });
};

//Retrieve all factura detalle from the database.
exports.findAll = async(req, res) => {
    const facturasDetalle = await db.sequelize.query(
        "SELECT Facts.ID_Factura, FacD.ID_FacturaDetalle, FacD.CantidadProducto, Prod.nombreProducto, FacD.Precio, FacD.ITBIS, FacD.Total,Facts.ID_Usuario, Us.Nombre AS Us_Nomb, Us.Apellidos AS Us_Ap, CL.Nombre AS Cliente_Nomb, CL.Apellidos AS Cliente_Ap, EstF.Descripcion AS Estado_Fact, Facts.FechaFactura,Facts.ID_Cliente,Facts.FechaRegistro FROM facturaDetalles AS FacD inner join Facturas AS Facts ON FacD.ID_Factura = Facts.ID_Factura inner join Usuarios AS Us ON Facts.ID_Usuario = Us.ID_Usuario inner join Clientes AS CL ON Facts.ID_Cliente = CL.ID_Cliente inner join EstadoFacturas AS EstF ON Facts.ID_EstadoFactura = EstF.ID_EstadoFactura inner join Productos AS Prod ON Facts.ID_Producto = Prod.id_Producto ", {
            type: QueryTypes.SELECT,
        }
    );
    res.json(facturasDetalle);
};

//Find a single Factura detalle with an id
exports.findOne = async(req, res) => {
    const facturaDetalle = await db.sequelize.query(
        "SELECT Facts.ID_Factura, FacD.ID_FacturaDetalle, FacD.CantidadProducto, Prod.nombreProducto, FacD.Precio, FacD.ITBIS, FacD.Total, Facts.ID_Usuario, Us.Nombre AS Us_Nomb, Us.Apellidos AS Us_Ap, CL.Nombre AS Cliente_Nomb, Facts.ID_Cliente, CL.Apellidos AS Cliente_Ap, EstF.Descripcion AS Estado_Fact, Facts.FechaFactura,Facts.FechaRegistro FROM facturaDetalles AS FacD inner join Facturas AS Facts ON FacD.ID_Factura = Facts.ID_Factura inner join Usuarios AS Us ON Facts.ID_Usuario = Us.ID_Usuario inner join Clientes AS CL ON Facts.ID_Cliente = CL.ID_Cliente inner join EstadoFacturas AS EstF ON Facts.ID_EstadoFactura = EstF.ID_EstadoFactura inner join Productos AS Prod ON Facts.ID_Producto = Prod.id_Producto WHERE FacD.ID_Factura = :ID_Factura", {
            replacements: { ID_Factura: `${req.params.id}` },
            type: QueryTypes.SELECT,
        }
    );
    const detail = facturaDetalle[0] ? facturaDetalle[0] : null;
    res.json(detail);
};

// Update a Factura Detalle by the id in the request
exports.update = (req, res) => {
    facturaDetalle
        .update(req.body, { where: { ID_FacturaDetalle: req.params.id } })
        .then((result) => res.sendStatus(204))
        .catch((error) => {
            res.status(412).json({ error: error.message });
        });
};

// Delete a Factura detalle with the specified id in the request
exports.delete = (req, res) => {
    facturaDetalle
        .destroy({ where: { ID_FacturaDetalle: req.params.id } })
        .then((result) => res.sendStatus(204))
        .catch((error) => {
            res.status(412).json({ error: error.message });
        });
};

exports.deleteAll = (req, res) => {
    facturaDetalle
        .destroy({ where: {}, truncate: false })
        .then((result) => res.sendStatus(204))
        .catch((err) => {
            res.status(412).json({ error: err.message });
        });
};