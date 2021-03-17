const db = require("../models");
const Categoria = db.categorias;
const Op = db.Sequelize.Op;

// Create and save a new Categoria
exports.create = (req, res) => {
    Categoria.create(req.body)
        .then(result => res.json(result))
        .catch(err => {
            res.status(412).json({error: err.message});
        });
};

// Retrieve all categorias from the database.
exports.findAll = (req, res) => {
    Categoria.findAll({})
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({error: err.message});
        });
};

// Find a single categoria with an id
exports.findOne = (req, res) => {
    Categoria.findOne({ where: {id_Categoria: req.params.id}})
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({error: err.message});
        });
};

// Update a categoria by the id in the request
exports.update = (req, res) => {
    Categoria.update(req.body, { where: {id_Categoria: req.params.id} })
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({error: err.message});
        });
};

// Delete a categoria with the specified id in the request
exports.delete = (req, res) => {
    Categoria.destroy({ where: {id_Categoria: req.params.id}})
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({error: err.message});
        });
};

// Delete all categorias from the database.
exports.deleteAll = (req, res) => {
    Categoria.destroy({ where: {}, truncate: false })
        .then(result => res.sendStatus(204))
        .catch(err => {
            res.status(412).json({error: err.message});
        });
};