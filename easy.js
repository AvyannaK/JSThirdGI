// EASY: Write a function that would allow you to do this:
// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"
// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"


// function myExercise(){

// let exercise = ("Today's exercise:" + (run))

// }

// var run = exercise ('running')

// console.log(run());
// console.log(myExercise);

function exercise(activity) {
    return function() {
      return "Today's exercise: " + activity;
    }
  }
  
  var run = exercise('running');
  console.log(run(exercise)); // prints "Today's exercise: running"
  
  var swim = exercise('swimming');
  console.log(swim(exercise)); // prints "Today's exercise: swimming"
