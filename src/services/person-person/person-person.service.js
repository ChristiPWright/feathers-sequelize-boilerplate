// Initializes the `Person.PErson` service on path `/person-person`
const { PersonPerson } = require('./person-person.class');
const createModel = require('../../models/person-person.model');
const hooks = require('./person-person.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/person-person', new PersonPerson(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('person-person');

  service.hooks(hooks);
};
