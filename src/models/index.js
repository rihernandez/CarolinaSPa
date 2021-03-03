const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Please proceed to update this file with each models that you created.
//testing
db.test = require("./test.model.js")(sequelize, Sequelize);
db.estadofactura = require("./estadofactura")(sequelize, Sequelize);
db.citas = require("./citas")(sequelize, Sequelize);
db.estadocita = require("./estadocita")(sequelize, Sequelize);
db.cliente = require("./clientes")(sequelize, Sequelize);


module.exports = db;