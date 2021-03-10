const db = require("../models");
const EstadoFactura = db.estadofactura;
const Op = db.Sequelize.Op;

//Create and save a new cita
exports.create = (req, res) => {
  EstadoFactura.create(req.body)
       .then(result => res.json(result))
       .catch(err =>{
         res.status(412).json({error: err.message})
       });
};

//Retrieve all citas from the database.
exports.findAll = (req, res) => {
  EstadoFactura.findAll()
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({error: error.message });
        });
};

//Find a single cita with an id
exports.findOne = (req, res) => {
  EstadoFactura.findOne({ where: { ID_EstadoFactura: req.params.id } })
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({error: error.message});
        });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  EstadoFactura.update(req.body, { where: {ID_EstadoFactura: req.params.id}})
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({error: error.message});
        });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  EstadoFactura.destroy({ where: {ID_EstadoFactura: req.params.id}})
        .then(result => res.sendStatus(204))
        .catch(error => {
            res.status(412).json({error: error.message});
        });
};


//Delete all citas from the database.
exports.deleteAll = (req, res) => {
  EstadoFactura.destroy({ where: {}, truncate: false })
      .then(result => res.sendStatus(204))
      .catch(err => {
          res.status(412).json({error: err.message});
      });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  EstadoFactura.findAll({ where: { published: true } })
        .then(result => res.json(result))
        .catch(err => {
            res.status(412).json({error: err.message});
        });
};