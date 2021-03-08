module.exports = (sequelize, Sequelize) => {
    const Test1 = sequelize.define("test1", {
    //  uuid: {
    //     type: Sequelize.INTEGER,
    //     primaryKey: true,
    //     auto_increment: true
    //     },
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
    
    return Test1;
  };