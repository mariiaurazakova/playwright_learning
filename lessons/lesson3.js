//objects

var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["Volvo", "Tesla", "Toyota"]
}

customer.firstName = "Mike" //Dot notation
customer['lastName'] = "Urazakov" //Bracket notation
console.log(customer['firstName'])
console.log(`${customer.firstName} ${customer.lastName}`)
console.log(customer.cars[2])
console.log(customer.firstName)

//arrays
var car = ["Volvo", "Tesla", "Toyota"]
car[1] = "BMW"
console.log(car[1])