//Ex. 1
//შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.

let myArray = ["black", "white", "blue", "green", "red", "yellow", "orange", "gray", "purple", "pink"];
for (let i = 2; i < myArray.length; i += 3) {
    console.log(myArray[i]);
}


//Ex. 2
//შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.

for (let i = 10; i > 0; i--) {
    console.log(i);
}


//Ex. 3
// მოცემული მასივიდან: let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'] - ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.

let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];
let namesWithoutBob = [];

//With For loops
for (let i = 0; i < names.length; i++) {
    if (names[i] !== 'Bob') {
        namesWithoutBob.push(names[i]);
    }
}
console.log(namesWithoutBob);

//Without For loops
const arrayWithoutBob = names.filter(function (WithoutBob) {
    return WithoutBob !== 'Bob';
});
console.log(arrayWithoutBob);


//Ex. 4
//ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: fun და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.

function fun(number, power) {
    return Math.pow(number, power);
}
console.log(fun(5, 3));


//Ex. 5
//შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} FizzBuzz`);
        } else if (i % 3 === 0) {
            console.log(`${i} Fizz`);
        } else if (i % 5 === 0) {
            console.log(`${i} Buzz`);
        } else console.log(i);
    }
}
fizzBuzz();


//Ex. 6
//შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120, 

function factorialCalculator(number) {
    return (number === 0 || number === 1) ? 1 : number * factorialCalculator(number - 1);
}
console.log(factorialCalculator(8));


//Ex. 7
//შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.

function upperCaseFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
}
console.log(upperCaseFirstLetter("javaScript"));


//Ex. 8
//შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.

function blankStringChecker(testString) {
    return testString === "" ? "this string is blank." : "this string is not blank.";
}
console.log(blankStringChecker("Javascript"));


//Ex. 9
//შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად. მაგ. stringToArray(testString) => თუ მივაწვდით სტრიქონს “Hello, World” => გამოიტანს მის ვერსიას მასივში. [“Hello”, “World”]

function stringToArray(testString) {
    return testString.split(", ");
}
console.log(stringToArray("Hello, World"));


//Ex. 10
//შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს შემდგომში: მომხმარებელი გაწვდის ემაილს წერტილით გამოყოფილ თავისი სახელით და გვარით, beqa.beqauri@gmail.com, თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას ამ ფორმით:  beqa……..@gmail.com. წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.

function email(email) {
    let [username, domain] = email.split("@");
    let [firstName, lastName] = username.split(".");
    let protectedEmail = `${firstName}${".".repeat(lastName.length + 1)}@${domain}`;
    return protectedEmail;
}
console.log(email("beqa.beqauri@gmail.com"));