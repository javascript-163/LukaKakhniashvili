//დავალების აღწერა:
//ამ დავალებაში თქვენ მოგიწევთ პოლიმორფიზმის კონცეფციაზე მუშაობა, რომელიც გულისხმობს არსებული Shape კლასის გაზრდას ახალი shape კლასით.

//შექმენით ახალი Html და ჯავასკრიპტ ფაილი: შექმენით ახალი Html ფაილი, რომელსაც დაუკავშირებთ ახალ javascript ფაილს მაგ. სახელად shapes.js, სადაც შეინახავთ საკუთარ კოდს.

/* შექმენით მშობელი კლასი სახელად ‘Shape’: მას უნდა გააჩნდეს შემდეგი ატრიბუტები და მეთოდები:
ატრიბუტები:
‘name’ (სტრიქონი) - “shape”-ის სახელის შესანახად.
მეთოდები:
constructor(name) - კონსტრუქტორი რომელიც მოახდენს ‘name’ ატრიბუტის ინიციალიზირებას.
area() - მეთოდი რომელიც ჯერჯერობით დააბრუნებს რაღაც ესეთ შეტყობინებას:
“Area calculation not implemented for generic shape.” */

class Shape {
    constructor(name) {
        this.name = name;
    }
    area() {
        return "Area calculation not implemented for generic shape.";
    }
}

/* შექმენით შვილობილი კლასები: შექმენით შვილობილი კლასები, თითოეული მათგანი უნდა წარმოადგენდეს განსხვავებულ გეომეტრიულ ფიგურას. შვილობილი კლასი მემკვიდრეობით უნდა იღებდეს მონაცემებს “Shape” კლასიდან და ახდენდეს area() მეთოდის ცვლილებას კონკრეტული ფიგურის ფართობის გამოსათვლელად. ეს ფიგურები შეიძლება იყოს:


‘Circle()’ (subclass)
ატრიბუტები:
	‘radius’ - (რიცხვი) - წრის რადიუსის შესანახად.
მეთოდები:
	constructor(name, radius) - კონსტრუქტორი რომელიც გამოიყენებს  ‘name’-სა და ‘radius’-ს.
‘area()’ - ზედგადაწერილი (ზედგადაწერა მოგიწევთ რადგან ზევით ეს როდესაც შევქმენით “Area calculation not implemented…” ეწერა და ზუსტად აქ ერთვება პოლიმორფიზმი) მეთოდი, წრის ფართობის საანგარიშოდ, შემდეგი ფორმულის გამოყენებით: ‘Math.PI * radius * radius’
‘Rectangle’ (subclass)
ატრიბუტები:
	‘width’ (რიცხვი) მართკუთხედის სიგანის ზომის შესანახად.
	‘height’ (რიცხვი) მართკუთხედის სიგრძის ზომის შესანახად.
მეთოდები:
	‘constructor(name, width, height)’ - კონსტრუქტორ მეთოდი რომელიც მოახდენს, ‘name, width, და height’ ატრიბუტების ინიციალიზირებას.
	‘area()’ - ზედგადაწერილი მეთოდი, რომელიც გამოითვლის მართკუთხედის ფართობს შემდეგი ფორმულით: ‘width * height’. */

class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }
    area() {
        return (`Area of ${this.name} with ${this.radius} radius = ${Math.PI * this.radius ** 2}`);
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    area() {
        return (`Area of ${this.name} with ${this.width} width and ${this.height} height  = ${this.width * this.height}`);
    }
}
class Triangle extends Shape {
    constructor(name, base, height) {
        super(name);
        this.base = base;
        this.height = height;
    }
    area() {
        return (`Area of ${this.name} with ${this.base} base and ${this.height} height = ${(this.base * this.height)/2}`);
    }
}

/* გატესტეთ პოლიმორფიზმი: შექმენით თითოეული ფიგურის “shape”-ის ობიექტები: მაგ. let triangle = new Triangle(.......), მოახდინეთ პოლიმორფიზმის დემონსტრირება “area()” მეთოდის გამოძახებით თითოეულ ფიგურაზე იქნება ეს სამკუთხედი, წრე თუ მართკუთხედი და გამოიტანეთ დაანგარიშებული ფიგურის ფართობი პლიუს ამ ფიგურის სახელი ეკრანზე.

კოდი უნდა იძლეოდეს რაღაც ესეთ შედეგს:

Area of Circle: 78.53981633974483
Area of Rectangle: 24
Area of Triangle: 6
Area calculation not implemented for generic shape */

let circle = new  Circle("circle", 6);
let rectangle = new  Rectangle("rectangle", 20, 8);
let triangle = new  Triangle("triangle", 15, 7);
let unknownShape = new  Shape("unknownShape");

console.log(circle.area(), '\n', rectangle.area(), '\n', triangle.area(), '\n', unknownShape.area());
    