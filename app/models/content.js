import DS from 'ember-data';

export default DS.Model.extend({
module:DS.attr('string'),
topic : DS.hasMany('contenttopic'),

}).reopenClass({
  FIXTURES: [
      {
          id:1,
          module: "Automation System",
          topic: [1,2],
      },
      {
        id:2,
        module: "Operating System",
        topic: [3,4],
      },
      {
        id:3,
        module: ".Net Framework",
        topic: [5,6],
      },
      {
        id:4,
        module: "Programming Language",
        topic: [7,8],
      },
      {
        id:5,
        module: "Scripting Language",
        topic: [9,10],
      },
      {
        id:6,
        module: "Embedded",
        topic: [11,12],
      }
  ]
});
