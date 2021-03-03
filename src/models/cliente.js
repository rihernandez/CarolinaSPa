module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define('Cliente', {
    ID_Cliente : {
        type: Sequelize.INTEGER,
        primaryKey: true
    },

    Nombre: {
        type: Sequelize.STRING(200),
    },

    Apellidos: {
        type: Sequelize.STRING(100),
    },

    Cedula: {
        type: Sequelize.STRING(13),
    },

    FechaNacimiento: {
        //DATEONLY = Date without time
        type: Sequelize.DATEONLY,
    },

    TelefonoCasa: {
        type: Sequelize.STRING(12),
    },

    Celular: {
        type: Sequelize.STRING(12),
    },
   
    Direccion: {
        type: Sequelize.STRING(5000),
    },

    Email: {
        type: Sequelize.STRING(200),
    },

    CantidadVisitas: {
        type: Sequelize.STRING(10),
    }},
    {
        timestamps: false
    });

    return Cliente;
}
