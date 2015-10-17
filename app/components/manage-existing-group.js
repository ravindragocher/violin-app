import Ember from 'ember';
export default Ember.Component.extend({
  isClicked: false ,


  actions : {
    onSelect: function(){
      //console.log("inside component.js");

      this.set('isClicked', true);
      alert("you have clicked radiobutton");
        //this.set('isClickedForExistingGroup', false);
      //this.sendAction('newgroup');
    }
  }

});
