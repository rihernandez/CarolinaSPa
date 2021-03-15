module.exports = (sequelize, Sequelize) => {
    const Inventario = sequelize.define('Inventario', {
        id_Inventario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_proveedor: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                type: Sequelize.INT,
                model: 'Proveedor', 
                key: 'id_Proveedor'
            }
        },
        id_producto: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references:{
                type: Sequelize.INT,
                model: 'Productos',
                key: 'id_Producto'
            }
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

    return Inventario;
}