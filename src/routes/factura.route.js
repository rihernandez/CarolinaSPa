module.exports = app => {
    const factura = require("../controllers/factura.controller");

    var router = require("express").Router();

    //Create a new Factura
    router.post("/", factura.create);

    //Retrieve all Factura
    router.get("/", factura.findAll);

    //Retrieve a single Factura by id
    router.get("/:id", factura.findOne);

    //Update a Factura with id
    router.put('/:id', factura.update);

    //Delete a Factura by id
    router.delete("/:id", factura.delete);

    //Delete all Facturas
    router.delete("/", factura.deleteAll);

    app.use('/api/factura', router);
}