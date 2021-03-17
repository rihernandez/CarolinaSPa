module.exports = app => {
  const perfiles = require("../controllers/perfiles.controller.js");

  var router = require("express").Router();

  // Create a new Test
  router.post("/", perfiles.create);

  // Retrieve all tests
  router.get("/", perfiles.findAll);

  // Retrieve all published tests
  router.get("/published", perfiles.findAllPublished);

  // Retrieve a single Test with id
  router.get("/:id_perfil", perfiles.findOne);

  // Update a Test with id
  router.put("/:id_perfil", perfiles.update);

  // Delete a Test with id
  router.delete("/:id_perfil", perfiles.delete);

  app.use('/api/perfiles', router);
};