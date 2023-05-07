let API = `https://northwind.vercel.app/api/orders`;
let tBody = document.querySelector("#tbody");
let idBtn = document.querySelector("#id");

function getApi() {
  tBody.innerHTML = "";
  fetch(API)
    .then((info) => info.json())
    .then((data) =>
      data.forEach((el) => {
        let trEL = document.createElement("tr");
        trEL.innerHTML = `
        <td>${el.id}</td>
        <td>${el.shipName}</td>
        <td>${el.orderDate}</td>
        <td>${el.shipAddress.city}</td>
        <td><button  onclick=deleteBtn(${el.id})>Delete</button></td>
        
        `;

        tBody.append(trEL);
      })
    );
}
getApi();

function deleteBtn(id) {
  fetch(`${API}/${id}`, {
    method: "DELETE",
  }).then(() => getApi());
}

function sortApi() {
  fetch(`${API}`)
    .then((info) => info.json())
    .then((data) => data.filter((el) => el.id))
    .then((result) => {
      let asc = "asc";
      let sorted;
      idBtn.addEventListener("click", function () {
        asc = !asc;
        if (asc) {
          sorted = result.sort((a, b) => a.id - b.id);
        } else {
          sorted = result.sort((a, b) => b.id - a.id);
        }

        console.log(sorted);
      });
    });
}
sortApi();
