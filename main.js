//Initializing the value for the variable of a name, question, random number and an empty string.
let userName = "Sachiko";
let userQuestion = "will I be a billionare in the future?";
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
//using a ternary expression to decide what to do if the user enter her username or not
userName ? console.log(`Hello ${userName}`) : console.log("Hello!");

//log the user's questions with the username
console.log(`I want to know if I ${userQuestion} by:${userName}`);

//creating a conditional statement depending on the random number generated and to be assigned on the eightball.
// First using if else statement
if (randomNumber === 1) {
  eightBall = "It is certain";
} else if (randomNumber === 2) {
  eightBall = "It is decidedly so";
} else if (randomNumber === 3) {
  eightBall = "Reply hazy try again";
} else if (randomNumber === 4) {
  eightBall = "Cannot predict now";
} else if (randomNumber === 5) {
  eightBall = "Do not count on it";
} else if (randomNumber === 6) {
  eightBall = "My sources say no";
} else if (randomNumber === 7) {
  eightBall = "Outlook not so good";
} else if (randomNumber === 8) {
  eightBall = "Signs point to yes";
} else {
  eightBall = "Not so certain";
}

console.log(`Magic Eight Ball says: ${eightBall}.`);

//Extra Practice convert if else statement to a switch statement.

switch (randomNumber) {
  case 1:
    eightBall = "It is certain";
    break;
  case 2:
    eightBall = "It is decidely so";
    break;
  case 3:
    eightBall = "Reply hazy try again";
    break;
  case 4:
    eightBall = "Cannot predict now";
    break;
  case 5:
    eightBall = "Do not count on it";
    break;
  case 6:
    eightBall = "My sources say no";
    break;
  case 7:
    eightBall = "Outlook not so good";
    break;
  case 8:
    eightBall = "Signs point to yes";
    break;
  default:
    eightBall = "Not so certain";
}

console.log(`Magic Eight Ball says: ${eightBall}.`);
