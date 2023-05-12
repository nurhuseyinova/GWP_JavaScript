let API_URL = `http://localhost:8000/users`;

let cardBox = document.querySelector(".container");

async function getData() {
  cardBox.innerHTML = "";
  let res = await axios(API_URL);
  let data = await res.data;
  data.forEach((element) => {
    cardBox.innerHTML += `
    <span class="card m-3">
    <div class="card-body">
          <h5 class="card-title">${element.firstName}</h5>
            <h6 class="card-subtitle mb-2 text-body-secondary">${element.email.slice(
              0,
              10
            )}...</h6>
          <p>${element.password
            .slice(-4)
            .padStart(element.password.length, "*")}</p>
            <a href="detail.html?id=${
              element.id
            }" class="card-link btn btn-primary">Detail</a><br><br>
          <a href="edit.html?id=${
            element.id
          }" class="card-link btn btn-success">Edit</a>
          <button onclick=deleteBtn(${
            element.id
          }) class="btn btn-danger">Delete</button>
        </div>
        </span>
        `;
  });
}
getData();
function deleteBtn(id, btn) {
  axios.delete(`${API_URL}/${id}`);
  btn.closest("span").remove();
}
