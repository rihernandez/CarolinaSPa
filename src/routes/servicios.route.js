module.exports = app => {
  const servicios = require("../controllers/servicios.controller.js");

  var router = require("express").Router();

  // Create a new Test
  router.post("/", servicios.create);

  // Retrieve all tests
  router.get("/", servicios.findAll);

  // Retrieve all published tests
  router.get("/published", servicios.findAllPublished);

  // Retrieve a single Test with id
  router.get("/:id_servicio", servicios.findOne);

  // Update a Test with id
  router.put("/:id_servicio", servicios.update);

  // Delete a Test with id
  router.delete("/:id_servicio", servicios.delete);

  app.use('/api/servicios', router);
};