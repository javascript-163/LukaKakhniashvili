// Exercise 1
console.log("Exercise 1");
let num = 15;
let numSqr = num * num;
console.log(`${num}-ის კვადრატი არის - ${numSqr}`);
console.log(" ");

//Exercise 2
console.log("Exercise 2");
let degreeCe = 42;
let degreeFa = degreeCe * 9 / 5 + 32;
console.log(`${degreeCe} გრადუსი ცელსიუსი არის ${degreeFa} გრადუსი ფარენჰეიტი`);
console.log(" ");

//Exercise 3
console.log("Exercise 3")
function numbers(num1, num2, num3) {
    if (num1 > num2 && num1 < num3) {
        console.log(`${num1} არის მოქცეული ${num2}_სა და ${num3}_ს შორის.`)
    } else if (num1 === num2 && num1 === num3) {
        console.log("მოცემული რიცხვები ერთმანეთის ტოლია.")
    } else {
        console.log(`${num1} არ არის მოქცეული ${num2}_სა და ${num3}_ს შორის.`)
    }
};
numbers(12, 5, 22);
console.log(" ");

//Exercise 4
console.log("Exercise 4")
let yearChecker = 2024;
if ((yearChecker % 4 === 0 && yearChecker % 100 !== 0) || (yearChecker % 400 === 0)) {
    console.log(`${yearChecker} არის ნაკიანი წელი.`);
} else {
    console.log(`${yearChecker} არ არის ნაკიანი წელი.`);
}
console.log(" ");

//Exercise 5
console.log("Exercise 5")
let number1 = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი:"));
let operator = prompt("შეიყვანეთ არითმეტიკული ოპერატორი (+, -, *, /):");
let number2 = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი:"));
let result;

if (operator === '+') {
    result = number1 + number2;
} else if (operator === '-') {
    result = number1 - number2;
} else if (operator === '*') {
    result = number1 * number2;
} else if (operator === '/') {
    if (number2 !== 0) {
        result = number1 / number2;
    } else {
        result = "0-ზე გაყოფა არ შეიძლება!";
    }
} else {
    result = "არასწორი არითმეტიკული ოპერატორი";
};
console.log(`${number1} ${operator} ${number2} = ${result}`);