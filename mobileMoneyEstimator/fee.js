//constants
const minFee = 10;
const maxFee = 70;
const feeRate = 0.015;

//function to estimate transaction fee
function estimateTransactionFee(amountToSend) {
    let calculatedFee = amountToSend * feeRate;

    //Calculation of fee and their application
    if (calculatedFee < minFee) {
        calculatedFee = minFee;
    } else if (calculatedFee > maxFee) {
        calculatedFee = maxFee;
    } 

    const totalDebited = amountToSend + calculatedFee;

    //Results Output
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}`);
    console.log("Send Money Securely!");
}

//Userprompt
const input = prompt("How much are you sending? (KES): ");
const amountToSend = Number(input);

//Input validation
if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log("Please enter the required amount.");
}
else {
    estimateTransactionFee(amountToSend);
}