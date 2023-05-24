let FAV_URL=`http://localhost:8000/favorits`;

let card=document.querySelector(".fav");

async function getFavData(){
  
    let res=await axios(FAV_URL);
    let data= await res.data;
    data.forEach(element => {
        card.innerHTML+=`
        <div class="col col-12 col-sm-12 col-md-6 col-lg-4 my-3 box">
                        <img src="./assets/image/b4.jpg" alt="">
                        <div class="box-note">
                            <p>${element.title}</p>
                            <p>${element.price}$</p>
                            <button class="btn btn-danger" onclick=removeBtn("${element.id}")>Remove</button>
                               </div>
                    </div>
        
        `
        
    });
}getFavData()

function removeBtn(id,btn){
    axios.delete(`${FAV_URL}/${id}`)
    btn.closest("box").remove()
}



