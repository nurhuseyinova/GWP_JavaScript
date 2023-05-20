let bar = document.querySelector(".fa-bars");
let head = document.querySelector(".head");
let clickNav = document.querySelector(".headNav");
bar.addEventListener("click", function () {
  clickNav.classList.toggle("show");

  bar.classList = "fa-solid fa-bars"
    ? (bar.classList = "fa-solid fa-xmark")
    : (bar.classList = "fa-solid fa-bars");
});
let API_URL = `http://localhost:8000/data`;
let tbody = document.querySelector("#tbody");
let card = document.querySelector("#mainCard");

async function getData() {
  tbody.innerHTML = "";
  let res = await axios(API_URL);
  let data = await res.data;
  console.log(data);
  data.forEach((element) => {
    tbody.innerHTML += `
    <tr>
    <td>${element.id}</td>
    <td><img src="${element.photo}" alt="" /></td>
    <td>${element.firstName}</td>
    <td>${element.lastName}</td>
    <td>${element.email}</td>
    <td>${element.date}</td>
    <td>
      <a href="./form.html/?id=${element.id}" class="btn btn-success" >Edit</a>
      
      <a href="#" onclick=favData("${element.id}") class="btn btn-primary" >Fav</a>
      <button class="btn btn-danger" onclick=deleteBtn("${element.id}",this)>Delete</button>
    </td>
  </tr>
    
    `;
    card.innerHTML += `
    <span class="commoncard">
    <div class="card d-flex">
      <div class="iddate">
        <span class="id">Id: ${element.id}</span>
        <span class="date">Date: ${element.date}</span>
      </div>
      <div class="idimg">
        <div class="imgnote">
          <img src="${element.photo}" alt="" />
          <div class="name">
            <h3>${element.firstName} ${element.lastName}</h3>
            <p>${element.email}</p>
          </div>
        </div>
        <div class="btndiv">
          <a href="./form.html/?id=${element.id}" class="btn btn-success" >Edit</a>
        
          <a href="#" onclick=favData("${element.id}") class="btn btn-primary" >Fav</a>
          <button class="btn btn-danger" onclick=deleteBtn("${element.id}")>Delete</button>
        </div>
      </div>
    </div>
  </span>`;
  });
}
getData();

function deleteBtn(id, btn) {
  axios.delete(`${API_URL}/${id}`);
  btn.closest("span").remove();
  btn.closest("tr").remove();
  console.log(id);
}
let choosied;
let favUser = JSON.parse(localStorage.getItem("user")) || [];
async function favData(id) {
  let res = await axios(`${API_URL}/${id}`);
  let data = await res.data;
  choosied = favUser.find((el) => el.id === data.id);
  if (!choosied) {
    favUser.push(data);
    localStorage.setItem("user", JSON.stringify(favUser));
  } else {
    alert("This user already alive!");
  }
  window.location = "./favorite.html";
}
console.log(favUser);
