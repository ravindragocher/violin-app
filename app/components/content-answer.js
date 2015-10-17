import Ember from 'ember';
export default Ember.Component.extend({
isClicked: false ,
ansempty:false,
explempty:false,
count:0,

  actions : {
showques:function()
{
  var e = document.getElementById("quesselect");
  var ques = e.options[e.selectedIndex].text;
  //alert(ques);


},



    addanswer: function(){
      var newanswer = this.get('newans');
      var explanation = this.get('expl');

      if(newanswer=="" || newanswer== undefined || newanswer==" ")
      {
        this.set("ansempty", true);
        this.set("explempty", false);
      }

      else if (explanation=="" || explanation== undefined || explanation==" ") {
        this.set("ansempty", false);
        this.set("explempty", true);
      }
      else {
        this.set("ansempty", false);
        this.set("explempty", false);
            alert("Success");
      }

    }
  }

});
