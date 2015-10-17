import DS from 'ember-data';

export default DS.Model.extend({
  //qustion : DS.hasMany('qoption', { async: true }),
  qtype : DS.attr('string'),
  question:DS.attr('string'),
  answerChoice:DS.attr(),
  isSelected: false

}).reopenClass({

    FIXTURES: [
        {
            id: 1,
            question: "Which of the following statements are TRUE about the .NET CLR?",
            answerChoice: ["It provides a language-neutral development & execution environment.",
             "It ensures that an application would not be able to access memory that it is not authorized to access.",
             "It provides services to run managed applications." ]
        },
        {
            id: 2,
            question: "Which of the following are valid .NET CLR JIT performance counters?",
            answerChoice : ["Total memory used for JIT compilation",
            "Percentage of memory currently dedicated for JIT compilation", "Average memory used for JIT compilation", "Number of methods that failed to compile with the standard JIT" ]
        },
        {
          id: 3,
          question : "Which of the following utilities can be used to compile managed assemblies into processor-specific native code?",
          answerChoice : ["gacutil",
"ildasm", "ngen", "sn","dumpbin" ]
        },
        {
          id: 4,
          question : "Which of the following jobs are NOT performed by Garbage Collector?",
          answerChoice : ["Freeing memory on the stack.", "Avoiding memory leaks.",
          "Freeing memory occupied by unreferenced objects.", "Closing unclosed database collections.",
          "Closing unclosed files." ]
        },
        {
          id: 5,
          question : "In which event are the controls fully loaded?",
          answerChoice : ["True","False"]
        }
    ]
});
