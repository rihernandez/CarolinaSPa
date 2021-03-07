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
db.test1 = require("./test1.model.js")(sequelize, Sequelize);
db.test2 = require("./test2.model.js")(sequelize, Sequelize);

db.inventario = require("./inventario.model.js")(sequelize, Sequelize);
db.productos = require("./producto.model.js")(sequelize, Sequelize);
db.proveedor = require("./proveedores.model.js")(sequelize, Sequelize);
db.categorias = require("./categoria.model.js")(sequelize, Sequelize);
db.estadofactura = require("./estadofactura")(sequelize, Sequelize);
//db.citas = require("./citas")(sequelize, Sequelize);
db.estadocita = require("./estadocita")(sequelize, Sequelize);
db.cliente = require("./clientes")(sequelize, Sequelize);
db.facturaservicio = require("./facturaservicio.model.js")(sequelize, Sequelize);
db.facturaserviciodet = require("./facturaserviciodet.model.js")(sequelize, Sequelize);
db.perfiles = require("./perfiles.models.js")(sequelize, Sequelize); 
db.servicios = require("./servicios.models.js")(sequelize, Sequelize);

//Here an example how to add relationship between test1 to test2 (one to many) //where Multiples test2 can have same test1 id
db.test1.hasMany(db.test2, {foreignKey: 'fk_test1Id', sourceKey: 'uuid'});
db.test2.belongsTo(db.test1, {foreignKey: 'fk_test1Id', targetKey: 'uuid'});

/*

//Here an example how to implement relationship between tes1 to test2 (one to one) // whee Test2 can have just one and unique test1
db.test1.belongsTo(db.test2, {foreignKey: 'fk_test1Id', targetKey: 'uuid'});
db.test2.hasOne(db.test1, {foreignKey: 'fk_test1Id', targetKey: 'uuid'});

//Here an exmple how to implement relationship between test1 to test2 (many to many ) //Where test2 can have multiples test1 and viceversa
db.test1.belongsToMany(db.test2, { as: 'Workers', through: 'worker_tasks', foreignKey: 'test1Id', otherKey: 'test2Id'});
db.test2.belongsToMany(db.test1, { as: 'Tasks', through: 'worker_tasks', foreignKey: 'test2Id', otherKey: 'test1Id'});

Guys if you need futher info about this topic here : https://grokonez.com/node-js/sequelize-one-to-one-association-nodejs-express-mysql
Richard HC

*/
module.exports = db;