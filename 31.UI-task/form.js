let API_URL = `http://localhost:8000/data`;
let form = document.querySelector("#userForm");
let firstName = document.querySelector("#firstname");
let lastName = document.querySelector("#lastname");
let emailAddress = document.querySelector("#email");
let file = document.querySelector("#file");
let submitBtn = document.querySelector("#submit");
let dateBtn = new Date();
let editId = new URLSearchParams(window.location.search).get("id");
let editStatus = false;
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: emailAddress.value,
    photo: `./image/${file.value.split("\\")[2]}`,
    date: dateBtn.toLocaleString(),
  };
  if (firstName.value && lastName.value && emailAddress.value && file.value) {
    if (!editStatus) {
      axios.post(`${API_URL}`, obj);
    } else {
      axios.patch(`${API_URL}/${editId}`, obj);
      submitBtn.innerHTML = "Submit";
      editStatus = false;
    }
    window.location = "./index.html";
  }
  console.log(eror);
});

axios(`${API_URL}/${editId}`).then((res) => {
  editStatus = true;
  firstName.value = res.data.firstName;
  lastName.value = res.data.lastName;
  emailAddress.value = res.data.email;
  file.value = res.data.photo;
  submitBtn.innerHTML = "Edit";
});
