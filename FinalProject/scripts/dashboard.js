document.addEventListener("DOMContentLoaded", function () {
    const userButton = document.getElementById("user-button");
    const dropdownMenu = document.getElementById("dropdown-menu");

    userButton.addEventListener("click", function () {
        if (dropdownMenu.style.display === "none") {
            dropdownMenu.style.display = "block";
        } else if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
        }
    });

    //ლისტის გაქრობა მის გარეთ ქლიქის დროს
    window.addEventListener("click", function (event) {
        if (!event.target.closest("#user-button") && !event.target.closest("#dropdown-menu")) {
            dropdownMenu.style.display = "none";
        }
    });
});

let username = document.getElementById("dashboard_username");

let usersData = new Array();
usersData = JSON.parse(localStorage.getItem('registrations')) ? JSON.parse(localStorage.getItem('registrations')) : [];

let user = usersData.find(function (user) {
    username.innerText = user.name + " " + user.lastname;
});

$(document).ready(function () {
    var ipVisible = false;

    //IP მისამართის ჩვენება/დამალვა
    function toggleIpAddress() {
        if (ipVisible) {
            $('#ipAddress').empty();
            $('#toggleIpBtn').text('IP მისამართის ჩვენება');
        } else {
            $.get('https://ipinfo.io', function (response) {
                $('#ipAddress').text('თქვენი IP მისამართი: ' + response.ip);
                $('#toggleIpBtn').text('IP მისამართის დამალვა');
            }, 'jsonp');
        }
        ipVisible = !ipVisible;
    }

    $('#toggleIpBtn').click(function () {
        toggleIpAddress();
    });
});

const images = document.querySelectorAll('.slider-image');
const dots = document.querySelectorAll('.dot');
let currentImageIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentImageIndex = index;
        showImage(currentImageIndex);
    });
});

//ავტომატური გადასვლა შემდეგ ფოტოზე ყოველ 5 წამში
setInterval(nextImage, 5000);


document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const toggleCardsBtn = document.getElementById('toggle-cards-btn');
  
    //მხოლოდ პირველი ქარდის ჩვენება
    for (let i = 3; i < cards.length; i++) {
      cards[i].style.display = 'none';
    }
  
    //დამატებითი ქარდების ჩვენება
    function toggleCards() {
      for (let i = 3; i < cards.length; i++) {
        const card = cards[i];
        if (card.style.display === 'none') {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      }
  
      if (toggleCardsBtn.textContent === 'მეტის ჩვენება') {
        toggleCardsBtn.textContent = 'ნაკლების ჩვენება';
      } else {
        toggleCardsBtn.textContent = 'მეტის ჩვენება';
      }
    }
  
    toggleCardsBtn.addEventListener('click', toggleCards);
  });