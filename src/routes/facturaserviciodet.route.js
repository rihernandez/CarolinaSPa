module.exports = app => {
  const facturaserviciodet = require("../controllers/facturaserviciodet.controller.js");

  var router = require("express").Router();

  // Create a new Test
  router.post("/", facturaserviciodet.create);

  // Retrieve all tests
  router.get("/", facturaserviciodet.findAll);

  // Retrieve all published tests
  router.get("/published", facturaserviciodet.findAllPublished);

  // Retrieve a single Test with id
  router.get("/:id_facturaserviciodet", facturaserviciodet.findOne);

  // Update a Test with id
  router.put("/:id_facturaserviciodet", facturaserviciodet.update);

  // Delete a Test with id
  router.delete("/:id_facturaserviciodet", facturaserviciodet.delete);

  app.use('/api/facturaserviciodet', router);
};