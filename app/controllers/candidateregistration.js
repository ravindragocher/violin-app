export default Ember.ObjectController.extend({
  someProperty : '',
  actions : {
  canreg : function (){
        this.transitionToRoute('login');
    //  this.transitionToRoute('testpage');
  //  this.transitionToRoute('Check1');

}
  }

});
