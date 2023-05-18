let API_URL = `https://restcountries.com/v2/all`;
let card = document.querySelector(".commonCard");
let select = document.querySelector("#select");
let search = document.querySelector("#search");

async function getData() {
  let res = await axios(API_URL);
  let data = await res.data;
  getAllData(data);
}
getData();
function getAllData(arr) {
  card.innerHTML = "";
  arr.forEach((element) => {
    card.innerHTML += `
        <div class="card" style="width: 17rem">
            <img
              src="${element.flags.svg}"
              class="card-img-top"
              alt="..."
              style="height: 200px"
            />
            <div class="card-body">
              <h5 class="card-title">${element.name}</h5>
              <p class="card-text">Region: ${element.region}</p>
              <p class="card-text">Population ${element.population}</p>
              <a href="./detail.html/?name=${element.name}" class="btn btn-primary">Detail</a>
            </div>
        
        `;
  });
}

search.addEventListener("input", async function (element) {
  let res = await axios(`${API_URL}`);
  let data = await res.data;
  let filtered = data.filter((item) => {
    return item.name
      .toLocaleLowerCase()
      .includes(element.target.value.toLocaleLowerCase());
  });
  getAllData(filtered);
});

select.addEventListener("change", async function (e) {
  let res = await axios(`${API_URL}`);
  let data = await res.data;
  let choised = data.filter((item) => {
    return item.region
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase());
  });
  getAllData(choised)
});
