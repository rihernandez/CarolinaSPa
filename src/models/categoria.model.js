module.exports = (sequelize, Sequelize) => {

    const Categorias = sequelize.define('categorias', {
        id: {
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

    Categorias.associate = (models) => {
        Categorias.belongsTo(models.Productos);
    };
}