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
            username: "Nitesh Mishra",
            useremailid: "blahblah@mindteck.com",
            userorganization:"Mindteck India Ltd"
        },
        {
            id: 2,
            username: "Ravindra Gochar",
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
          username: "Ankush Goyal",
          useremailid: "blahblah@mindteck.com",
          userorganization:"Mindteck India Ltd"
        },
        {
          id: 5,
          username: "Vimal Singh",
          useremailid: "blahblah@mindteck.com",
          userorganization:"Mindteck India Ltd"
        }
    ]
});
