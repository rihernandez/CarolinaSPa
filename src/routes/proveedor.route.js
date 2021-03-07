module.exports = app => {
    const proveedor = require("../controllers/proveedor.controller");
  
    var router = require("express").Router();

    // Create a new Test
    router.post("/", proveedor.create);
  
    // Retrieve all tests
    router.get("/", proveedor.findAll);
  
    // Retrieve all published tests
    router.get("/published", proveedor.findAllPublished);
  
    // Retrieve a single Test with id
    router.get("/:id", proveedor.findOne);
  
    // Update a Test with id
    router.put("/:id", proveedor.update);
  
    // Delete a Test with id
    router.delete("/:id", proveedor.delete);
  
    // Delete all tests
    router.delete("/", proveedor.deleteAll);
  
    app.use('/api/proveedor', router);
  };