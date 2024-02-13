//EXERCISE 1
/* შექმენით გვერდი, სადაც იქნება წარმოდგენილი:
1. რაიმე ფოტო <img> ტეგში.
2 სხვადასხვა ღილაკი, 1. ფოტოს ზომის გადიდების; 2. ფოტოს ზომის შემცირების;

DOM-ის მეშვეობით გააკეთეთ ისე, რომ ფოტოს ზომის გაზრდისა და ზომის შემცირების ღილაკებზე დაჭერით არსებული სურათის ზომა (width) შეიცვალოს.
*/
function sizeIncreaser() {
    let image = document.getElementById("image");
    let width = image.width;
    let height = image.height;
    let newWidth = image.width * 1.1;
    let newHeight = image.height * 1.1;
    image.style.width = newWidth + 'px';
    image.style.height = newHeight + 'px';
}
function sizeReducer() {
    let image = document.getElementById("image");
    let width = image.width;
    let height = image.height;
    let newWidth = image.width * 0.9;
    let newHeight = image.height * 0.9;
    image.style.width = newWidth + 'px';
    image.style.height = newHeight + 'px';
}

//EXERCISE 2
/* შექმენით ვებგვერდი რომელზეც იქნება მოცემული ტექსტის ფერის შემცვლელი ღილაკი. მოცემულობა ესეთია:
1. მომხმარებელი აჭერს ღილაკზე, ღილაკი ცვლის ფერს.
2. ეკრანზე მოცემული ტექსტი იცვლება იმ ფერის სახელით რა ფერის ტექსტიცაა ეკრანზე გამოტანილი.
*/
function colorChanger(color) {
    document.getElementById('paragraph').style.color = color;
}

//EXERCISE 3
/* შექმენით ვებგვერდი რომელზეც იქნება მოცემული კონტენტის ჩვენებისა და დამალვის ღილაკი. მოცემულ ღილაკზე დაჭერისას უნდა მოხდეს კონტენტის გამოტანა ეკრანზე თუ კონტენტი დამალულია. ხოლო თუ კონტენტი ჩანს ეკრანზე ამ შემთხვევაში მისი დამალვა.
*/
function showContent() {
    document.getElementById('title').style.display = 'block';
}
function hideContent() {
    document.getElementById('title').style.display = 'none';
}