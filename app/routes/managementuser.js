import Ember from 'ember';
export default Ember.Route.extend({
    model() {
      return Ember.RSVP.hash({
      newuser :this.store.findAll('manage-newuser'),
      existinguser : this.store.findAll('manage-existinguser')
    });
  }
});
