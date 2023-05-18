let API_URL = ` https://restcountries.com/v3.1/name/`;
let detail = document.querySelector(".detailCard");
let names=new URLSearchParams(window.location.search).get("name")

async function detailData(names){
    let res=await axios(`${API_URL}${names}`)
    let data=await res.data
    detail.innerHTML=`
    <div class="card" style="width: 15rem">
            <img
              src="${data.flags.svg}"
              class="card-img-top"
              alt="..."
              style="height: 200px"
            />
            <div class="card-body">
              <h5 class="card-title">${data.name}</h5>
              <p class="card-text">Region: ${data.region}</p>
              <p class="card-text">Population: ${data.population}</p>
              <a href="#" class="btn btn-primary">Go Back</a>
            </div>
          </div>
        </div>
    `
}
detailData()





