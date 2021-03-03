module.exports = (sequelize, Sequelize) => {
    const Proveedor = sequelize.define('proveedor', {
        id:{
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
        timestamps: false
    });

    Proveedor.associate = (models) => {
        Proveedor.belongsTo(models.Inventario);
        Proveedor.belongsTo(models.Productos)
    };

    return Proveedor;
}