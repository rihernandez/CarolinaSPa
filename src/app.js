const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require("./models");
const cors = require('cors');



const port = 8990;

// connect to database

 db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

// configure middleware

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.set('port', process.env.port || port); 
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
app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
