module.exports = app => {
    const usuario = require("../controllers/usuario.controller");


    var router = require("express").Router();

    //Create a new rol
    router.post("/", usuario.create);

    //Retrieve all roles
    router.get("/", usuario.findAll);

    //Retrieve a single rol by id
    router.get("/:id", usuario.findOne);

    //Update a rol with id
    router.put('/:id', usuario.update);

    //Delete a rol by id
    router.delete("/:id", usuario.delete);

    //Delete all roles
    router.delete("/", usuario.deleteAll);



    app.use('/api/usuario', router);




}