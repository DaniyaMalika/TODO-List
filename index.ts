#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList = [];
let conditions = true;

console.log(chalk.blueBright.bold("\n \t BECOME FOCUSED, CONCERNED, AND CALM WITH TODO List.  GET MORE PRODUCTIVE?, IMPROVE TIME MANAGEMENT?, BECOME MORE ORGANIZED?\n  \t"))
console.log(chalk.redBright.bold("\t\t\t\t\t\t\t Get started now! \t\t\t\t\t\t\t"))

while(conditions){
     let addActivity = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.yellowBright("\nAdd your New Task\n:"),
        }
     ]);
     todoList.push(addActivity.task)
     console.log(`${chalk.green.bold(addActivity.task)} Task added in TODO List successfully!`)

     let addMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: chalk.yellowBright("Do you want to add more task?"),
            default: "False"
        }
     ]);
     conditions = addMoreTask.addmore
}
console.log(chalk.magentaBright.bold("Your updated TODO List:") , todoList);
