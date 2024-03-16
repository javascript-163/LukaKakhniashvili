const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

function validate() {
  let name = document.getElementById('name').value;
  let lastname = document.getElementById('lastname').value;
  let email = document.getElementById('email').value;
  let username = document.getElementById('username').value;
  let pass = document.getElementById('pass').value;
  let confirmpass = document.getElementById('confirmpass').value;
  let error_message = document.querySelector('.error-message');
  let error = document.querySelector('.error');
  let nameError = document.getElementById('nameError');
  let surnameError = document.getElementById('surnameError');
  let usernameError = document.getElementById('usernameError');
  let emailError = document.getElementById('emailError');
  let passwordError = document.getElementById('passwordError');
  let confirmPasswordError = document.getElementById('confirmPasswordError');
  let done = document.querySelector('.done');

  if (!name || !lastname || !email || !username || !pass || !confirmpass) {
    error_message.innerHTML = 'გთხოვთ, შეავსოთ ყველა ველი';
    return false;
  }

  let storedData = localStorage.getItem('registrations');

  let georgianRegex = /^[\u10A0-\u10FF]+$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let usernameRegex = /^[a-zA-Z0-9]+$/;
  let passRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

  if (!georgianRegex.test(name)) {
    document.getElementById('name').style.borderColor = 'red';
    nameError.innerHTML = "არავალიდური ფორმატი";
    return false;
  }

  if (!georgianRegex.test(lastname)) {
    document.getElementById('lastname').style.borderColor = 'red';
    surnameError.innerHTML = "არავალიდური ფორმატი";
    return false;
  }

  if (!emailRegex.test(email)) {
    document.getElementById('email').style.borderColor = 'red';
    emailError.innerHTML = "არავალიდური ფორმატი";
    return false;
  }

  if (!usernameRegex.test(username)) {
    document.getElementById('username').style.borderColor = 'red';
    usernameError.innerHTML = "არავალიდური ფორმატი";
    return false;
  }

  if (!passRegex.test(pass)) {
    document.getElementById('pass').style.borderColor = 'red';
    passwordError.innerHTML = "პაროლი სუსტია";
    return false;
  }

  if (pass !== confirmpass) {
    document.getElementById('confirmpass').style.borderColor = 'red';
    confirmPasswordError.innerHTML = "განმეორებითი პაროლი არასწორია";
    return false;
  }

  storedData = JSON.parse(localStorage.getItem('registrations')) || [];

  let existingUser = storedData.find(function (user) {
    return user.username === username || user.email === email;
  });

  if (existingUser) {
    document.getElementById("loader2").style.display = "block";
    document.querySelector(".signup_form").style.opacity = "30%";
    setTimeout(function () {
      let registerDone = document.querySelector(".done");
      let registerError = document.querySelector(".error");
      registerError.innerHTML = 'მოცემული ელ-ფოსტით ან მომხმარებლის სახელით ანგარიში უკვე შექმნილია';
      registerDone.innerHTML = " ";
      document.getElementById("loader2").style.display = "none";
      document.querySelector(".signup_form").style.opacity = "100%";
    }, Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000);
    return false;
  }

  document.getElementById("loader2").style.display = "block";
  document.querySelector(".signup_form").style.opacity = "30%";
  setTimeout(function () {
    let registerDone = document.querySelector(".done");
    let registerError = document.querySelector(".error");
    registerError.innerHTML = " ";
    registerDone.innerHTML = "რეგისტრაცია წარმატებით დასრულდა. გთხოვთ, გაიაროთ ავტორიზაცია";
    document.getElementById("loader2").style.display = "none";
    document.querySelector(".signup_form").style.opacity = "100%";
  }, Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000);

  storedData.push({
    name: name,
    lastname: lastname,
    email: email,
    username: username,
    pass: pass
  });
  localStorage.setItem('registrations', JSON.stringify(storedData));
  return true;
}






