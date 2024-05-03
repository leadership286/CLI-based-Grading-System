#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue("Welcome to Grading System"));
console.log(chalk.green("It will help you to know your Grade According to your Percentage and Grade. So guys lets Start."));

async function calculateGrade() {
    try {
        let answers = await inquirer.prompt([
            {
                name: "ObtainMarks",
                message: chalk.magenta("Enter Your Obtained marks"),
                type: "number"
            },
            {
                name: "MaxMarks",
                message: chalk.cyan("Enter Your Total Marks"),
                type: "number"
            },
            {
                name: "Operators",
                message: chalk.green("Kindly Select one of the Options given below"),
                type: "list",
                choices: ["Percentage", "I want Nothing"]
            }
        ]);

        if (answers.Operators === "Percentage") {
            if (isNaN(answers.ObtainMarks) || isNaN(answers.MaxMarks)) {
                console.log(chalk.red("Error: Please enter valid numeric values for Obtain Marks and Max Marks."));
                return;
            }

            const percentage = (answers.ObtainMarks / answers.MaxMarks) * 100;
            console.log(chalk.yellow("Percentage Obtained:"), percentage);
            if (percentage >= 90 && percentage < 100) {
                console.log("Congratulations! Your Grade is A+1.")
            } else if (percentage >= 80 && percentage < 90) {
                console.log("Congratulations! Your Grade is A+.")
            } else if (percentage >= 70 && percentage < 80) {
                console.log("Good Job! Your Grade is A.")
            } else if (percentage >= 60 && percentage < 70) {
                console.log("Keep It Up! Your Grade is B.")
            } else if (percentage >= 50 && percentage < 60) {
                console.log("Need to Work Hard! Your Grade is C.")
            } else if (percentage >= 40 && percentage < 50) {
                console.log("You are Passed")
            } else {
                console.log("You are Fail")
            }
            
        }
    } catch (error) {
        console.log(chalk.red("An error occurred:"), error);
    }
}

calculateGrade();



