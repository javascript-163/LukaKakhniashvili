//Exercise 1
let action = "move";

switch (action) {
    case "move":
        alert("You're moving!");
        break;
    case "jump":
        alert("You're jumping!");
        break;
    case "run":
        alert("You're running!");
        break;
    default: 
        alert("invalid action!");
}

//Exercise 2
let vegetables = "Carrot";
switch (vegetables) {
    case "Carrot":
        alert("Hello");
        break;
    case "Broccoli":
        alert("Welcome");
        break;
    default:
        alert("Neither");
}

//Execrise 3
function ageChecker(age) {
    if (age < 18) {
        return "Sorry, you can't vote.";
    } else {
        return "You can vote."
    }
}
console.log(ageChecker(15));

//Exercise 4
function passwordChecker(password) {
    let passLength = password.length;
    
    if (passLength < 3) {
        return "Password strength: Very weak!";
    } else if (passLength >= 3 && passLength <= 6) {
        return "Password strength: Weak!";
    } else if (passLength >= 6 && passLength <= 8) {
        return "Password strength: Medium!";
    } else if (passLength >= 8 && passLength <= 16) {
        return "Password strength: Strong!";
    } else if (!isNaN(Number(password))) {
        parseInt(password);
        return "Password strength: Very Weak!";
    }
}
console.log(passwordChecker("123123321312312123"));

//Exercise 5
function question(question, correctAnswer) {
    let answer = prompt(question);
    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
        alert("Correct!");
        return true;
    } else {
        alert(`Incorrect. The correct answer is ${correctAnswer}.`);
        return false;
    }
}
function quiz() {
    let correctAnswers = 0;
    if (question("5 + 5", "10")) {
        correctAnswers++;
    }
    if (question("10 + 5", "15")) {
        correctAnswers++;
    }
    if (question("10 / 2", "5")) {
        correctAnswers++;
    }
    if (question("20 - 18", "2")) {
        correctAnswers++;
    }
    if (question("8 * 4", "32")) {
        correctAnswers++;
    }
    document.write(`You answered ${correctAnswers} out of 5 questions correctly.`);
}
quiz();


//Exercise 6
let myArray = ["black", "white", "blue", "green", "red", "yellow", "orange", "gray", "purple", "pink"];
for (let i=2; i<myArray.length; i+=3) { 
    console.log(myArray[i]);
}

//Exercise 7
function factorialCalculator(number) {
    return (number === 0 || number === 1) ? 1 : number * factorialCalculator(number - 1);
}
console.log(factorialCalculator(8));