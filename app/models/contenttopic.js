import DS from 'ember-data';

export default DS.Model.extend({

topic:DS.attr('string'),
contents : DS.belongsTo('content'),

}).reopenClass({
  FIXTURES: [
      {
          id:1,
          topic:"Remote Procedure Call",
          contents: 1,
      },
      {
        id:2,
        topic:"Memory Management",
        contents: 1,
      },
      {
        id:3,
        topic:"Exeption Handling",
          contents: 2,
      },
      {
        id:4,
        topic:"Java",
          contents: 2,
      },
      {
        id:5,
        topic:"Perl",
          contents: 3
      },
      {
        id:6,
        topic:"Micro-Controller",
          contents: 3,
      },
      {
          id:7,
          topic:"Scheduling",
          contents: 4,
      },
      {
        id:8,
        topic:"File Handling",
        contents: 4,
      },
      {
        id:9,
        topic:"I/O System",
        contents: 5,
      },
      {
        id:10,
        topic:"8085 Controller",
        contents: 5,
      },
      {
        id:11,
        topic:"Ember.js",
        contents: 6,
      },
      {
        id:12,
        topic:"Routing",
        contents: 6,
      }

  ]
});
