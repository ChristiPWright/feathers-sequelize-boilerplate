const app = require('../../src/app');

describe('\'Person.Person\' service', () => {
  it('registered the service', () => {
    const service = app.service('person-person');
    expect(service).toBeTruthy();
  });
});
