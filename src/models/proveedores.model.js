module.exports = (sequelize, Sequelize) => {
    const Proveedor = sequelize.define('proveedores', {
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
        timestamps: false
    });

    Proveedor.associate = (models) => {
        Proveedor.hasMany(models.Inventario);
        Proveedor.hasMany(models.Productos);
    };

    return Proveedor;
}