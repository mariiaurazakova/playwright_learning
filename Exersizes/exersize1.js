let familySize = 2
let plannedDistanceToDrive = 100

function recommendedCar(familySize, plannedDistanceToDrive) {
    if (familySize <= 4 && plannedDistanceToDrive < 200){
        return "Tesla";
    } else if (familySize <= 4 && plannedDistanceToDrive >= 200){
        return "Toyota Camry";
    } else if (familySize > 4 ) {
        return "Minivan"
    }
}

let carRecommendation = recommendedCar(familySize, plannedDistanceToDrive)

console.log(carRecommendation)