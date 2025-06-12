//Function to calculate chai Ingredients
function calculateChaiIngredients(numberOfCups) {

    //Constants    
    const waterPerCup = 200; 
    const milkPerCup = 50; 
    const teaLeavesPerCup = 1; 
    const sugarPerCup = 2; 

    //Measurements for each constant
    const totalWater = waterPerCup * numberOfCups;
    const totalMilk = milkPerCup * numberOfCups;
    const totalTeaLeaves = teaLeavesPerCup * numberOfCups;
    const totalSugar = sugarPerCup * numberOfCups;
     
    //Output results
  console.log(`\nTo make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
  console.log(`\nEnjoy your Chai Bora!`);

}

// User Prompt
const input = prompt("How many cups of Chai bora would you like to make? (Enter a number): ");
const numberOfCups = Number(input);

//Validatin of input
if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log("Please enter a valid number of cups.");
} else {
    calculateChaiIngredients(numberOfCups);
}
