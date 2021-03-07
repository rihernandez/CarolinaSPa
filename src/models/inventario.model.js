module.exports = (sequelize, Sequelize) => {
    const Inventario = sequelize.define('inventario', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_proveedor: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        id_producto: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        cantidad:{
            type: Sequelize.INTEGER(50),
            allowNull: false
        },
        fechaVencimiento: {
            type: Sequelize.DATE
        },
        cantidadMinima: {
            type: Sequelize.INTEGER(50),
            allowNull: false
        },
        fechaEntrada: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW')
        }
    },
    {
        timestamps: false
    });
    
    Inventario.associate = (models) => {

        Inventario.belongsToMany(models.Produtos, {
            through: 'Inventario_Producto',
            as: 'inventarioProducto',
            foreignKey: 'id_inventario'
        });

        Inventario.hasMany(models.Proveedor);
        Inventario.hasMany(models.Produtos);
        Inventario.belongsTo(models.Produtos);

    };

    return Inventario;

}