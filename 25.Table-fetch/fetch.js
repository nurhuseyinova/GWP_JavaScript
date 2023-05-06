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
    .then((data) => {
      let filtered = data.filter((el) => el.id);

      let asc = "asc";
      idBtn.addEventListener("click", function () {
        let sorted;
        asc = !asc;
        if (asc) {
          sorted = filtered.sort((a, b) => a.id - b.id);
        } else {
          sorted = filtered.sort((a, b) => b.id - a.id);
        }
        console.log(sorted);
        // getApi()
      });
      // return filtered
      // console.log(filtered);
    });
}
sortApi();
