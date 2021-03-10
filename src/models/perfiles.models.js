module.exports = (sequelize, Sequelize) => {

    const Perfiles = sequelize.define('perfiles', {
        id_perfil: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement : true,
        allowNull: false
    },
    id_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_cliente: {
        type: Sequelize.INTEGER,
        references: {
            type: Sequelize.INT,
            model: 'Clientes',
            key: 'ID_Cliente'
        },
        allowNull: false
    },
    tipoPerfil: {
        type: Sequelize.STRING(200),
        allowNull: false
    }
    },
    {
        timestamps: false
    });
    return Perfiles;
};