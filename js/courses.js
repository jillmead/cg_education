//CONSTRUCTOR VERSION//

var listedCourses = [];

var Course = function (name, department, semester, teacher) {
  this.name = name;
  this.department = department;
  this.semester = semester;
  this.teacher = teacher;
  listedCourses.push(this);
}

var courseCookies101 = new Course ("Cookies 101", "Dessert Arts", "Winter 2018", "Miss Flour");
var courseBiscuits101 = new Course ("Biscuits 101", "Brunch Arts", "Winter 2018", "Miss Flour");
var courseFigureDrawing = new Course ("Figure Drawing", "Visual Arts", "Spring 2019", "Phillipe");
var coursePettingKittens = new Course ("Petting Kittens", "Fuzzy Arts", "Winter 2018", "Ferocious Fran");
var courseCakes101 = new Course ("Cakes 101", "Dessert Arts", "Summer 2018", "Miss Frosting");
var courseOmelettes201 = new Course ("Omelettes 201", "Brunch Arts", "Spring 2019", "Mr. Egg");
var coursePuppyBellies = new Course ("Puppy Bellies", "Fuzzy Arts", "Winter 2018", "Gentle Ben");

var returnCoursesOfInterest = function (courseArray, deptOfInterest) {
    var departments = [];
    for (var i = 0; i < listedCourses.length; i++) {
        if (listedCourses[i].department == deptOfInterest) {
          departments.push(listedCourses[i].name);
        }
    }
    return departments;
}

var promptForDepartment =function() {
  while (true) {
    var userEnteredDept = prompt('Please enter a valid department name.');
    for (var i = 0; i < listedCourses.length; i++) {
      if (userEnteredDept == listedCourses[i].department) {
      	return userEnteredDept;
      }
    }
  }
}

var alertCourses = function(userEnteredDept) {
  var dept = promptForDepartment();
  var coursesToDisplay = returnCoursesOfInterest(listedCourses, dept);
      alert("You can choose from the following courses: " + coursesToDisplay + ".");
};

alertCourses();

//TEACHERS//
//var Teacher = function (name, department, ratings) {
//  this.name = name;
//  this.department = department;
//  this.ratings = ratings;
//  }
//  Teacher.prototype = {
//    calculateOriginalAverage: function() {
//      var sum = 0;
//      for (var i = 0; i < this.ratings.length; i++) {
//        sum += this.ratings[i];
//      }
//      this.originalAverage = Math.round (sum / this.ratings.length*10) / 10;
//      return this.originalAverage;
//    },
//    addTeacherRating: function(newRating) {
//        this.ratings.push(newRating);
//        this.newRating = newRating;
//    },
//    getAvgRating: function() {
//        var total = 0;
//        for (var i = 0; i < this.ratings.length; i++) {
//          total += this.ratings[i];
//        }
//        this.newAverage = Math.round (total / this.ratings.length*10) / 10;
//        return this.newAverage;
//    },
//    printTeacher: function() {
//      return this.name + '\n' +
//      this.department + '\n' +
//      "Avg. Rating: " + this.originalAverage + '\n' +
//      "Adding Rating: " + this.newRating + '\n' +
//      "New Avg. Rating: " + this.newAverage
//    }
//}

//STEP 2 -- EXAMPLE TEACHERS//
//var teacherCookie = new Teacher ("Cookie", "Fluffy Arts", [4.6, 4.8, 5.0]);
//var teacherBiscuit = new Teacher ("Biscuit", "Pouncing Arts", [3.6, 3.8, 4.0]);
//var teacherThomas = new Teacher ("Thomas", "Stripey Arts", [2.6, 2.8, 3.0]);
