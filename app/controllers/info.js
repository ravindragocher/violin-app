import Ember from 'ember';

export default Ember.ObjectController.extend({

    getusername : function(){
       var q= [];
       this.get('model').forEach(function (item){
      q.push(item.get('username'));
      });
      return q;
    }.property('count'),

    getpassword : function(){
       var p= [];
       this.get('model').forEach(function (item){
      p.push(item.get('password'));
      });
      return p;
    }.property('count')



});
