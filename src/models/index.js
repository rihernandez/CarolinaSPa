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

/************************************************************************************************ */
//Please proceed to update this file with each models that you created.
//testing
//Importing
// db.test = require("./test.model.js")(sequelize, Sequelize);
// db.test1 = require("./test1.model.js")(sequelize, Sequelize);
// db.test2 = require("./test2.model.js")(sequelize, Sequelize);
// //Foreign keys
// db.test1.hasMany(db.test2, {foreignKey: 'fk_test1Id', sourceKey: 'uuid'});
// db.test2.belongsTo(db.test1, {foreignKey: 'fk_test1Id', targetKey: 'uuid'});

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

// db.perfiles.belongsTo(db.cliente, {foreignKey: 'id_cliente', targetKey: 'ID_Cliente'});
// db.cliente.hasMany(db.perfiles, {foreignKey: 'id_cliente', sourceKey: 'ID_Cliente'});


// db.inventario = require("./inventario.model.js")(sequelize, Sequelize);
// db.productos = require("./producto.model.js")(sequelize, Sequelize);
// db.proveedor = require("./proveedores.model.js")(sequelize, Sequelize);
// db.categorias = require("./categoria.model.js")(sequelize, Sequelize);
// db.estadofactura = require("./estadofactura")(sequelize, Sequelize);
// //db.citas = require("./citas")(sequelize, Sequelize);
// db.estadocita = require("./estadocita")(sequelize, Sequelize);
// db.cliente = require("./clientes")(sequelize, Sequelize);
// db.facturaservicio = require("./facturaservicio.model.js")(sequelize, Sequelize);
// db.facturaserviciodet = require("./facturaserviciodet.model.js")(sequelize, Sequelize);
// db.perfiles = require("./perfiles.models.js")(sequelize, Sequelize); 
// db.servicios = require("./servicios.models.js")(sequelize, Sequelize);

// //factura servicio foraignKeys
// db.facturaservicio.belongsToMany(db.servicios, { as: 'fk_facturaservicio', through: 'servicio_factura_servicio', foreignKey: 'id_facturaservicio', otherKey: 'id_servicio'});
// db.servicios.belongsToMany(db.facturaservicio, { as: 'fk_servicio', through: 'servicio_factura_servicio', foreignKey: 'id_servicio', otherKey: 'id_facturaservicio'});
// /*Missin usuario table!
// db.facturaservicio.belongsToMany(db.usuario, { as: 'fk_usuario', through: 'usuario_facturaservicio', foreignKey: 'id_facturaservicio', otherKey: 'id_usuario'});
// db.usuario.belongsToMany(db.facturaservicio, { as: 'fk_facturaservicio', through: 'usuario_facturaservicio', foreignKey: 'id_usuario', otherKey: 'id_facturaservicio'});*/
// db.facturaservicio.belongsTo(db.cliente, { foreignKey: "id_cliente", targetKey: "ID_Cliente"});
// db.cliente.hasMany(db.facturaservicio, { foreignKey: "id_cliente", sourceKey: "ID_Cliente"});
// db.facturaservicio.belongsTo(db.estadofactura, { foreignKey: 'id_estadofactura', targetKey: 'ID_EstadoFactura'});
// db.estadofactura.hasMany(db.facturaservicio, { foreignKey: 'id_estadofactura', sourceKey: 'ID_EstadoFactura'});
// db.facturaservicio.belongsTo(db.facturaserviciodet, {foreignKey: 'id_facturaservicio', targetKey: 'id_facturaservicio'});
// db.facturaserviciodet.hasOne(db.facturaservicio, {foreignKey: 'id_facturaservicio', targetKey: 'id_facturaservicio'});


//perfiles foreignKeys

/*Missing usuario table!
db.perfiles.belongsTo(db.usuario, {foreignKey: 'fk_usuario', targetKey: 'id_usuario'});
db.usuario.hasMany(db.perfiles, {foreignKey: 'fk_usuario', sourceKey: 'id_usuario'});*/

/*servicios foraignKeys missing citas table!
db.servicios.belongsToMany(db.citas, { as: 'fk_citas', through: 'servicios_citas', foreignKey: 'id_servicio', otherKey: 'id_cita'});
db.citas.belongsToMany(db.servicios, { as: 'fk_servicio', through: 'servicios_citas', foreignKey: 'id_citas', otherKey: 'id_servicio'});*/

//Here an example how to add relationship between test1 to test2 (one to many) //where Multiples test2 can have same test1 id
// db.test1.hasMany(db.test2, {foreignKey: 'fk_test1Id', sourceKey: 'uuid'});
// db.test2.belongsTo(db.test1, {foreignKey: 'fk_test1Id', targetKey: 'uuid'});


// db.proveedor.hasMany(db.inventario, {foreignKey: 'id_proveedor', sourceKey: 'id_Proveedor'});
// db.inventario.belongsTo(db.proveedor, {foreignKey: 'id_proveedor', targetKey: 'id_Proveedor'});
// db.proveedor.hasMany(db.productos, {foreignKey: 'id_proveedor', sourceKey: 'id_Proveedor'});
// db.productos.belongsTo(db.proveedor, {foreignKey: 'id_proveedor', targetKey: 'id_Proveedor'});
// db.categorias.hasMany(db.productos, {foreignKey: 'id_categoria', sourceKey: 'id_Categoria'});
// db.productos.belongsTo(db.categorias, {foreignKey: 'id_categoria', targetKey: 'id_Categoria'});
// db.productos.hasMany(db.inventario, {foreignKey: 'id_producto', sourceKey: 'id_Producto'});
// db.inventario.belongsTo(db.productos, {foreignKey: 'id_producto', targetKey: 'id_Producto'});
//db.inventario.hasMany(db.productos, {foreignKey: 'id_inventario', sourceKey: 'id_Inventario'});
//db.productos.belongsTo(db.inventario, {foreignKey: 'id_inventario', targetKey: 'id_Inventario'});

/************************************************************************************************ */
//Jefrey





/************************************************************************************************ */
//Adrian





/************************************************************************************************ */
//Michael




/************************************************************************************************ */
//Daviel







module.exports = db;