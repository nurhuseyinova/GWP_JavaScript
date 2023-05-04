import { books } from "./data.js";
// let row = document.querySelector(".row");
// let addBtn = document.querySelectorAll(".btn-primary");

// let data = JSON.parse(localStorage.getItem("product")) || [];
// books.forEach((e) => {
//   row.innerHTML += `
//   <div class="col col-3 mt-2">
//           <div class="card" style="width: 18rem">
//             <div class="card-body">
//               <h5 class="card-title">${e.title}</h5>
//               <p class="card-text">Publisher:
//               ${e.publisher}
//               </p>
//               <p class="year">Year: ${e.year}</p>
//               <button class="btn btn-primary" id=${e.id}>Add to Favorites</button>
//             </div>
//           </div>
//         </div>
//   `;
// });
// addBtn.forEach((el) => {
//   el.addEventListener("click", function () {
//     let selObj = data.find((e) => e.id == el.id);
//     data.includes(selObj);
//     if (!data.includes(selObj)) {
//       let product = books.find((obj) => obj.id == el.id);
//       data.push(product);
//       localStorage.setItem("product", JSON.stringify(data));
//     } else {
//       alert("This product is already available!");
//     }
//     console.log("Hello");
//   });
// });


let row = document.querySelector(".row");
let data = JSON.parse(localStorage.getItem("product")) || [];
books.forEach((item) => {
  row.innerHTML += `
    <div class="col-3 my-4">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">${item.title}</h5>
        <p class="card-text">
         Publisher: ${item.publisher}
        </p>
         <i><p>Year: ${item.year}</p></i>
        <button class="btn btn-primary" id=${item.id}>Add to Favs</button>
      </div>
    </div>
  </div>
    `;
});

let allAddBtns = document.querySelectorAll(".btn-primary");
allAddBtns.forEach((elem) => {
  elem.addEventListener("click", function () {
    let selectedObj = data.find((item) => item.id == elem.id);
    data.includes(selectedObj);
    if (!data.includes(selectedObj)) {
      let product = books.find((obj) => obj.id === +elem.id);
      data.push(product);
      localStorage.setItem("product", JSON.stringify(data));
    } else {
      alert("You have already added this book!!");
    }
  });
});


