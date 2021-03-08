module.exports = (sequelize, Sequelize) => {

  const Servicios = sequelize.define('servicios', {
      id_servicio: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement : true,
          allowNull: false
      },
      servicio: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      descripcion: {
        type: Sequelize.STRING(200),
        allowNull: false
      },
      precio: {
        type: Sequelize.FLOAT,
        allowNull: false
      }
  },
  {
      timestamps: false
  });

  Servicios.associate = (models) => {
      Servicios.hasMany(models.FacturaServicio);
      Servicios.hasOne(models.FacturaServicio);
      Servicios.hasMany(models.Citas);
      Servicios.hasOne(models.Citas);
  };

  return Servicios;
};