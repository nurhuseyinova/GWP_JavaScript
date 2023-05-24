let API_URL=`http://localhost:8000/data`;
let card=document.querySelector(".api");
let search=document.querySelector("#search");
let sort=document.querySelector(".sort");
let filtered=[]
let sorted=[]

async function getData(){
    card.innerHTML="";
    let res=await axios(API_URL);
    let data= await res.data;
    sorted=data
    filtered=(filtered.length||search.value)?filtered:data;
    filtered.forEach(element => {
        card.innerHTML+=`
        <div class="col col-12 col-sm-12 col-md-6 col-lg-4 my-3 box">
                        <img src="./assets/image/b4.jpg" alt="">
                        <div class="box-note">
                            <p>${element.title}</p>
                            <p>${element.price}$</p>
                            <button class="btn btn-danger" onclick=deleteBtn(${element.id})>Delete</button>
                            <button class="btn btn-warning" onclick=addFavBtn(${element.id})>Add Fav</button>
                            <a herf="./form.html/?id=${element.id}" class="btn btn-success">Edit</a>
                        </div>
                    </div>
        
        `
        
    });
}getData()

function deleteBtn(id,btn){
    axios.delete(`${API_URL}/${id}`)
    btn.closest("box").remove()
}

async function addFavBtn(id){
    let res=await axios(`${API_URL}/${id}`);
    let obj= await res.data
    await axios.post(`http://localhost:8000/favorits`,obj)

    window.location="./favorite.html"

}
search.addEventListener("input",async function(e){
    let res=await axios(API_URL);
    let data= await res.data;
    filtered=data.filter(el=>{
        return el.title.toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    })
    getData(filtered)
    console.log(filtered);


})

let asc=true
sort.addEventListener("click",async function(e){
    asc=!asc
    let res=await axios(API_URL);
    let data= await res.data;
    if(!asc){
        sorted=data.sort((a,b)=>a.price-b.price);

        sort.innerHTML="Dec"
        filtered=sorted;
    }else{
        sorted=data.sort((a,b)=>b.price-a.price);
        sort.innerHTML="Asc"
        filtered=sorted;

    }
    getData(filtered)
    console.log(filtered);


})

