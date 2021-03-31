const db = require("../models");
const bcrypt = require("bcrypt");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;


//Create and save a new User
exports.create = async(req, res) => {

    if (!req.body.Email) {
        return res.status(500).json({ error: true, mensaje: "El email es requerido" })
    }

    if (!req.body.Contrasena) {
        return res.status(500).json({ error: true, mensaje: "La contraseña es requerida" })
    }

    const ExisteEmail = await Usuario.findOne({ where: { Email: req.body.Email } })
    console.log(req.body.Email);
    if (ExisteEmail) {
        return res.status(400).json({ error: true, mensaje: "El email ingresado ya posee una cuenta creada" })
    }

    const saltos = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.Contrasena, saltos)
    const user = {...req.body, Contrasena: password }

    Usuario.create(user)
        .then(result => res.json(result))
        .catch(err => {
            res.status(412).json({ error: err.message })
        });
};

//Retrieve all Users from the database.
exports.findAll = (req, res) => {
    Usuario.findAll()
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({ error: error.message });
        });
};

//Find a single User with an id
exports.findOne = (req, res) => {
    Usuario.findOne({ where: { ID_Usuario: req.params.id } })
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({ error: error.message });
        });
};

// Update a User by the id in the request
exports.update = (req, res) => {
    Usuario.update(req.body, { where: { ID_Usuario: req.params.id } })
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({ error: error.message });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    Usuario.destroy({ where: { ID_Usuario: req.params.id } })
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({ error: error.message });
        });
};

exports.deleteAll = (req, res) => {
    Usuario.destroy({ where: {}, truncate: false })
        .then(result => res.sendStatus(204))
        .catch(err => {
            res.status(412).json({ error: err.message });
        });
};