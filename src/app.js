const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require("./models");
const cors = require('cors');
require('dotenv').config()


// const port = 5000;

// connect to database


db.sequelize.sync();


/*db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });*/

// configure middleware

/*var corsOptions = {
  origin: "http://localhost:8081"
};*/

app.use(cors());

app.set('port', process.env.PORT); 

console.log("TEST ", app.get('port'))
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());



// routes for the app
require("./routes/test.route")(app);
require("./routes/proveedor.route")(app);
require("./routes/categorias.route")(app);
require("./routes/inventario.route")(app);
require("./routes/producto.route")(app);
require("./routes/facturaservicio.route")(app);
require("./routes/servicios.route")(app);
require("./routes/facturaserviciodet.route")(app);
require("./routes/perfiles.route")(app);
require("./routes/citas.route")(app);
require("./routes/estadocita.route")(app);
require("./routes/clientes.route")(app);
require("./routes/estadofactura.route")(app);


// set the app to listen on the port
app.listen( app.get('port'), () => {
    console.log("Server running on port:" +  app.get('port'));
});
