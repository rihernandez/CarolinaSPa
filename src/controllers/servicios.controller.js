const db = require("../models");
const Servicios = db.servicios;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  Servicios.create(req.body)
        .then(result => res.json(result))
        .catch(err => {
            res.status(412).json({ msg: err.message });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  Servicios.findAll({})
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({ msj: error.message });
        });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  Servicios.findOne({ where: req.params })
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({ msj: error.message });
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  Servicios.update(req.body, { where: req.params })
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({ msj: error.message });
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  Servicios.destroy({ where: req.params })
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({ msj: error.message });
        });
};


// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  Servicios.findAll({ where: { published: true } })
        .then(result => res.json(result))
        .catch(err => {
            res.status(412).json({ msj: err.message });
        });
};