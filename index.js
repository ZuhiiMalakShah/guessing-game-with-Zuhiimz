import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "UserGuess",
        message: "Write your guess b/w 1 to 10: "
    }
]);
const { UserGuess } = answers;
if (UserGuess === systemGeneratedNo) {
    console.log(UserGuess, "UserGuess", systemGeneratedNo, 'SYs');
    console.log("yessss your answer is correct \n You win!");
}
else {
    console.log("please try again because you lose this game try again for your Better luck next time");
}
