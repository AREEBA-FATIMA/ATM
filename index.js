#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 12345;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "enter your pin",
    type: "number",
});
if (pinAnswer.pin === myPin) {
    console.log("Correct pin codde!!!");
    let operationAnswer = await inquirer.prompt({
        name: "operations",
        message: "please select one",
        type: "list",
        choices: ["withdraw", "check balance"],
    });
    if (operationAnswer.operations === "withdraw") {
        let amountAnswer = await inquirer.prompt({
            name: "amount",
            message: "enter your amount",
            type: "number",
        });
        if (amountAnswer.amount <= myBalance) {
            myBalance -= amountAnswer.amount;
            console.log(amountAnswer.amount + ' ' + "Withdraw successfully");
            console.log(`Your remaaining balance is ${myBalance}`);
        }
        else {
            console.log("Please enter sufficient value");
        }
    }
    else if (operationAnswer.operations === "check balance") {
        console.log(`Your balance is ${myBalance}`);
    }
}
else {
    console.log("Invalid pin number");
}
