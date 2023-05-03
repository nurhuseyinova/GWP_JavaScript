let form = document.querySelector("#form");
let userName = document.querySelector("#username");
let usersEmail = document.querySelector("#email");
let usersPassword = document.querySelector("#password");
let check = document.querySelector("#checkbox");

let users = JSON.parse(localStorage.getItem("users")) || [];
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let data = {
    userName: userName.value,
    usersEmail: usersEmail.value,
    usersPassword: usersPassword.value,
    check: check.checked,
  };
  if (data.userName && data.usersEmail) {
    users.push(data);
    localStorage.setItem("Users", JSON.stringify(users));
  }
  console.log(users);
});
