module.exports = (sequelize, Sequelize) => {
    const Factura = sequelize.define('Factura', {
        ID_Factura: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        ID_Producto: {
            type: Sequelize.INTEGER,
            references: {
                type: Sequelize.INT,
                model: 'Productos',
                key: 'id_Producto'
            }
        },

        ID_Servicio: {
            type: Sequelize.INTEGER,
            references: {
                type: Sequelize.INT,
                model: 'servicios',
                key: 'id_servicio'
            }
        },

        ID_Usuario: {
            type: Sequelize.INTEGER,
            references: {
                type: Sequelize.INT,
                model: 'Usuarios',
                key: 'ID_Usuario'
            }
        },
        ID_Cliente: {
            type: Sequelize.INTEGER,
            references: {
                type: Sequelize.INT,
                model: 'Clientes',
                key: 'ID_Cliente'
            }

        },
        ID_EstadoFactura: {
            type: Sequelize.INTEGER,
            references: {
                type: Sequelize.INT,
                model: 'EstadoFacturas',
                key: 'ID_EstadoFactura'
            }

        },
        FechaFactura: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW')
        },
        FechaRegistro: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW')
        },
    }, {
        timestamps: false
    });

    return Factura;
}