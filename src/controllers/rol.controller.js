const db = require("../models");
const Rol = db.rol;
const Op = db.Sequelize.Op;

//Create and save a new Rol
exports.create = (req, res) => {
    Rol.create(req.body)
        .then(result => res.json(result))
        .catch(err => {
            res.status(412).json({ error: err.message })
        });
};

//Retrieve all Rol from the database.
exports.findAll = (req, res) => {
    Rol.findAll()
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({ error: error.message });
        });
};

//Find a single Rol with an id
exports.findOne = (req, res) => {
    Rol.findOne({ where: { ID_Rol: req.params.id } })
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({ error: error.message });
        });
};

// Update a Rol by the id in the request
exports.update = (req, res) => {
    Rol.update(req.body, { where: { ID_Rol: req.params.id } })
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({ error: error.message });
        });
};

// Delete a Rol with the specified id in the request
exports.delete = (req, res) => {
    Rol.destroy({ where: { ID_Rol: req.params.id } })
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({ error: error.message });
        });
};

exports.deleteAll = (req, res) => {
    Rol.destroy({ where: {}, truncate: false })
        .then(result => res.sendStatus(204))
        .catch(err => {
            res.status(412).json({ error: err.message });
        });
};