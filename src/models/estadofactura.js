module.exports = (sequelize, Sequelize) => {
    
const EstadoFactura = sequelize.define('EstadoFactura',
{
    ID_EstadoFactura: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    Descripcion: {
        type: Sequelize.STRING(200),
    }
},
{
    timestamps: false
});

return EstadoFactura;
}