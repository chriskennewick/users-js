App.UsersController = Ember.ArrayController.extend({
  remaining: function () {
    return 4;
  }.property('@each'),

  inflection: function () {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'user' : 'users';
  }.property('remaining')
})