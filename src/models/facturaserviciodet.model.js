module.exports = (sequelize, Sequelize) => {
    const FacturaServicioDet = sequelize.define('facturaserviciodet', {
        id_facturaserviciodet: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_facturaservicio: {
            type: Sequelize.INTEGER,
            references: {
                type: Sequelize.INT,
                model: 'facturaservicios',
                key: 'id_facturaservicio'
            },
            allowNull: false
        },
        cantidadServicio:{
            type: Sequelize.INTEGER(40),
            allowNull: false
        },
        fechaVencimiento: {
            type: Sequelize.DATE
        },
        cantidadMinima: {
            type: Sequelize.INTEGER(40),
            allowNull: false
        },
        fechaEntrada: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    },
    {
        timestamps: false
    });
    
    FacturaServicioDet.associate = (models) => {
    FacturaServicioDet.belongsTo(models.FacturaServicio);
    };

    return FacturaServicioDet;
}