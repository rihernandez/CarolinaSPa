module.exports = (sequelize, Sequelize) => {
    const Test2 = sequelize.define("test2", {
      // uuid: {
      //   type: Sequelize.INTEGER,
      //   primaryKey: true,
      //   auto_increment: true
      //   },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    },
    {
      timestamps: false
    });

    return Test2;
  };