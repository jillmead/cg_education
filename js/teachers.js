//teachers

var teacherName = "Sally Jones";
var teacherDepartment = "Physics";
var teacherRatings = [4.5, 4.7, 4.3];

function getRatingAvg(ratingsArray) {
  var total = 0;
  for (var i = 0; i < ratingsArray.length; i++) {
    total += ratingsArray[i];
  }
  teacherAvgRating = total / ratingsArray.length;
  teacherAvgRating = Math.round (teacherAvgRating * 10) / 10;
  return teacherAvgRating;
}

function addTeacherRating(ratingsArray, newRating) {
  ratingsArray.push(newRating);
  return ratingsArray;
}

var userReview = Number(prompt('We would like for you to review . Please enter a rating between 0.0 - 5.0?'));
  if (userReview >= 0.0 && userReview <= 5.0) {
    addTeacherRating(teacherRatings,userReview);
    alert('Thanks for your review! ' + teacherName + "\'s average rating is now " + getRatingAvg(teacherRatings) + ".");
  } else {
    prompt('Please enter a number between 0.0 and 5.0');
      if (userReview >= 0.0 && userReview <= 5.0) {
      addTeacherRating(teacherRatings,userReview);
      alert('Thanks for your review! ' + teacherName + "\'s average rating is now " + getRatingAvg(teacherRatings) + ".");
      }
  }

console.log(getRatingAvg(teacherRatings));
