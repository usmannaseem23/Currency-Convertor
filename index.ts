#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const currency: any = {
  USD: 1, // base Currency
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280,
  DIN: 555,
};
9;
let useranswer = await inquirer.prompt([
  {
    name: "from",
    message: chalk.italic.magentaBright("Enter from Currency"),
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "to",
    message: chalk.bgGray("Enter To Currency"),
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "amount",
    message:  chalk.italic.greenBright("Enter Your Amount"),
    type: "number",
  },
]);

//dynamic approach
let fromamount = currency[useranswer.from]; //exchange rate
let toamount = currency[useranswer.to]; //exchange rate
let amount = useranswer.amount;
let baseamount = amount / fromamount;
let convertedamount = baseamount * toamount; // USD base currency // 4
console.log(convertedamount);

// console.log(baseamount);
// console.log(fromamount);
// console.log(toamount);

// console.log(amount);
