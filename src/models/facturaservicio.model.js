module.exports = (sequelize, Sequelize) => {

  const FacturaServicio = sequelize.define('facturaservicio', {
      id_facturaservicio: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement : true,
          allowNull: false
      },
      id_servicio: {
          type: Sequelize.INTEGER,
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
      id_estadofactura: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fechafactura: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      fecharegistro: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
  },
  {
      timestamps: false
  });

  FacturaServicio.associate = (models) => {
      FacturaServicio.hasMany(models.Servicios);
      FacturaServicio.hasOne(models.Clientes);
      FacturaServicio.hasOne(models.Usuarios);
      FacturaServicio.hasOne(models.EstadoFactura);
      FacturaServicio.hasOne(models.FacturaServicioDet);
  };
};