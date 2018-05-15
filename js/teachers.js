//TEACHER CONSTRUCTOR//

var Teacher = function (name, department, ratings) {
  this.name = name;
  this.department = department;
  this.ratings = ratings;
  }
  Teacher.prototype = {
    calculateOriginalAverage: function() {
      var sum = 0;
      for (var i = 0; i < this.ratings.length; i++) {
        sum += this.ratings[i];
      }
      this.originalAverage = Math.round (sum / this.ratings.length*10) / 10;
      return this.originalAverage;
    },
    addTeacherRating: function(newRating) {
        this.ratings.push(newRating);
        this.newRating = newRating;
    },
    getAvgRating: function() {
        var total = 0;
        for (var i = 0; i < this.ratings.length; i++) {
          total += this.ratings[i];
        }
        this.newAverage = Math.round (total / this.ratings.length*10) / 10;
        return this.newAverage;
    },
    printTeacher: function() {
      return this.name + '\n' +
      this.department + '\n' +
      "Avg. Rating: " + this.originalAverage + '\n' +
      "Adding Rating: " + this.newRating + '\n' +
      "New Avg. Rating: " + this.newAverage
    }
}

//STEP 2 -- EXAMPLE TEACHERS//
var teacherCookie = new Teacher ("Cookie", "Fluffy Arts", [4.6, 4.8, 5.0]);
var teacherBiscuit = new Teacher ("Biscuit", "Pouncing Arts", [3.6, 3.8, 4.0]);
var teacherThomas = new Teacher ("Thomas", "Stripey Arts", [2.6, 2.8, 3.0]);
var teacherMissFlour = new Teacher ("Miss Flour", "Culinary Arts", [4.7, 4.8, 4.9]);


//STEP 2 -- TEST PRINTOUTS//

teacherCookie.calculateOriginalAverage();
teacherCookie.addTeacherRating(1.0);
teacherCookie.getAvgRating();
console.log(teacherCookie.printTeacher());

teacherBiscuit.calculateOriginalAverage();
teacherBiscuit.addTeacherRating(1.0);
teacherBiscuit.getAvgRating();
console.log(teacherBiscuit.printTeacher());

teacherThomas.calculateOriginalAverage();
teacherThomas.addTeacherRating(1.0);
teacherThomas.getAvgRating();
console.log(teacherThomas.printTeacher());

//PROMPT//

var newRating = Number(prompt('We would like for you to review . Please enter a rating between 0.0 - 5.0.'));
  if (newRating >= 0.0 && newRating <= 5.0) {
    teacher.addTeacherRating(newRating);
    alert('Thanks for your review! ' + teacher.name + "\'s average rating is now " + teacher.getAvgRating() + ".");
  } else {
    newRating = Number(prompt('Oops! Not a number between 0.0 and 5.0. Please try again.'));
      if (newRating >= 0.0 && newRating <= 5.0) {
      teacher.addTeacherRating(newRating);
      alert('Thanks for your review! ' + teacher.name + "\'s average rating is now " + teacher.getAvgRating() + ".");
      }
  }

  //console.log(teacher.addTeacherRating(newRating));
  console.log(teacher.ratings);
  console.log(teacher.getAvgRating());
