const personPerson = require('./person-person/person-person.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(personPerson);
};
