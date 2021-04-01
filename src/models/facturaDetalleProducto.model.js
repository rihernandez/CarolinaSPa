module.exports = (sequelize, Sequelize) => {
    const facturaDetalle = sequelize.define(
        "facturaDetalle", {
            ID_FacturaDetalle: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },

            ID_Factura: {
                type: Sequelize.INTEGER(100),
                references: {
                    type: Sequelize.INT,
                    model: "Facturas",
                    key: "ID_Factura",
                },
            },

            CantidadProducto: {
                type: Sequelize.INTEGER(50),
                allowNull: false,
            },

            Precio: {
                type: Sequelize.FLOAT(50, 2),
                allowNull: false,
            },
            ITBIS: {
                type: Sequelize.FLOAT(50, 2),
                allowNull: false,
            },
            Total: {
                type: Sequelize.FLOAT(50, 2),
                allowNull: false,
            },
        }, {
            timestamps: false,
        }
    );

    // facturaDetalle.associate = (models) => {
    //     //   facturaDetalle.hasMany(models.Servicios);
    //     facturaDetalle.hasOne(models.Facturas);
    //     //   facturaDetalle.hasMany(models.Clientes);
    // };

    return facturaDetalle;
};