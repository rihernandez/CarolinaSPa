const db = require("../models");
const Inventario = db.inventario;
const Proveedore = db.proveedor;
const Producto = db.productos;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    Inventario.create(req.body)
        .then(result => res.json(result))
        .catch(err => {
            res.status(412).json({error: err.message});
        });
};

// Retrieve all Tutorials from the database.

exports.findAll = (req, res) => {
    Inventario.findAll({
        include: [{
            model:Proveedore,  required: true
        },
        {
            model:Producto, required:true
        }]
    })
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({error: err.message});
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    Inventario.findOne({where: {id_Inventario: req.params.id}})
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({error: err.message});
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    Inventario.update(req.body, {where: {id_Inventario: req.params.id}})
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({error: err.message});
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    Inventario.destroy({where: {id_Inventario: req.params.id}})
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({error: err.message});
        });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Inventario.destroy({ where: {}, truncate: false })
        .then(result => res.sendStatus(204))
        .catch(err => {
            res.status(412).json({error: err.message});
        });
};