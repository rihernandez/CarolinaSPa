const db = require("../models");
const Factura = db.facturaProducto;
const { QueryTypes } = require("sequelize");
const sequelize = require("../models/index");

//Create and save a new factura
exports.create = (req, res) => {
    Factura.create(req.body)
        .then((result) => res.json(result))
        .catch((err) => {
            res.status(412).json({ error: err.message });
        });
};

//Retrieve all facturas from the database.
exports.findAll = async(req, res) => {
    const facturas = await db.sequelize.query(
        "SELECT Fac.ID_Factura, Fac.ID_Producto,Pro.nombreProducto,Usuarios.Nombre AS Usu_N,Usuarios.Apellidos AS Usu_AP, Clientes.Nombre AS Cli_N, Clientes.Apellidos AS Cli_A, EstadoFacturas.Descripcion AS EstF_Des, Fac.FechaFactura, Fac.FechaRegistro FROM Facturas AS Fac inner join Productos AS Pro ON Fac.ID_Producto = Pro.id_Producto inner join Usuarios on Fac.ID_Usuario = Usuarios.ID_Usuario inner join Clientes on Fac.ID_Cliente = Clientes.ID_Cliente inner join EstadoFacturas on Fac.ID_EstadoFactura = EstadoFacturas.ID_EstadoFactura", {
            type: QueryTypes.SELECT,
        }
    );
    res.json(facturas);
};

//Find a single Factura with an id
exports.findOne = async(req, res) => {
    const factura = await db.sequelize.query(
        "SELECT Fac.ID_Factura, Fac.ID_Producto,Usuarios.Nombre AS Usu_N,Usuarios.Apellidos AS Usu_AP, Clientes.Nombre AS Cli_N, Clientes.Apellidos AS Cli_A, EstadoFacturas.Descripcion AS EstF_Des, Fac.FechaFactura, Fac.FechaRegistro FROM Facturas AS Fac inner join Productos AS Pro ON Fac.ID_Producto = Pro.id_Producto inner join Usuarios on Fac.ID_Usuario = Usuarios.ID_Usuario inner join Clientes on Fac.ID_Cliente = Clientes.ID_Cliente inner join EstadoFacturas on Fac.ID_EstadoFactura = EstadoFacturas.ID_EstadoFactura WHERE ID_Factura = :ID_Factura", {
            replacements: { ID_Factura: `${req.params.id}` },
            type: QueryTypes.SELECT,
        }
    );

    res.json(factura);
};

// Update a factura by the id in the request
exports.update = (req, res) => {
    Factura.update(req.body, { where: { ID_Factura: req.params.id } })
        .then((result) => res.sendStatus(204))
        .catch((error) => {
            res.status(412).json({ error: error.message });
        });
};

// Delete a Factura with the specified id in the request
exports.delete = (req, res) => {
    Factura.destroy({ where: { ID_Factura: req.params.id } })
        .then((result) => res.sendStatus(204))
        .catch((error) => {
            res.status(412).json({ error: error.message });
        });
};

exports.deleteAll = (req, res) => {
    Factura.destroy({ where: {}, truncate: false })
        .then((result) => res.sendStatus(204))
        .catch((err) => {
            res.status(412).json({ error: err.message });
        });
};