module.exports = app => {
    const categoria = require("../controllers/categorias.controller.js");
  
    var router = require("express").Router();

    // Create a new Test
    router.post("/", categoria.create);
  
    // Retrieve all tests
    router.get("/", categoria.findAll);
  
    // Retrieve a single Test with id
    router.get("/:id", categoria.findOne);
  
    // Update a Test with id
    router.put("/:id", categoria.update);
  
    // Delete a Test with id
    router.delete("/:id", categoria.delete);
  
    // Delete all tests
    router.delete("/", categoria.deleteAll);
  
    app.use('/api/categoria', router);
  };