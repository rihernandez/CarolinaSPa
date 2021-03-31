const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('./models');
const cors = require('cors');
const unless = require('express-unless');

const auth = require('./controllers/auth.controller');

require('dotenv').config();

// db.sequelize.sync({ force: false }).then(() => {
//     console.log("Drop and re-sync db.");
// });

// configure middleware

// var corsOptions = {
//     origin: "http://localhost:8081"
// };

db.sequelize.sync();

/*db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });*/

//const auth = require("./controllers/auth.controller");

//require('dotenv').config()

 //db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });


// configure middleware

var corsOptions = {
  origin: "http://localhost:3000",
  credentials:true,   
};

app.set('port', process.env.PORT || 8990);

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());


//app.use(auth.verifyToken);

// routes for the app
require('./routes/test.route')(app);
require('./routes/proveedor.route')(app);
require('./routes/categorias.route')(app);
require('./routes/inventario.route')(app);
require('./routes/producto.route')(app);
require('./routes/facturaservicio.route')(app);
require('./routes/servicios.route')(app);
require('./routes/facturaserviciodet.route')(app);
require('./routes/perfiles.route')(app);
require('./routes/citas.route')(app);
require('./routes/estadocita.route')(app);
require('./routes/clientes.route')(app);
require('./routes/estadofactura.route')(app);
require('./routes/factura.route')(app);
require('./routes/facturaDetalle.route')(app);
require('./routes/rol.route')(app);
require('./routes/usuario.route')(app);
require('./routes/auth.route')(app);

//app.use(auth.verifyToken)
app.use(cors(corsOptions));


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
require("./routes/factura.route")(app);
require("./routes/facturaDetalle.route")(app);
require("./routes/rol.route")(app);
require("./routes/usuario.route")(app);
require("./routes/auth.route")(app);


app.listen(app.get('port'), () => {
	console.log(`Server running on port:`, app.get('port'));
});
