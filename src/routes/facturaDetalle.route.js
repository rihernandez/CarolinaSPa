module.exports = app => {
    const facturaDetalle = require("../controllers/facturaDetalle.controller");

    var router = require("express").Router();

    //Create a new facturaDetalle
    router.post("/", facturaDetalle.create);

    //Retrieve all facturaDetalle
    router.get("/", facturaDetalle.findAll);

    //Retrieve a facturaDetalle cita by id
    router.get("/:id", facturaDetalle.findOne);

    //Update a facturaDetalle with id
    router.put('/:id', facturaDetalle.update);

    //Delete a facturaDetalle by id
    router.delete("/:id", facturaDetalle.delete);

    //Delete all facturadetalle
    router.delete("/", facturaDetalle.deleteAll);

    app.use('/api/facturadetalle', router);
}