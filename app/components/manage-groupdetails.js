import Ember from 'ember';
export default Ember.Component.extend({
  isClickedForNewGroup: false ,
  isClickedForExistingGroup : false ,
  

  actions : {
    newgroup: function(){
      //console.log("inside component.js");

      this.toggleProperty('isClickedForNewGroup');
        this.set('isClickedForExistingGroup', false);
      //this.sendAction('newgroup');
    },
    existinggroup: function(){
      //console.log("inside component.js");
      //this.sendAction('existinggroup');
      this.toggleProperty('isClickedForExistingGroup');
      this.set('isClickedForNewGroup', false);
    //this.toggleProperty('isClickedForExistingGroup');
    }
  }

});
