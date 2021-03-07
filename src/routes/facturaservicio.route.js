module.exports = app => {
  const facturaservicio = require("../controllers/facturaservicio.controller.js");

  var router = require("express").Router();

  // Create a new Test
  router.post("/", facturaservicio.create);

  // Retrieve all tests
  router.get("/", facturaservicio.findAll);

  // Retrieve all published tests
  router.get("/published", facturaservicio.findAllPublished);

  // Retrieve a single Test with id
  router.get("/:id_facturaservicio", facturaservicio.findOne);

  // Update a Test with id
  router.put("/:id_facturaservicio", facturaservicio.update);

  // Delete a Test with id
  router.delete("/:id_facturaservicio", facturaservicio.delete);

  app.use('/api/facturaservicio', router);
};