import Ember from 'ember';
export default Ember.Component.extend({
  isClicked: false ,
topicnameempty:false,
descempty:false,
  actions : {
    addtopic: function(){

      var e = document.getElementById("modselect");
      var strUser = e.options[e.selectedIndex].text;
      alert(strUser);



      var newtopicname = this.get('newtopic');
      var description = this.get('description');
if(newtopicname=="" || newtopicname== undefined || newtopicname==" ")
{
  this.set("descempty", false);
  this.set("topicnameempty", true);
}

else if (description=="" || description== undefined || description==" ") {
  this.set("descempty", true);
  this.set("topicnameempty", false);
}
else {
    this.set("descempty", false);
  this.set("topicnameempty", false);
      this.sendAction('action',newtopicname);
}

    }
  }

});
