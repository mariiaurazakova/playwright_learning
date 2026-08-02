//Declarative functions
function helloOne(){
  console.log("Hello one!")
}

helloOne()


//Anonymous function
var helloTwo = function(){
    console.log("Hello two!")
}
helloTwo()


//ES6 syntax function or arrow function
 var helloThree = () => {
    console.log("Hello three!")
} 
helloThree()

//Function wth arguments
function printName(name, lastName){
    console.log(name+ ' ' +lastName)

}
printName("Mariia", "Urazakova")

//Function with return
function multiplyByTwo(number){
   var result = number * 2
   return result
}
/* var myResult = multiplyByTwo(4)
console.log(myResult) */
console.log(multiplyByTwo(4))

//import function
import { printAge } from '../helpers/printHelper.js'
printAge(7)


//import everything
import * as helper from '../helpers/printHelper.js'
helper.printAge(3)