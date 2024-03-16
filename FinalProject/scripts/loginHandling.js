function handleLogin() {
  let username = document.getElementById("login_username").value;
  let password = document.getElementById("login_pass").value;
  let userExists = false;
  let usersData = JSON.parse(localStorage.getItem('registrations')) || [];

  for (let user of usersData) {
    if (user.username === username && user.pass === password) {
      userExists = true;
      break;
    }
  }

  if (!userExists) {
    document.getElementById("loader").style.display = "block";
    document.querySelector(".login_form").style.opacity = "30%";
    let loginError = document.querySelector(".login_error");
    setTimeout(function () {
      loginError.style.display = "block";
      loginError.innerHTML = "მომხმარებელი ან პაროლი არასწორია";
      document.getElementById("loader").style.display = "none";
      document.querySelector(".login_form").style.opacity = "100%";
    }, Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000);
    return false;
  }

  // ლოადერი
  document.getElementById("loader").style.display = "block";
  document.querySelector(".login_form").style.opacity = "30%";

  // წარმატებული ავტორიზაცია
  setTimeout(function () {
    window.location.href = "dashboard.html";
  }, Math.floor(Math.random() * (5000 - 2000 + 1)) + 2000);

  return false;
}