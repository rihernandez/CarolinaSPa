module.exports = app => {
    const producto = require("../controllers/productos.controller");
  
    var router = require("express").Router();

    // Create a new Test
    router.post("/", producto.create);
  
    // Retrieve all tests
    router.get("/", producto.findAll);
  
    // Retrieve all published tests
    router.get("/published", producto.findAllPublished);
  
    // Retrieve a single Test with id
    router.get("/:id", producto.findOne);
  
    // Update a Test with id
    router.put("/:id", producto.update);
  
    // Delete a Test with id
    router.delete("/:id", producto.delete);
  
    // Delete all tests
    router.delete("/", producto.deleteAll);
  
    app.use('/api/producto', router);
  };