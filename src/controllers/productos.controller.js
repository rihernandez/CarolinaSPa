const db = require("../models");
const Producto = db.productos;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    Producto.create(req.body)
        .then(result => res.json(result))
        .catch(err => {
            res.status(412).json({error: err.message});
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    Producto.findAll({})
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({error: err.message});
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    Producto.findOne({where: {id_Producto: req.params.id}})
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({error: err.message});
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    Producto.update(req.body, {where: {id_Producto: req.params.id}})
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({error: err.message});
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    Producto.destroy({where: {id_Producto: req.params.id}})
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({error: err.message});
        });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Producto.destroy({where: {id_Producto: req.params.id}})
        .then(result => res.sendStatus(204))
        .catch(err => {
            res.status(412).json({error: err.message});
        });
};
