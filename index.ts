#! /usr/bin/env node

import inquirer from "inquirer";

type ansType = {
    UserGuess: number
}
// Generating random numbers

const systemGeneratedNo = Math.floor(Math.random() * 10);

const answers :ansType = await inquirer.prompt([
    {
        type: "number",
        name: "UserGuess",
        message: "Write your guess b/w 1 to 10: "
    }
])

const {UserGuess} = answers;

if(UserGuess === systemGeneratedNo){
    console.log(UserGuess, "UserGuess", systemGeneratedNo, 'SYs')
    console.log("yessss your answer is correct \n You win!")
} else {
    console.log("try again Better luck next time")
}