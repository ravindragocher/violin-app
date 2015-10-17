import Ember from 'ember';
export default Ember.Component.extend({
  isClickedforYes: false ,
  isClickedforNo : true,
  actions : {
    over: function(){
      //console.log("inside component.js");
      this.toggleProperty('isClickedforYes');

        //this.set('isClickedForExistingGroup', false);
      //this.sendAction('newgroup');
    },
    out:function(){
      this.toggleProperty('isClickedforYes');
    }

  }

});
