const db = require("../models");
const facturaDetalle = db.facturaDetalle;
const Op = db.Sequelize.Op;

//Create and save a new factura detalle
exports.create = (req, res) => {
    facturaDetalle.create(req.body)
        .then(result => res.json(result))
        .catch(err => {
            res.status(412).json({ error: err.message })
        });
};

//Retrieve all factura detalle from the database.
exports.findAll = (req, res) => {
    facturaDetalle.findAll()
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({ error: error.message });
        });
};

//Find a single Factura detalle with an id
exports.findOne = (req, res) => {
    facturaDetalle.findOne({ where: { ID_FacturaDetalle: req.params.id } })
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({ error: error.message });
        });
};

// Update a Factura Detalle by the id in the request
exports.update = (req, res) => {
    facturaDetalle.update(req.body, { where: { ID_FacturaDetalle: req.params.id } })
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({ error: error.message });
        });
};

// Delete a Factura detalle with the specified id in the request
exports.delete = (req, res) => {
    facturaDetalle.destroy({ where: { ID_FacturaDetalle: req.params.id } })
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({ error: error.message });
        });
};

exports.deleteAll = (req, res) => {
    facturaDetalle.destroy({ where: {}, truncate: false })
        .then(result => res.sendStatus(204))
        .catch(err => {
            res.status(412).json({ error: err.message });
        });
};