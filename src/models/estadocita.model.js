module.exports = (sequelize, Sequelize) => {
    const EstadoCita = sequelize.define('EstadoCita',
    {
        ID_EstadoCita: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        Descripcion: {
            type: Sequelize.STRING(200),
        }
    },
    {
        timestamps: false
    });

    return EstadoCita;
}
