const db = require("../models");
const Factura = db.factura;
const Op = db.Sequelize.Op;

//Create and save a new factura
exports.create = (req, res) => {
    Factura.create(req.body)
        .then(result => res.json(result))
        .catch(err => {
            res.status(412).json({ error: err.message })
        });
};

//Retrieve all facturas from the database.
exports.findAll = (req, res) => {
    Factura.findAll()
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({ error: error.message });
        });
};

//Find a single Factura with an id
exports.findOne = (req, res) => {
    Factura.findOne({ where: { ID_Factura: req.params.id } })
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({ error: error.message });
        });
};

// Update a factura by the id in the request
exports.update = (req, res) => {
    Factura.update(req.body, { where: { ID_Factura: req.params.id } })
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({ error: error.message });
        });
};

// Delete a Factura with the specified id in the request
exports.delete = (req, res) => {
    Factura.destroy({ where: { ID_Factura: req.params.id } })
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({ error: error.message });
        });
};

exports.deleteAll = (req, res) => {
    Factura.destroy({ where: {}, truncate: false })
        .then(result => res.sendStatus(204))
        .catch(err => {
            res.status(412).json({ error: err.message });
        });
};