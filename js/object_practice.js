var gradYear = prompt("Please enter your graduation year.")
var gradMonth = "";
while (gradMonth !=="May" && gradMonth !== "December") {
  gradMonth = prompt("Please enter your graduation month: May or December.");
}

var welcomeStudentByGraduatingClass = function(month, year) {
  var gradMonthAndYear = month + " " + year;
  var gradClass = [];
  var lookupTable = {
      "May 2018": ["Senior", "College"],
      "December 2018": ["Junior", "College"],
      "May 2019": ["Junior", "College"],
      "December 2019": ["Sophomore", "College"],
      "May 2020": ["Sophomore", "College"],
      "December 2020": ["Freshman", "College"],
      "May 2021": ["Freshman", "College"],
      "December 2021": ["Senior", "High School"],
      "May 2022": ["Senior", "High School"],
      "December 2022": ["Junior", "High School"],
      "May 2023": ["Junior", "High School"],
      "December 2023": ["Sophomore", "High School"],
      "May 2024": ["Sophomore", "High School"],
      "December 2024": ["Freshman", "High School"],
      "May 2025": ["Freshman", "High School"],
    };
    gradClass = lookupTable[gradMonthAndYear];
    if (gradClass == undefined) {
        return;
      } else if (gradClass[1] == "College") {
        alert("Welcome " + gradClass[0] + "!");
      } else if (gradClass[1] == "High School") {
        alert("You're still a " + gradClass[0] + " in high school!");
      } else if ((month == "December" && year == 2025) || year >= 2026) {
        alert("Whoa, college is some years away...");
      }
}

welcomeStudentByGraduatingClass(gradMonth,gradYear);

//console.log(welcomeStudentByGraduatingClass("May", 2016));
//console.log(welcomeStudentByGraduatingClass("December", 2018));
//console.log(welcomeStudentByGraduatingClass("May", 2023));
//console.log(welcomeStudentByGraduatingClass("December", 2025));
//console.log(welcomeStudentByGraduatingClass("May", 2030));

//STEP 2//
/*
function collegeOrHighSchool(gradYear) {
  if (gradYear >= 2018 && gradYear <= 2021) {
    return "You are in college."
  } else if (gradYear >= 2022 && gradYear <= 2025) {
    return "You are in high school."
  } else {
    return "You are neither in college nor grad school."
  }
}

*/
