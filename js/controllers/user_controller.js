App.UserController = Ember.ObjectController.extend({
  actions: {
    editUserFirstName: function () {
      this.set('isEditingFirstName', true);
    },
    editUserLastName: function () {
      this.set('isEditingLastName', true);
    },
    editUserEmail: function () {
      this.set('isEditingEmail', true);
    },
    acceptChanges: function () {
      this.set('isEditingFirstName', false);
      this.set('isEditingLastName', false);
      this.set('isEditingEmail', false);
      this.get('model').save();
    }
   },
  isEditingFirstName: false,
  isEditingLastName: false,
  isEditingEmail: false,
});