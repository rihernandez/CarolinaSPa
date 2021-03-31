const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const unless = require("express-unless");
const Rol = db.rol;
const Usuario = db.usuario;
const Op = db.Sequelize.Op;

exports.login = async(req, res) => {
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

    const user = await Usuario.findOne({ where: { Email: req.body.Email } });
    if (!user) {
        return res
            .status(400)
            .json({ error: true, mensaje: "Usuario no encontrado" });
    }

    const passValida = await bcrypt.compare(req.body.Contrasena, user.Contrasena);
    if (!passValida) {
        return res
            .status(400)
            .json({ error: true, mensaje: "Contraseña incorrecta" });
    }

    // Buscar rol

    const rol = await Rol.findOne({
        where: { ID_Rol: user.ID_Rol },
    });

    //Crear TOKEN:
    const token = jwt.sign({
            name: user.Nombre,
            lastname: user.Apellidos,
            id: user.ID,
            rol: rol,
        },
        "123Secret", {
            expiresIn: 60 * 60 * 48,
        }
    );

    res.header("auth-token", token).json({
        error: null,
        token,
    });
};

exports.verifyToken = (req, res, next) => {
    const url = req.originalUrl;

    if (
        url === "/api/login" ||
        (url === "/api/usuario" && req.method === "POST")
    ) {
        return next();
    } else {
        const token = req.header("auth-token");
        if (!token) return res.status(401).json({ error: "Acceso denegado" });
        try {
            const verified = jwt.verify(token, "123Secret");
            req.user = verified;
            next(); //continuar
        } catch (error) {
            res.status(400).json({ error: "El token es invalido" });
        }
    }
};