import DS from 'ember-data';

export default DS.Model.extend({
  //qustion : DS.hasMany('qoption', { async: true }),
  username : DS.attr('string'),
  useremailid:DS.attr('string'),
  userorganization:DS.attr('string'),
  isApproved: false

}).reopenClass({
    FIXTURES: [
        {
            id: 1,
            username: "Surjit Lahiri",
            useremailid: "blahblah@mindteck.com",
            userorganization:"Mindteck India Ltd"
        },
        {
            id: 2,
            username: "Tanushree Mathad",
            useremailid: "blahblah@mindteck.com",
            userorganization:"Mindteck India Ltd"
        },
        {
          id: 3,
          username: "Siba Mohanty",
          useremailid: "blahblah@mindteck.com",
          userorganization:"Mindteck India Ltd"
        },
        {
          id: 4,
          username: "Primus Rasquinha",
          useremailid: "blahblah@mindteck.com",
          userorganization:"Mindteck India Ltd"
        },
        {
          id: 5,
          username: "Arnab Banerjee",
          useremailid: "blahblah@mindteck.com",
          userorganization:"Mindteck India Ltd"
        }
    ]
});
