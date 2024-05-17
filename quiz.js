const prompt = require("prompt-sync")();

const userName = prompt("What is your name: ");
console.log("Welcome", userName.toString(), "to our little game of me!");

const questionAnswer1 = "ENONGENE THIERRY DANIEL";
const questionAnswer2 = 22;
const questionAnswer3 = "DEMON SLAYER"

const numberOfQuestions = 3;
let correctAnswers = 0;

while(true){
const question1 = prompt("What are my full names: ");

if (question1.toUpperCase() === questionAnswer1) {
    correctAnswers++;
    console.log("Your answer is correct")

} else { console.log("Wrong") }

const question2 = prompt("How Old am i?: ");

if (parseInt(question2) === questionAnswer2) {
    correctAnswers++;
    console.log("Your answer is correct")

} else { console.log("Wrong") }

const question3 = prompt("What is my favorite anime?: ");

if (question3.toUpperCase() === questionAnswer3) {
    correctAnswers++;
    console.log("Your answer is correct")

} else { console.log("Wrong") };

// const result = ("Your score is ",correctAnswers, "/", numberOfQuestions);

if (correctAnswers < 3) {
    console.log("Your score is ",correctAnswers, "/", numberOfQuestions, ". I guess you need to know me more! (@@)");
} else {
    console.log("Your score is ",correctAnswers, "/", numberOfQuestions, ". Confirm you are my BFF");
};

const playAgain = prompt("Do you want to try again(yes/no)?");
if(playAgain!="yes"){
    break;
}
};



