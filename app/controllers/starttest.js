import Ember from 'ember';
export default Ember.ArrayController.extend({
    // needs: "question",
    //question: Ember.computed.alias("controllers.question")

    count : 0,
    countChoice:0,
    qcount : 1,

    questionNumber: function(){
       return this.get('qcount');
   }.property('qcount'),

    questionText : function(){
      var q= [];
      this.get('model').forEach(function (item){
         console.log("at question");
         var qText = {};
         qText.question = item.get('question');
         qText.ans = item.get('answerChoice');

         q.push(qText);
     });
     return q[this.get('count')];
  }.property('count'),

   answerText : function(){
      return this.get('questionText').ans;
    }.property('questionText'),
     actions: {

       submit_answer : function (){
           this.incrementProperty('count');
           this.incrementProperty('qcount');
           if(this.get('count')==5)
           {
             this.transitionToRoute('result');
           }
          // this.sendAction('timer-comp.resetTimer');
         },
         Previous_back : function (){
           //this.transitionToRoute('testpage');
           this.decrementProperty('count');
           this.decrementProperty('qcount');
           if(this.get('qcount')==0)
           {
             this.transitionToRoute('testlaunch');
           }

         },
         skip_question : function (){
           //this.transitionToRoute('testpage');
           this.incrementProperty('count');
           this.incrementProperty('qcount');
           if(this.get('count')==5)
           {
             this.transitionToRoute('result');
           }

         },
         Terminate_Test: function (){
           this.transitionToRoute('terminate');
         }
     }
});
