import Ember from 'ember';
export default Ember.ObjectController.extend({
  actions : {
    usermanagement : function (){
      this.transitionToRoute('managementuser');
    },
    tokengenerator : function (){
      this.transitionToRoute('tokengenerate');
    },
    importfiles : function(){
      this.transitionToRoute('importfile');
    }
  }
});
