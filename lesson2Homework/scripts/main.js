//Exercise 1
console.log("Exercise 1");
let fruits = ["banana", "apple", "orange", "mango"];
let isArray = Array.isArray(fruits);
console.log(`fruits variable is Array - ${isArray}`);
console.log(" ")


//Exercise 2
console.log("Exercise 2");
let firstElem = fruits[0];
console.log(`The first element is ${firstElem}`);
console.log(" ")


//Exercise 3
console.log("Exercise 3");
let lastElem = fruits[fruits.length-1];
console.log(`The last element is ${lastElem}`);
console.log(" ")


//Exercise 4
console.log("Exercise 4");
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"]
console.log(`${color.indexOf(color[1])}${o[1]} choice is ${color[0]}`);
console.log(`${color.indexOf(color[2])}${o[2]} choice is ${color[1]}`);
console.log(`${color.indexOf(color[3])}${o[3]} choice is ${color[2]}`);
console.log(" ")


//Exercise 5
console.log("Exercise 5");
let student = {
    firstName: "Luka",
    lastName: "Kakhniashvili",
    age: 23,
    gender: "Male",
};
console.log(student)

student.nationality = "Georgian";
delete student.gender;
console.log(student)

student.age = 22;
console.log(student)

