import Ember from 'ember';
export default Ember.Component.extend({
  isClicked: false ,
  modulenameempty:false,

  actions : {
    addmodule: function(){

   var newmodulename = this.get('newmodule');

      if(newmodulename=="" || newmodulename== undefined || newmodulename== " ")
      {
        this.set("modulenameempty", true);
      }
      else {
          this.set("modulenameempty", false);
          this.sendAction('action',newmodulename);
     }


   },
   deletemodule:function(){
     var newmodulename = this.get('newmodule');
      var completed = this.get('model.content').filterBy('module', newmodulename);
      console.log(completed);
        completed.invoke('deleteRecord');
        //console.log(completed);
        completed.invoke('save');
   }
  }

});
