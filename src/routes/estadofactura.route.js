module.exports = app => {
    const estadofactura = require("../controllers/estadofactura.controller.js");
  
    var router = require("express").Router();
  
    //Create a new cita
    router.post("/", estadofactura.create);
  
    //Retrieve all citas
    router.get("/", estadofactura.findAll);
  
    //Retrieve a single cita by id
    router.get("/:id", estadofactura.findOne);
  
    //Update a cita with id
    router.put('/:id', estadofactura.update);
  
    //Delete a Cita by id
    router.delete("/:id", estadofactura.delete);
  
    //Delete all citas
    router.delete("/", estadofactura.deleteAll);
  
    app.use('/api/estadofactura', router);
  }