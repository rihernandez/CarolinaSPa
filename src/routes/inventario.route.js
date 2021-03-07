module.exports = app => {
    const inventario = require("../controllers/inventario.controller");
  
    var router = require("express").Router();

    // Create a new Test
    router.post("/", inventario.create);
  
    // Retrieve all tests
    router.get("/", inventario.findAll);
  
    // Retrieve all published tests
    router.get("/published", inventario.findAllPublished);
  
    // Retrieve a single Test with id
    router.get("/:id", inventario.findOne);
  
    // Update a Test with id
    router.put("/:id", inventario.update);
  
    // Delete a Test with id
    router.delete("/:id", inventario.delete);
  
    // Delete all tests
    router.delete("/", inventario.deleteAll);
  
    app.use('/api/inventario', router);
  };