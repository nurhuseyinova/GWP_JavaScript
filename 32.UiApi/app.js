let API_URL=`https://northwind.vercel.app/api/suppliers`


let tbody=document.querySelector("#tbody")

async function getData(){
    tbody.innerHTML=""
    let res=await axios(API_URL)
    let data=await res.data
    data.forEach(element => {

      tbody.innerHTML+=`
      <tr>
      <td>${element.id}</td>
      <td>${element.companyName}</td>
      <td>${element.contactTitle}</td>
      <td>${element.address.city}</td>
      <td>
        <a href="./form.html?id="${element.id}"" class="edit">Edit</a>
          <a href="#" class="fav">Fav</a>
          <button onclick=deleteBtn("${element.id}",this) class="delete">Delete</button>
      </td>
      
  </tr>
      `  
    });


}getData()

function deleteBtn(id,btn) {
    axios.delete(`${API_URL}/${id}`);
    btn.closest("tr").remove();
    console.log(btn);
    
}





