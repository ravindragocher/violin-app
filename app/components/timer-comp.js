import Ember from 'ember';

const { computed } = Ember;

export default Ember.Component.extend({

  secondsElapsed : 1,
  maxTime : 10,
  resetT : null,
  restarted : false,

  timeLeft: computed('secondsElapsed', function() {
      return this.get('secondsElapsed');
  }),
  maxTimeReached : function (){
    if (this.get('timeLeft') == this.get('maxTime')) {
      return true;
    }
    else{
      return false;
    }
  },
  stopTimer : function (){
    if (this.maxTimeReached()){
      clearInterval(this.smallTimer);
    }
  },
  resetTimer : function (){
    if (this.maxTimeReached()){
      this.set('timeLeft', 0);
      this.set('restarted', true);
    }
  },
  forceReset : function (){
      this.set('timeLeft',0);
      this.set('restarted',true);
  }.observes('resetT'),

  smallTimer : {},
  didInsertElement : function() {
    var that = this;
    this.smallTimer = setInterval(function(){ that.incrementProperty('timeLeft');
                                              that.resetTimer();
                                              }, 1000,that);
  },

  actions : {
    resetTimer : function() {
      console.log("will reset the timer");
    }
  }

});
