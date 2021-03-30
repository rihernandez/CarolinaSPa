const db = require("../models");
const bcrypt = require("bcrypt");
const Usuario = db.usuario;
const Sequelize = db.Sequelize;
const { QueryTypes } = require("sequelize");
const sequelize = require("../models/index");
//Create and save a new User
exports.create = async(req, res) => {
    if (!req.body.Email) {
        return res
            .status(500)
            .json({ error: true, mensaje: "El email es requerido" });
    }

    if (!req.body.Contrasena) {
        return res
            .status(500)
            .json({ error: true, mensaje: "La contraseña es requerida" });
    }

    const ExisteEmail = await Usuario.findOne({
        where: { Email: req.body.Email },
    });

    if (ExisteEmail) {
        return res.status(400).json({
            error: true,
            mensaje: "El email ingresado ya posee una cuenta creada",
        });
    }

    const saltos = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.Contrasena, saltos);
    const role = req.body.ID_Rol ? req.body.ID_Rol : 2;
    const user = {...req.body, Contrasena: password, ID_Rol: role };

    Usuario.create(user)
        .then((result) => res.json(result))
        .catch((err) => {
            res.status(412).json({ error: err.message });
        });
};

//Retrieve all Users from the database.
exports.findAll = async(req, res) => {
    // Usuario.findAll()
    //     .then((result) => res.json(result))
    //     .catch((error) => {
    //         res.status(412).json({ error: error.message });
    //     });

    const users = await db.sequelize.query(
        "SELECT ID_Usuario, Nombre, Apellidos, Email, NombreRol FROM Usuarios inner join Rols ON Usuarios.ID_Rol = Rols.ID_Rol", {
            type: QueryTypes.SELECT,
        }
    );
    // console.log("=====>", users);
    res.json(users);
};

//Find a single User with an id
exports.findOne = async(req, res) => {
    // Usuario.findOne({ where: { ID_Usuario: req.params.id } })
    //     .then((result) => res.json(result))
    //     .catch((error) => {
    //         res.status(412).json({ error: error.message });
    //     });

    const user = await db.sequelize.query(
        "SELECT ID_Usuario, Nombre, Apellidos, Email, NombreRol FROM Usuarios inner join Rols ON Usuarios.ID_Rol = Rols.ID_Rol WHERE ID_Usuario = :ID_Usuario", {
            replacements: { ID_Usuario: `${req.params.id}` },
            type: QueryTypes.SELECT,
        }
    );

    res.json(user);
};

// Update a User by the id in the request
exports.update = (req, res) => {
    Usuario.update(req.body, { where: { ID_Usuario: req.params.id } })
        .then((result) => res.sendStatus(204))
        .catch((error) => {
            res.status(412).json({ error: error.message });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    Usuario.destroy({ where: { ID_Usuario: req.params.id } })
        .then((result) => res.sendStatus(204))
        .catch((error) => {
            res.status(412).json({ error: error.message });
        });
};

exports.deleteAll = (req, res) => {
    Usuario.destroy({ where: {}, truncate: false })
        .then((result) => res.sendStatus(204))
        .catch((err) => {
            res.status(412).json({ error: err.message });
        });
};