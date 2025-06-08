const minFee = 10;
const maxFee = 70;
const feeRate = 0.015;

function estimateTransactionFee(amountToSend) {
    let calculatedFee = amountToSend * feeRate;

    if (calculatedFee < minFee) {
        calculatedFee = minFee;
    } else if (calculatedFee > maxFee) {
        calculatedFee = maxFee;
    } 

    const totalDebited = amountToSend + calculatedFee;

    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${calculatedFee}`);
    console.log(`Total amount to be debited: KES ${totalDebited}`);
    console.log("Send Money Securely!");
}

const input = prompt("How much are you sending? (KES): ");
const amountToSend = Number(input);

if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log("Please enter the required amount.");
}
else {
    estimateTransactionFee(amountToSend);
}