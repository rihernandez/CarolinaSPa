module.exports = app => {
    const estadocita = require("../controllers/estadocita.controller.js");
  
    var router = require("express").Router();
  
    //Create a new cita
    router.post("/", estadocita.create);
  
    //Retrieve all citas
    router.get("/", estadocita.findAll);
  
    //Retrieve a single cita by id
    router.get("/:id", estadocita.findOne);
  
    //Update a cita with id
    router.put('/:id', estadocita.update);

    //Delete a Cita by id
    router.delete("/:id", estadocita.delete);
  
    //Delete all citas
    router.delete("/", estadocita.deleteAll);
  
    app.use('/api/estadocita', router);
  }