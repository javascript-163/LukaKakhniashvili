const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");

signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});
const togglePassword = document.querySelector('#togglePassword');
const togglePasswordConfirm = document.querySelector('#togglePasswordConfirm');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', myFunction)
togglePasswordConfirm.addEventListener('click', myFunction1)

function myFunction() {
    let pass = document.getElementById("pass");
    if (pass.type === "password") {
        pass.type = "text";
        show.innerHTML = "გამოაჩინე პაროლი"
    } else {
        pass.type = "password";
        show.innerHTML = "დამალე პაროლი"
    }
}
function myFunction1() {
    let pass = document.getElementById("confirmpass");
    if (pass.type === "password") {
        pass.type = "text";
        show.innerHTML = "გამოაჩინე პაროლი"
    } else {
        pass.type = "password";
        show.innerHTML = "დამალე პაროლი"
    }
}

function validate() {
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let pass = document.getElementById('pass').value;
    let confirmpass = document.getElementById('confirmpass').value;
    let error = document.querySelector('.error');
    let done = document.querySelector('.done');

    if (!name || !lastname || !email || !username || !pass || !confirmpass) {
        error.innerHTML = 'გთხოვთ, შეავსოთ ყველა ველი';
        return false;
    }

    let storedData = localStorage.getItem('registrations');
    if (storedData) {
        storedData = JSON.parse(storedData);
        if (storedData.email === email) {
            document.getElementById('email').style.borderColor = 'red';
            error.innerHTML = "მოცემული ელ-ფოსტა უკვე რეგისტრირებულია";
            return false;
        }
        if (storedData.username === username) {
            document.getElementById('username').style.borderColor = 'red';
            error.innerHTML = "მოცემული მომხმარებლის სახელი უკვე რეგისტრირებულია";
            return false;
        }
    }

    let georgianRegex = /^[\u10A0-\u10FF]+$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let usernameRegex = /^[a-zA-Z0-9]+$/;
    let passRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

    if (!georgianRegex.test(name)) {
        document.getElementById('name').style.borderColor = 'red';
        error.innerHTML = "არავალიდური ფორმატი";
        return false;
    }

    if (!georgianRegex.test(lastname)) {
        document.getElementById('lastname').style.borderColor = 'red';
        error.innerHTML = "არავალიდური ფორმატი";
        return false;
    }

    if (!emailRegex.test(email)) {
        document.getElementById('email').style.borderColor = 'red';
        error.innerHTML = "არავალიდური ფორმატი";
        return false;
    }

    if (!usernameRegex.test(username)) {
        document.getElementById('username').style.borderColor = 'red';
        error.innerHTML = "არავალიდური ფორმატი";
        return false;
    }

    if (!passRegex.test(pass)) {
        document.getElementById('pass').style.borderColor = 'red';
        error.innerHTML = "პაროლი სუსტია";
        return false;
    }

    if (pass !== confirmpass) {
        document.getElementById('confirmpass').style.borderColor = 'red';
        error.innerHTML = "განმეორებითი პაროლი არასწორია";
        return false;
    }

    storedData = JSON.parse(localStorage.getItem('registrations')) || [];

    let existingUser = storedData.find(function (user) {
        return user.username === username || user.email === email;
    });

    if (existingUser) {
        error.innerHTML = "განმეორებითი პაროლი არასწორია";
        error.innerHTML ='მოცემული ელ-ფოსტით ან მომხმარებლის სახელით ანგარიში უკვე შექმნილია';
        return false;
    }
    error.innerHTML = "";
    done.innerHTML = "რეგისტრაცია წარმატებით დასრულდა";

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

function login() {
    let username = document.getElementById('loginUsername').value;
    let password = document.getElementById('loginPassword').value;
    let errorLogin = document.querySelector('.error_login');
    let successLogin = document.querySelector('.success_login')

    if (!username || !password) {
        document.getElementById('loginUsername').style.borderColor = 'red';
        document.getElementById('loginPassword').style.borderColor = 'red';
        errorLogin.innerHTML = "გთხოვთ, შეიყვანოთ მომხმარებელი და პაროლი";
        return false;
    }

    let storedData = localStorage.getItem('registrations');
    if (storedData) {
        storedData = JSON.parse(storedData);
        if (storedData.username === username && storedData.pass === password) {
            document.querySelector('.form-container, .wrapper').style.display = 'none';
            successLogin.innerHTML = "კაი ხარ !";
            successLogin.style.color = "#fff";
            successLogin.style.fontSize = "150px";
            return true;
        } else if (storedData.username === username && storedData.pass !== password) {
            document.getElementById('loginUsername', 'loginPassword').style.borderColor = 'red';
            errorLogin.innerHTML = "მომხმარებელი ან პაროლი არასწორია";
            return false;
        }
        else {
            document.getElementById('loginUsername').style.borderColor = 'red';
            errorLogin.innerHTML = "მოცემული მომხმარებელი არ არის რეგისტრირებული";
            return false;
        }
    }
}