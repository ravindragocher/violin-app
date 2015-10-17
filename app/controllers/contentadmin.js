import Ember from 'ember';

export default Ember.ObjectController.extend({
  isClickedForModule: false ,
  isClickedForTopic : false ,
  isClickedForQuestion:false,
  isMcma:false,
  answerSave:function(newansname,q_id,preans){
    preans.pushObject(newansname);
    this.store.findRecord('contentquestions', q_id).then(function(item){
            item.set('answerChoice', preans);
            item.save();
        });
    },
    actions : {
        addmodule: function(newmodulename){
            var newModule =  this.store.createRecord('content',{
                module:newmodulename,
            });
            newModule.save();
        },
    addquestion: function(newquestionname,quesDiff,quesPos,type,num,timeQues){
        var answersForNewQues=[];
        var newQuestion =  this.store.createRecord('contentquestions',{
            question:newquestionname,
            difficulty:quesDiff,
            position:quesPos,
            questiontype:type,
            srnum:num,
            timer:timeQues,
            answerChoice:answersForNewQues,
        });
        newQuestion.save();
    },

    addanswer:function(newansname,q_id,preans){
        this.answerSave(newansname,q_id,preans);
    },

    selectmodule:function(){
        var e = document.getElementById("modselect");
        var strUser = e.options[e.selectedIndex].text;

    },


    addtopic: function(newtopicname){
        var newTopic =  this.store.createRecord('contenttopic',{
            topic:newtopicname,
        });
     newTopic.save();
    },
    clickonmodule: function(){
        this.toggleProperty('isClickedForModule');
        this.set('isClickedForTopic',false);
        this.set('isClickedForQuestion',false);
    },
    clickontopic: function(){
        this.toggleProperty('isClickedForTopic');
        this.set('isClickedForModule',false);
        this.set('isClickedForQuestion',false);
    },
    clickonQuestion: function(){
        this.toggleProperty('isClickedForQuestion');
        this.set('isClickedForModule',false);
        this.set('isClickedForTopic',false);
    },

}
});
