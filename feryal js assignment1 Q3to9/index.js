//Q no 1 of ch 3
var height = 170;
var newheight = height + 10;
alert(newheight);
//Q no 2 of ch 3
var num1 = 50;
var num2 = 30;
var sum = num1 + num2;
alert(sum);
//Q no 3 of ch 3
var numToBeAdded = 20;
var num = 300;
var total = 320;
alert(total);
//Q no 4 of ch 3
var price = 120;
var tax = price * 0.10;
var totalprice = price + tax;
alert(totalprice);


//Q no 1 of ch 4
var myAddress = "Karachi";
alert(myAddress);
//Q no 2 of ch 4
var userName = "Feryal";
var userEmail = "feryal@gmail.com.";
var userPassword = "Password";
alert("Username:" + userName + "Email:" + userEmail + "Password:" + userPassword);
//Q no 3 of ch 4
//var user address = "Pakistan , Karachi , main street1";

var userAddress = "Pakistan , Karachi , main street1";
alert(userAddress);
//Q no 4 of ch 4
var rose = "Floribundas";
alert(rose);
//alert(Rose);  


//Q no 1 of ch 5
var number1 = 25;
var number2 = 30;
var sum = number1 + number2;
alert(sum);

//Q no 2 to ch 5
var num1 = 25;
var num2 = 5;
var sum = num1 + num2;
alert("the sum is:" + sum);

//Q no 3 of ch 5
var modulusResult = 27 % 4;
alert(modulusResult)

//Qno1 of ch 6
var num = 3;
var newNum = num++;
alert(num + newNum);

//Q no 2 of ch 6
var counter = 10;
counter++;
counter++;
alert(counter);
//Q no 3 of ch 6
var points = 20;
points--;
++points;
alert(points);
//Q no 4 of ch 6
var number = 0;
++number;
++number;
++number;
alert(number);
//Q no 1 of ch 7
var value = (20 % 6) + 5;
alert(value);
//Q no 2 of ch 7
var expressionvalue = (6 + 2) * (5 - 3);
var finalvalue = expressionvalue + 20;
alert(finalvalue);
// Q no 1 of ch 8
var script = prompt("What is your name?");
alert("Hello    ," + script + "!");
// Q no 2 of ch 
let age = prompt("How old are you?");
if (age === null) {
    alert("No age provided");
} else {
    alert("You are " + age + " years old.");
}
//  Q no 3 of ch 8
var pets = prompt("How many pets do you have?");
if (pets === "") {
    alert("You didn't enter anything.");
} else {
    alert("You have " + pets + " pets.");
}
//  Q no 4 of ch 8
var userInput = prompt("Enter a number between 1 and 10");
var number = Number(userInput);
var result = number * 2;
alert("The result is: " + result);
//  Q no 5 of ch 8
var favNum = prompt("What is your favorite number?");
if (favNum === "") {
    favNum = 7;
    alert(favNum);
}
//   Q no 1 of ch 9
var capital = prompt("What is the capital of France?");
if (capital === "Paris") {
    alert("Correct!")
} if (answer !== "Paris") {
    alert("Try again!");
}
// Q no 2 of ch 9
var answer = prompt("What is the capital of France?");
if (answer === "Paris") {
    alert("Correct!")
} else {
    alert("Incorrect, the correct answer is Paris.");
    //  Q no 3 of ch 9
    var answer = prompt("What is the capital of the United Kingdom?");
    if (answer = "London" || answer == "United Kingdom" || answer === "UK") {
        alert("Correct");
    } else {
        alert("Incorrect");
    }
}
// Q  no 4 of ch 9
let score = 0;

const question1 = "What is 2 + 2?";
const correctAnswer1 = "4";

const userAnswer1 = prompt(question1);
if (userAnswer1 === correctAnswer1) {
    score++;
    alert(`Correct! Your score is now: ${score}`);
} else {
    alert(`Wrong answer. Your score is still: ${score}`);
}
const question2 = "What is the capital of France?";
const correctAnswer2 = "Paris";

const userAnswer2 = prompt(question2);
if (userAnswer2 === correctAnswer2) {
    score++; // Increment the score
    alert(`Correct! Your score is now: ${score}`);
} else {
    alert(`Wrong answer. Your score is still: ${score}`);
}
// Q  no 5 of ch 9
const question3 = "What is the capital of Germany?";
const correctAnswer3 = "Berlin";
const question4 = "What is 10 + 10?";
const correctAnswer4 = "20";
const userAnswer3 = prompt(question1);
const userAnswer4 = prompt(question2);
let correctCount = 0;

if (userAnswer3 === correctAnswer1) {
    correctCount++;
}
if (userAnswer4 === correctAnswer2) {
    correctCount++;
}
if (correctCount === 2) {
    alert("You got both right!");
} else if (correctCount === 1) {
    alert("You got one correct!");
} else {
    alert("You got none correct!");
}
// Q   no 6 of ch 9
var userInput = prompt("Enter a number:");
var number = Number(userInput);
if (number % 2 === 0) {
    alert(`${number} is even.`);
} else {
    alert(`${number} is odd.`);
}
//  Q   no 7 of ch 9
var userInput = prompt("Enter your score (0-100):");
var number = Number(userInput);
let grade;
if (number >= 90 && score <= 100) {
    grade = 'A';
} else if (score >= 80 && score < 90) {
    grade = 'B';
} else if (score >= 70 && score < 80) {
    grade = 'C';
} else if (score >= 60 && score < 70) {
    grade = 'D';
} else if (score >= 0 && score < 60) {
    grade = 'F';
} else {
    grade = 'Invalid score';
}
alert(`Your grade is: ${grade}`);
//  Q  no 8 of ch 9
var yearInput = prompt("Enter a year:");
var year = Number(yearInput);
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    alert(`${year} is a leap year.`);
} else {
    alert(`${year} is not a leap year.`);
}
//   Q  no 9 of ch 9
var num1 = Number(prompt("Enter the first number:"));
var num2 = Number(prompt("Enter the second number:"));
var num3 = Number(prompt("Enter the third number:"));
var largest;
if (num1 >= num2 && num1 >= num3) {
    largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
} else {
    largest = num3;
}
alert(`The largest number is: ${largest}`);
//   Q  no 10 of ch 9
var originalPrice = Number(prompt("Enter the original price:"));
var discountRate;
if (originalPrice < 50) {
    discountRate = 0;
} else if (originalPrice >= 50 && originalPrice <= 100) {
    discountRate = 0.10;
} else {
    discountRate = 0.20;
}
var discountAmount = originalPrice * discountRate;
var finalPrice = originalPrice - discountAmount;
alert(`The final price after discount is: $${finalPrice.toFixed(2)}`);