import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
    modules:this.store.findAll('content'),
    topics :this.store.findAll('contenttopic'),
    questions : this.store.findAll('contentquestions')
  });
}
});
