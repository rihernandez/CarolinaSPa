module.exports = app => {
    const auth = require("../controllers/auth.controller");


    var router = require("express").Router();

    //Create a new rol
    router.post("/login", auth.login);

    app.use('/api', router);
}