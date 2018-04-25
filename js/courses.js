var courseArray = [
                  ["Cookies 101", "Dessert Arts"],
                  ["Biscuits 101", "Brunch Arts"],
                  ["Figure Drawing", "Visual Arts"],
                  ["Petting Kittens", "Fuzzy Arts"],
                  ["Cakes 101", "Dessert Arts"],
                  ["Omelettes 201", "Brunch Arts"],
                  ["Puppy Bellies", "Fuzzy Arts"]
                  ]

function coursesOfInterest (arrayOfInterest, deptOfInterest) {
var departments = [];
  for(var i = 0; i < arrayOfInterest.length; i++) {
    if(arrayOfInterest[i][1] == deptOfInterest) {
        departments.push(arrayOfInterest[i][0]);
    }
  }
  return departments;
}

/*console.log(coursesOfInterest(courseArray, 'Brunch Arts'));
console.log(coursesOfInterest(courseArray, 'Fuzzy Arts'));*/

/*Create another prompt. This prompt should ask the user what department
they are looking for a course in. The user should enter a department name. Then…
1) check that the user entered a valid department name…
2) if they did not, prompt them again…
3) if they did, use the function you create above to filter the course list
4) AND alert back to the user the course titles
that they can choose from.*/

var userEnteredDept = prompt('What department are you looking for courses in?');
var coursesToDisplay = coursesOfInterest(courseArray, userEnteredDept);

  for (var i = 0; i < courseArray.length; i++) {
      if (userEnteredDept == courseArray[i][1]) {
        alert("You can choose from the following courses: " + coursesToDisplay + ".");
      } else if {
        userEnteredDept = prompt('Please enter a valid department name.');
        if (userEnteredDept == courseArray[i][1]) {
        alert("You can choose from the following courses: " + coursesToDisplay + ".");
        }
      } else {
          return "Invalid Course Selection";
      }
  }
