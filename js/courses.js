//courses

var courseArray = [
                  ["Cookies 101", "Dessert Arts"],
                  ["Biscuits 101", "Brunch Arts"],
                  ["Figure Drawing", "Visual Arts"],
                  ["Petting Kittens", "Fuzzy Arts"],
                  ["Cakes 101", "Dessert Arts"]
                  ["Omelettes 201", "Brunch Arts"]
                  ]
function filterCourses(arrayToFilter, departmentOfInterest) {
    var tinyArray = arrayToFilter[0];
    for (var i = 0; i < arrayToFilter.length; i++) {
    tinyArray += arrayToFilter[i];
    }
    if (departmentOfInterest==tinyArray[1]) {
    var coursesOfInterest = arrayToFilter.filter(departmentOfInterest);
    return coursesOfInterest;
    }

console.log(filterCourses(courseArray, "Brunch Arts"));
}
