import Ember from 'ember';
export default Ember.Route.extend({
/*  model: function () {
        return new Ember.RSVP.hash({
            question: this.store.find('question'),
            answer: this.store.find('feature'),

        });*/
   model: function() {
        return this.store.find('question');
      }
});
