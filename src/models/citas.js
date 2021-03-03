module.exports = (sequelize, Sequelize) => {
    const Citas = sequelize.define('Citas',
{
    ID_Cita: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },

    //FK Servicio pending
    ID_Servicio: {
        type: Sequelize.STRING(200),
        references:{
            model: PENDING,
            key: ''
        }
    },

    ID_EstadoCita: {
        type: Sequelize.INTEGER,
        references: {
            model:  EstadoCita,
            key: 'ID_EstadoCita'
        }
    },

    ID_Cliente: {
        type: Sequelize.INTEGER,
        references: {
            model:  Cliente,
            key: 'ID_Cliente'
        }
    }},
    {
        timestamps: false
    });

    return Citas;
}

