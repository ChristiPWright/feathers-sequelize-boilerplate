// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const personPerson = sequelizeClient.define('person_person', {
  
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  
  
    auth0Id: { type: DataTypes.STRING },
  
    googleId: { type: DataTypes.STRING },
  
    facebookId: { type: DataTypes.STRING },
  
    twitterId: { type: DataTypes.STRING },
  
    githubId: { type: DataTypes.STRING },
  
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  personPerson.associate = function (models) {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return personPerson;
};
