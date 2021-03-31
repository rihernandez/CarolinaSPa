module.exports = app => {
    const rol = require("../controllers/rol.controller");

    var router = require("express").Router();

    //Create a new rol
    router.post("/", rol.create);

    //Retrieve all roles
    router.get("/", rol.findAll);

    //Retrieve a single rol by id
    router.get("/:id", rol.findOne);

    //Update a rol with id
    router.put('/:id', rol.update);

    //Delete a rol by id
    router.delete("/:id", rol.delete);

    //Delete all roles
    router.delete("/", rol.deleteAll);

    app.use('/api/rol', router);
}