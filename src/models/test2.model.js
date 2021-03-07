module.exports = (sequelize, Sequelize) => {
    const Test2 = sequelize.define("test2", {
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