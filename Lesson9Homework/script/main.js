/*
შექმენით ერთგვარი ტექსტური ფაილის ანალიზატორი.
1. მომხმარებელს მოთხოვეთ აირჩიოს სასურველი ტექსტური ფაილი, read file-ზე დაჭერისას კი წაიკითხეთ ამ ფაილის კონტენტი.
2. დაადგინეთ ფაილში არსებული საერთო სიმბოლოოების რაოდენობა
Total symbols: 150,
3. დაადგინეთ ფაილში არსებული საერთო სიტყვების ოდენობა
Total Words: 78
4. დაადგინეთ ფაილში არსებული ყველაზე გრძელი და ყველაზე მოკლე სიტყვა
Longest Word: beautiful
Shortest Word: sad
5. დაადგინეთ ფაილში არსებული სიტყვების საშუალო არითმეტიკული ზომა (საშუალო ზომა გამოითვლება თითოეული სიტყვის ზომა გაყოფილი მათ საერთო რაოდენობაზე)
*/
function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function (e) {
            resolve(e.target.result);
        };
        reader.onerror = function (e) {
            reject(new Error('Error reading the file'));
        };
        if (file.type === "image/jpeg" || file.type == "image/jpg" || file.type == "image/gif" || file.type == "image/png"
            || file.type === "video/mp4") {
            reader.readAsDataURL(file);
        } else if (file.type === "text/plain") {
            reader.readAsText(file);
        } else alert('Please provide text, image or video document!');
    });
}

function symbolsCounter(txt) {
    let charDisplay = document.getElementById("total_symbols");
    charDisplay.innerText = `${txt.length}`;
}

//ჩავთვალე რომ მხოლოდ სფეისებითაა გამოყოფილი
function wordsCounter(txt) {
    let wordDisplay = document.getElementById("total_words");
    let wordCount = txt.split(" ").length;
    wordDisplay.innerText = `${wordCount}`;
}

function shortestAndLongest(txt) {
    let shortestDisplay = document.getElementById("shortest_word");
    let longestDisplay = document.getElementById("longest_word");
    let words = txt.split(" ");
    let longest = words.reduce((longest, currently) => {
        return currently.length > longest.length ? currently : longest
    }, "");


    let shortest = words.reduce((shortest, currently) => {
        return currently.length < shortest.length ? currently : shortest
    }, longest);


    longestDisplay.innerText = `${longest}`;
    shortestDisplay.innerText = `${shortest}`;
}

function average(txt) {
    let averageDisplay = document.getElementById("average_length");
    let words = txt.split(" ");

    let lettersSum = 0;

    words.forEach(word => {
        lettersSum += word.length;
    });

    let average = (lettersSum / words.length).toFixed(3);

    averageDisplay.innerText = `${average}`;
}

function loadFile() {
    const fileInput = document.querySelector('.file_input');
    const file = fileInput.files[0];
    if (file) {
        readFile(file).then((content) => {
            document.querySelector('.text').value = content;
            symbolsCounter(content);
            wordsCounter(content);
            shortestAndLongest(content);
            average(content);

        }).catch((error) => {
            console.error(error.message);
        })
    } else {
        document.querySelector('.text').value = "Error! Please select file";
    }
}

/*
შექმენით საიტი სადაც მომხმარებელს შეეძლება აირჩიოს მისთვის სასურველი სურათი, შემდეგში კი გამოიტანეთ ეს სურათი ეკრანზე.
*/
function loadImage() {
    let picElement = document.getElementById("ex2_img");
    const imgInput = document.querySelector('.img_input');
    const img = imgInput.files[0];
    if (img) {
        readFile(img).then((content) => {
            picElement.src = content;
            picElement.style.display = "block";
        }).catch((error) => {
            console.error(error.message);
        })
    }
}

/*
შექმენით საიტი, სადაც მომხმარებელს შეეძლება ატვირთოს როგორც ტექსტური, ისე ფოტო, ისე ვიდეო ფაილები.
მინიშნება: ფოტოს გამოსატანად ჩვენს განხილულ მაგალითში გამოვიყენეთ <img> ტეგი, ვიდეოსთვის მოგიწევთ გამოიყენოთ <video> ტეგი.
*/
function removeOtherChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function allTypeLoad() {
    const contentWrapper = document.querySelector(".content_wrapper");
    const allTypeInput = document.querySelector('.all_type_input');
    const element = allTypeInput.files[0];
    if (element) {
        readFile(element).then((content) => {
            if (element.type === "text/plain") {
                let newText = document.createElement("p");
                newText.innerText = content;

                removeOtherChildren(contentWrapper);
                contentWrapper.appendChild(newText);

            } else if (element.type === "image/jpeg"
                || element.type == "image/jpg"
                || element.type == "image/gif"
                || element.type == "image/png") {
                let newImage = document.createElement("img");
                newImage.src = content;
                newImage.alt = "ex3_img";

                removeOtherChildren(contentWrapper);
                contentWrapper.appendChild(newImage);
            } else {
                let newVideo = document.createElement("video");
                newVideo.width = 360;
                newVideo.controls = true;
                let newSource = document.createElement("source");
                newSource.src = content;
                newSource.type = "video/mp4";
                newVideo.appendChild(newSource)

                removeOtherChildren(contentWrapper);
                contentWrapper.appendChild(newVideo);
            }
        }).catch((error) => {
            console.log(error.message)
        })
    }
}