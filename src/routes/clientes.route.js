module.exports = app => {
  const clientes = require("../controllers/clientes.controller.js");

  var router = require("express").Router();

  //Create a new cita
  router.post("/", clientes.create);

  //Retrieve all citas
  router.get("/", clientes.findAll);

  //Retrieve a single cita by id
  router.get("/:id", clientes.findOne);

  //Update a cita with id
  router.put('/:id', clientes.update);

  // Retrieve all published tests
  router.get("/published", clientes.findAllPublished);

  //Delete a Cita by id
  router.delete("/:id", clientes.delete);

  //Delete all citas
  router.delete("/", clientes.deleteAll);

  app.use('/api/clientes', router);
}