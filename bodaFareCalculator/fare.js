const baseFare = 50; 
const chargePerKm= 15; 

function calculateBodaFare(distanceInKm) {
    const distanceFare = distanceInKm * chargePerKm; 
    const totalFare = baseFare + distanceFare; 

    console.log(`\nHow many ${distanceInKm} km:`);
    console.log(`On a boda: KES ${baseFare}`);
    console.log(`Until there: KES ${distanceFare}`);
    console.log(`Total: KES ${totalFare}\n`);
    console.log("Get on!");
}

const input = prompt("Where are you going? How many kilometers?:");
const distanceInKm = Number(input);

if (isNaN(distanceInKm) || distanceInKm <= 0) {
    console.log("Please enter the correct distance in Kilometers.");
} else {
    calculateBodaFare(distanceInKm);
}