import Ember from 'ember';
export default Ember.Component.extend({
    quesEmpty:false,
    typeEmpty:false,
    isMcsa:false,
    isFree:false,
    isMcma:false,
    preQues:true,
    isNewquestion:false,
    ansmanager:false,
    timeChecked:false,
    newQuesRef:false,
    selectedQuestionId: 1,
    selectedQuestionText:1,
    selectedQuestionFull:1,
    qId:1,

    answerChoices:function(){
        var ansChoices;
        var q_Id = this.get('selectedQuestionId');
        this.get('question').forEach(function (item){
             if (item.id === q_Id){
                ansChoices = item.get('answerChoice');
                }
             });
        return ansChoices;

      }.property('selectedQuestionId'),

     qText:function(){
        var qText;
        var qType;
        var q_Id = this.get('selectedQuestionId');
        this.get('question').forEach(function (item){
            if (item.id === q_Id){
                qText = item.get('question');
                qType= item.get('questiontype');
                }
            });
        return qText;

      }.property('selectedQuestionId'),


      qDiff:function(){
         var qDiff;
         var q_Id = this.get('selectedQuestionId');
         this.get('question').forEach(function (item){
             if (item.id === q_Id){
                 qDiff = item.get('difficulty');
             }
         });
         return qDiff;

       }.property('selectedQuestionId'),


       qPos:function(){
          var qPos;
          var q_Id = this.get('selectedQuestionId');
          this.get('question').forEach(function (item){
              if (item.id === q_Id){
                  qPos = item.get('position');
                  }
              });
          return qPos;

        }.property('selectedQuestionId'),

        qTimer:function(){
           var qTimer;
           var q_Id = this.get('selectedQuestionId');
           this.get('question').forEach(function (item){
               if (item.id === q_Id){
                   qTimer = item.get('timer');
                   }
               });
           return qTimer;

         }.property('selectedQuestionId'),


        qFull:function(){
          var qFull;
          var q_Id = this.get('selectedQuestionId');
          this.get('question').forEach(function (item){
              if (item.id === q_Id){
                   qFull = item.get('fullscreen');
                   }
              });
           return qFull;

         }.property('selectedQuestionId'),


          qInline:function(){
            var qInline;
            var q_Id = this.get('selectedQuestionId');
            this.get('question').forEach(function (item){
                if (item.id === q_Id){
                     qInline = item.get('inline');
                     }
                });
             return qInline;

           }.property('selectedQuestionId'),

           qAutonxt:function(){
             var qAutonxt;
             var q_Id = this.get('selectedQuestionId');
             this.get('question').forEach(function (item){
                 if (item.id === q_Id){
                      qAutonxt = item.get('autonxt');
                      }
                 });
              return qAutonxt;

            }.property('selectedQuestionId'),

            qEnabled:function(){
              var qEnabled;
              var q_Id = this.get('selectedQuestionId');
              this.get('question').forEach(function (item){
                  if (item.id === q_Id){
                       qEnabled = item.get('enabled');
                       }
                  });
               return qEnabled;

             }.property('selectedQuestionId'),


             qSrnum:function(){
               var qSrnum;
               var q_Id = this.get('selectedQuestionId');
               this.get('question').forEach(function (item){
                   if (item.id === q_Id){
                        qSrnum = item.get('srnum');
                        }
                   });
                return qSrnum;

              }.property('selectedQuestionId'),



              qtxt:function(){
                var qt;

                var qt = this.get('refText');
                 return qt;

               }.property('refText'),







           qID:function(){
             var q_Id = this.get('qId');
             return  q_Id;
               }.property('qId'),

           qType:function(q_Id){
              var qType;
              this.get('question').forEach(function (item){
              if (item.id === q_Id){
                qType= item.get('questiontype');
              }
         });
         return qType;
        },

           preansers:function(q_Id){
             var qAnsers;
             this.get('question').forEach(function (item){
             if (item.id === q_Id){
                qAnsers= item.get('answerChoice');
              }
        });
        return qAnsers;
        },


    actions : {
    singleAnswerSelect:function()
        {
        },


    timeCheck:function(){
        this.toggleProperty('timeChecked');
            },

            ref:function(){
                var reftxt = $("#txtareaQues").val();
                this.set('refText', reftxt);
                    },


    selectQues: function(){
        var q_Id = $("#quesselect").val();
        this.set('selectedQuestionId', q_Id);
        this.set('qId',q_Id);
        var quesType=this.qType(q_Id);
         if(quesType === "MCSA"){
            this.set('isMcsa',true);
            this.set('isFree',false);
            this.set('isMcma',false);
        }
         else if (quesType === "FREE"){
            this.set('isMcsa',false);
            this.set('isFree',true);
            this.set('isMcma',false);
        }
         else if (quesType === "MCMA"){
            this.set('isMcma',true);
            this.set('isMcsa',false);
            this.set('isFree',false);
        }
    },
    addquestion: function(){
         this.set("newQuesRef", false);
         var num=8;
         var type;
         var newquestionname = $("#txtareaQues").val();
         var trimQues=$.trim($('#txtareaQues').val());
         var timeQues=$.trim($('#quesTimer').val());

         if(timeQues.length == 0){
             timeQues="5";
         }

         var quesDiff = $("#quDiff").val();
         var quesPos = $("#quPos").val();
         var quesSa=$('#nsa').is(':checked');
         var quesMa=$('#nma').is(':checked');
         var quesFa=$('#nfree').is(':checked');
         var quesOa=$('#noa').is(':checked');

         if(quesSa)
         {
             type="MCSA";
         }
         else if (quesMa)
         {
             type="MCMA";
         }
         else if (quesFa)
         {
             type="FREE";
         }
         else if (quesOa)
         {
             type="MCSA";
         }
         if(trimQues.length == 0){
            this.set("quesEmpty", true);
        }
        else if (!quesSa && !quesMa && !quesFa && !quesOa ) {
            this.set("quesEmpty", false);
            this.set("typeEmpty", true);
        }

        else {

            this.set("quesEmpty", false);
            this.set("isNewquestion", false);
            this.set("preQues", true);
            this.sendAction('addquestion',newquestionname,quesDiff,quesPos,type,num,timeQues);
        }
    },

    addanswer:function(){
        var q_Id = $("#quesselect").val();
        var preans=this.preansers(q_Id);
        var newansname = this.get('newans');
        this.set('isMcma',false);
        this.set('isMcma',true);
        this.sendAction('addanswer',newansname,q_Id,preans);
      },

    addNewquestion:function(){
        this.set("newQuesRef", true);
        this.set("preQues", false);
        this.set("ansmanager", false);
        this.set("isNewquestion", true);
        this.set('isMcsa',false);
        this.set('isFree',false);
        this.set('isMcma',false);
        this.set('timeChecked',false);
      },

      manageAnswers:function(){
        this.set("ansmanager", true);
      },

      goPrevious:function(){
        this.set("isNewquestion", false);
        this.set("preQues", true);
      },

    }
});
