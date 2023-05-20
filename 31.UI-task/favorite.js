let row = document.querySelector(".favRow");
let favUser = JSON.parse(localStorage.getItem("user")) || [];

function favAllData() {
  row.innerHTML = "";

  favUser.forEach((element) => {
    row.innerHTML += `
<div class="col col-3 my-5">
<div class="card" style="width: 10rem;">
  <img src="${element.photo}" class="card-img-top" alt="..." style="height: 100px;">
  <div class="card-body">
    <h5 class="card-title">Full name: ${element.firstName}${element.lastName}</h5>
    <p class="card-text">Email: ${element.email} </p>
    <p class="card-text">Date: ${element.date}</p>
    <a href="#" class="btn btn-primary" onclick=removeBtn("${element.id}")>Remove fav</a>
  </div>
</div>
</div>

`;
  });
}
favAllData();

function removeBtn(id) {
  favUser = favUser.filter((el) => el.id != id);
  localStorage.setItem("user", JSON.stringify(favUser));
  favAllData();
}
