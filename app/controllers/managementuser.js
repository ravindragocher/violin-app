import Ember from 'ember';
export default Ember.ObjectController.extend({
  isClickedForNewUser: false ,
  isClickedForExistingUser : false ,

  isClickedForNewGroup: false ,
  isClickedForExistingGroup : false ,
  isClickedForGroupDetails : false ,

  actions : {
    usermanagement : function (){
      this.transitionToRoute('managementuser');
    },
    tokengenerator : function (){
      this.transitionToRoute('tokengenerate');
    },
    importfiles : function(){
      this.transitionToRoute('importfile');
    },
    newuser: function(){
      this.toggleProperty('isClickedForNewUser');
      this.set('isClickedForExistingUser',false);
      this.set('isClickedForGroupDetails',false);
    },
    existinguser: function(){
      this.toggleProperty('isClickedForExistingUser');
      this.set('isClickedForNewUser',false);
      this.set('isClickedForGroupDetails',false);
    },
    groupdetalis: function(){
      this.toggleProperty('isClickedForGroupDetails');
      this.set('isClickedForExistingUser',false);
      this.set('isClickedForNewUser',false);
  },

}
});
