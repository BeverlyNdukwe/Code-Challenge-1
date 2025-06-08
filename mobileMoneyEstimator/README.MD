#Simplified Mobile Money Transaction Fee Estimator (KES)

*INTRODUCTION.
This is a JavaScript program that estimates the mobile money transaction fees based on a percentage rate applied to each fee. It prompts the user for an input(The amount they are going to send) and calculates the transaction fee. It additionally has a maximum and a minimum fee boundary that affect the rating of each fee.

*FEATURES
Calculates a *1.5% transaction fee added onto the final fee.
Enforces a minimum fee of 10 KES and a maximum fee of 70 KES
Prompts user for input and processes it.
Outputs transaction details directly in the browser console.

*HOW IT WORKS
The user is prompted to enter the amount send
The program then checks if the input is valid
Calculate 1.5% of the amount
If the result is less than 10, it uses KES 10 
If its more than 70, it uses KES 70
It then proceeds to add the rating fee to the original amount to be paid and prints everything out.

*HOW TO RUN IT
Ths program is run in the browser console once you paste the code