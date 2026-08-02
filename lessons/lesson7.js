//Loops

console.log("Hello world!")

/* for (statement1; statement2; statement3) {

} */

//for loop (for i loop)
for (let i=0; i<5; i++) {
console.log("Hello world!")
}

var cars = ["Volvo", "Tesla", "Toyota"]
//for of loop
for ( let car of cars) {
    console.log(car)
    if (car == "Tesla") {
        break
    }
}

//ES6 syntax for each loop
cars.forEach(car => {
    console.log(car)
})

