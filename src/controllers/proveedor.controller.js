const db = require("../models");
const Proveedor = db.proveedor;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    Proveedor.create(req.body)
        .then(result => res.json(result))
        .catch(err => {
            res.status(412).json({error: err.message});
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    Proveedor.findAll({})
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({error: err.message});
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    Proveedor.findOne({ where: {id_Proveedor: req.params}})
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({error: err.message});
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    Proveedor.update(req.body, { where: {id_Proveedor: req.params.id}})
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({error: err.message});
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    Proveedor.destroy({ where: {id_Proveedor: req.params.id}})
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({error: err.message});
        });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Proveedor.destroy({ where: {}, truncate: false })
        .then(result => res.sendStatus(204))
        .catch(err => {
            res.status(412).json({error: err.message});
        });
};