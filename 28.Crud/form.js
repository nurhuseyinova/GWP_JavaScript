let API_URL = `http://localhost:8000/users`;
let inputAll = document.querySelectorAll("input");
let form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let dataObj = {
    firstName: inputAll[0].value,
    email: inputAll[1].value,
    password: inputAll[2].value,
  };
  if (inputAll[0].value && inputAll[1].value) {
    axios.post(API_URL, dataObj);
    window.location = "index.html";
  }
});
