module.exports = app => {
    const citas = require("../controllers/citas.controller.js");

    var router = require("express").Router();

    //Create a new cita
    router.post("/", citas.create);

    //Retrieve all citas
    router.get("/", citas.findAll);

    //Retrieve a single cita by id
    router.get("/:id", citas.findOne);

    //Update a cita with id
    router.put('/:id', citas.update);

    //Delete a Cita by id
    router.delete("/:id", citas.delete);

    //Delete all citas
    router.delete("/", citas.deleteAll);
  
    app.use('/api/citas', router);
}