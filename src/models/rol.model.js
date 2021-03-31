module.exports = (sequelize, Sequelize) => {
    const Rol = sequelize.define('Rol', {
        ID_Rol: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        NombreRol: {
            type: Sequelize.STRING(100),
        },
        DescripcionRol: {
            type: Sequelize.STRING(200),
        }
    }, {
        timestamps: false
    });

    return Rol;
}