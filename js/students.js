//STUDENT PROTOTYPE//

var studentArray = [];

var Student = function(name, major, email, avgGPA, coursesArray) {
  this.name = name;
  this.major = major;
  this.email = email;
  this.avgGPA = avgGPA;
  this.coursesArray = coursesArray;
  studentArray.push(this);
}

Student.prototype = {
  addCourse: function(courseToAdd) {
    this.coursesArray.push(courseToAdd);
    this.courseToAdd = courseToAdd;
  },
  dropCourse: function(courseToDrop) {
    for (var i = 0; i < this.coursesArray.length; i++) {
      if (courseToDrop == this.coursesArray[i]) this.coursesArray.splice(i,1);
      return this.coursesArray;
    }
  },
  changeMajor: function(newMajor) {
    this.major = newMajor;
  },
  printStudent: function () {
    return "Adding course: " + this.courseToAdd + '\n' +
    "to " + this.name + "'s courses." + '\n' +
    "Now they are taking " + this.coursesArray + "."
    //Can add code for the gender pronoun here and clean up the listing of the courses so that it has and, etc.
  }
}

var studentHannahP = new Student ("Hannah P.", "Economics", "makingcharts@usingexcel.com", 3.5, ["Microeconomics", "Macroeconomics", "Money and Banking"]);
var studentGregoryD = new Student ("Gregory D.", "Business", "makingmoney@company.biz", 3.4, ["Making Deals", "Making Friends"]);
var studentRileyM = new Student ("Riley M.", "Snuggles", "iminbed@pillows.com", 4.0, ["Being Sleepy", "Getting Comfy"]);
var studentMuffin = new Student ("Muffin", "Baking", "muffin@oven.com", 3.8, ["Biscuits 101", "Cookies 201", "Cupcakes 301"]);

//TESTS//

console.log(studentMuffin);
studentMuffin.dropCourse("Biscuits 101");
console.log(studentMuffin);
studentMuffin.changeMajor("Cookies");
console.log(studentMuffin);
studentMuffin.addCourse("Breads 201");
console.log(studentMuffin);
console.log(studentMuffin.printStudent());
