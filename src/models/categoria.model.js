module.exports = (sequelize, Sequelize) => {

    const Categorias = sequelize.define('Categorias', {
        id_Categoria: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement : true,
            allowNull: false
        },
        categoria: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    });

    return Categorias;
}