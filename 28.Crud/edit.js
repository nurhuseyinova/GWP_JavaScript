let API_URL = `http://localhost:8000/users`;
let inputAll = document.querySelectorAll("input");
let form = document.querySelector("form");
let editId;

let id = new URLSearchParams(window.location.search).get("id");

async function editData() {
  let res = await axios(API_URL);
  let data = await res.data;
  inputAll[0].value = data.firstName;
  inputAll[1].value = data.email;
  inputAll[2].value = data.password;
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let dataObj = {
    firstName: inputAll[0].value,
    email: inputAll[1].value,
    password: inputAll[2].value,
  };
  if (inputAll[0].value && inputAll[1].value) {
    axios.patch(`${API_URL}/${id}`, dataObj);
    window.location = "index.html";
  }
});
