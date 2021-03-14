module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define('Usuario', {
        ID_Usuario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        ID_Rol: {
            type: Sequelize.INTEGER(100),
            references: {
                type: Sequelize.INT,
                model: 'Rol',
                key: 'ID_Rol'
            }
        },
        Nombre: {
            type: Sequelize.STRING(100),
        },
        Apellidos: {
            type: Sequelize.STRING(100),
        },
        Cedula: {
            type: Sequelize.STRING(100),
        },
        Contrasena: {
            type: Sequelize.STRING(100),
        },
        FechaNacimiento: {
            type: Sequelize.DATEONLY,
        },
        FechaIngreso: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW')
        },
        UltimoIngreso: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.fn('NOW')
        },
        Estado: {
            type: Sequelize.CHAR,
            defaultValue: 1
        }
    }, {
        timestamps: false
    });

    return Usuario;
}