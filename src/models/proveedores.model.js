module.exports = (sequelize, Sequelize) => {
    const Proveedor = sequelize.define('proveedores', {
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
        Proveedor.belongsToMany(models.Inventario,{
            through: 'Proveedor_Inventario',
            as: 'proveedoresInventario',
            foreignKey: 'id_proveedor'
        });
        Proveedor.belongsToMany(models.Productos, {
            through: 'Proveedor_Productos',
            as: 'proveedoresProductos',
            foreignKey: 'id_proveedor'
        });
    };

    return Proveedor;
}