import { books } from "./data.js";
let row = document.querySelector(".row");
let fav = JSON.parse(localStorage.getItem("product")) || [];
fav.forEach((item) => {
  row.innerHTML += `
    <div class="col-3 my-4">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">
         Publisher: ${item.publisher}
        </p>
         <i><p>Year: ${item.year}</p></i>
        <button class="btn btn-danger" id=${item.id}>Remove fav</button>
      </div>
    </div>
  </div>
    `;
});

let allRemoveBtns = document.querySelectorAll(".btn-danger");
allRemoveBtns.forEach((elem) => {
  elem.addEventListener("click", function () {
    // console.log("Hello")
    fav = JSON.parse(localStorage.getItem("product"));
    let update = fav.filter((el) => el.id != elem.getAttribute("id"));
    localStorage.setItem("product", JSON.stringify(update));
    this.parentElement.parentElement.parentElement.remove();
  });
});


