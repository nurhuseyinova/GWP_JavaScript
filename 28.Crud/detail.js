let API_URL = `http://localhost:8000/users`;
let detail = document.querySelector(".detail");

let id = new URLSearchParams(window.location.search).get("id");
async function detailData() {
  let res = await axios(`${API_URL}/${id}`);
  detail.innerHTML += `
        <h5>${res.data.firstName}</h5>
        <h5>${res.data.email}</h5>
        <h5>${res.data.password}</h5>
        <button class="btn btn-info" onclick=goBack()>Go Back</button>
        
        
        `;
}
detailData();

function goBack() {
  window.location = "index.html";
}
