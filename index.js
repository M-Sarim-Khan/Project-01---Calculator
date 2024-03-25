#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    { name: "firstNumber", message: "Enter your First Number: ", type: "number" },
    { name: "secondNumber", message: "Enter your Second Number: ", type: "number" },
    { name: "operator", message: "Select the operator which action do you want to perform: ", choices: ["Addition", "Subtraction", "Multipication", "Division", "Exponentiation", "Modulus"], type: "list" },
]);
if (answer.operator === "Addition") {
    console.log(chalk.green(answer.firstNumber + answer.secondNumber));
}
else if (answer.operator === "Subtraction") {
    console.log(chalk.green(answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "Multipication") {
    console.log(chalk.green(answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "Division") {
    console.log(chalk.green(answer.firstNumber / answer.secondNumber));
}
else if (answer.operator === "Exponentiation") {
    console.log(chalk.green(answer.firstNumber ** answer.secondNumber));
}
else if (answer.operator === "Modulus") {
    console.log(chalk.green(answer.firstNumber % answer.secondNumber));
}
else {
    console.log(chalk.red.bold("Please select the valid perator"));
}
