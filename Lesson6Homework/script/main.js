//Exercise 1
//შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში.

//Loop
let mySting = "Hello! My name is Javascript"
function longestWordFinder(string) {
    let word = string.split(' ');
    let longestWord = '';

    for (var i = 0; i < word.length; i++) {
        if (word[i].length > longestWord.length) longestWord = word[i];
    }
    return longestWord;
}
console.log(longestWordFinder(mySting));

//Reduce method
function longestWordFinder2(string2) {
    let word2 = string2.split(' ');
    let longestWord2 = word2.reduce(function (longest, current) {
        if (current.length > longest.length) {
            return current;
        } else return longest;
    });
    return longestWord2;
}
console.log(longestWordFinder2(mySting));


//Exercise 2
//შექმენით ობიექტი სახელით "calculator" შესაბამისი ატრიბუტებით სახელად. num1, num2, ანუ რაღაც ესეთი {num1: 10, num2: 5}, დაამატეთ ამ ობიექტში ახალი ატრიბუტები სახელით add, substract, multiply, divide, მათი მთავარი მიზანი უნდა იქნეს, რომ გამოიანგარიშოს ამ ორი რიცხვის ჯამი, სხვაობა, ნამრავლი, განაყოფი. ეს ყველაფერი მოახდინეთ this საკვანძო სიტყვის მეშვეობით.

let calculator = {
    num1: ' ',
    num2: ' ',
    add: function() {
        return this.num1 + this.num2;
    },
    subtract: function() {
        return this.num1 - this.num2;
    },
    multiply: function() {
        return this.num1 * this.num2;
    },
    divide: function() {
        if (this.num2 !== 0) {
            return this.num1 / this.num2;
        } else {
            return "Error! Can't divide by zero!";
        }
    }
};
calculator.num1 = 10;
calculator.num2 = 5;
console.log(`${calculator.num1} + ${calculator.num2} = `, calculator.add());
console.log(`${calculator.num1} - ${calculator.num2} = `, calculator.subtract());
console.log(`${calculator.num1} * ${calculator.num2} = `, calculator.multiply());
console.log(`${calculator.num1} / ${calculator.num2} = `, calculator.divide());


//Exercise 3
//შექმენით ფუნქცია, რომელიც შეიძლება გამოყენებულ იქნეს როგორც ფუნქციის ჰოისტინგის მაგალითად. შექმენით ეს ფუნქცია მისი გამოძახების შემდეგ და აღწერეთ კომენტარებით თუ როგორ მუშაობს იგი ჰოისტინგის მეშვეობით.

let firstName = "Luka";
let lastName = "Kakhniashvili";
console.log("Full Name:", getFullName());
console.log(greetUser());

function getFullName() {
    return firstName + " " + lastName;
}
function greetUser() {
    return "Hello, " + getFullName() + "!";
}