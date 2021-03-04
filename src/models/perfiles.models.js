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
          allowNull: false
      },
      tipoperfil: {
        type: Sequelize.STRING(200),
        allowNull: false
      }
  },
  {
      timestamps: false
  });

  Perfiles.associate = (models) => {
      Perfiles.hasOne(models.Clientes);
      Perfiles.hasOne(models.Usuarios);
  };
};