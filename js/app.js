App = Ember.Application.create();

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function () {
  this.resource('users', { path: '/' });
});

App.UsersRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('user');
  }
});