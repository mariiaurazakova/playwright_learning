// Conditional statements

/* if (condition) {
    //execute some code here
} else {
    //execute some code here
} */

//If hour between 6 and 12 we want to print "Good morning"
//If hour between 12 and 18 we want to print "Good afternoon"
//Otherwise: Evening

var hour = 5
if (hour >= 6 && hour < 12) {
    console.log("Good morning ")
} else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon ")
} else {
    console.log("Evening")
}


var ageIsMoreThanEighteen = true
var isUSCitizen = false
if (ageIsMoreThanEighteen && isUSCitizen) {
    console.log("This customer is eligible for DL")
} else {
    console.log("This customer is NOT eligible for DL")
}