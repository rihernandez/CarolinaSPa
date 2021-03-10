module.exports = (sequelize, Sequelize) => {
    const Citas = sequelize.define('Citas',
{
    ID_Cita: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },

    ID_Servicio: {
        type: Sequelize.INTEGER(100),
        references:{
            type: Sequelize.INT,
            model: 'servicios',
            key: 'id_servicio'
        }
    },

    ID_EstadoCita: {
        type: Sequelize.INTEGER,
        references: {
            type: Sequelize.INT,
            model:  'EstadoCita',
            key: 'ID_EstadoCita'
        }
    },

    ID_Cliente : {
        type: Sequelize.INTEGER,
        references: {
            type: Sequelize.INT,
            model:  'Clientes',
            key: 'ID_Cliente'
        }
    }},
    {
        timestamps: false
    });

    return Citas;
}

