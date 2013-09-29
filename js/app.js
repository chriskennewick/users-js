App = Ember.Application.create();

App.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'users-emberjs'
});

App.Router.map(function () {
  this.resource('users', { path: '/' });
});

App.UsersRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('user');
  }
});
