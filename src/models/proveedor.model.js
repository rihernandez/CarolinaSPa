module.exports = (sequelize, Sequelize) => {
    const Proveedor = sequelize.define('Proveedor', {

        id_Proveedor:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        proveedor:{
            type: Sequelize.STRING,
        }
    },
    {
        timestamps: false,
        freezeTableName: true                   //Avoid adding s to end of model;
    });

    return Proveedor;
}