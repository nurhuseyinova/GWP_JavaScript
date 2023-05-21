let API_URL = `https://northwind.vercel.app/api/suppliers`;

let form = document.querySelector("form");
let companyName = document.querySelector("#companyname");
let contactTitle = document.querySelector("#companytitle");
let address = document.querySelector("#address");
let submit = document.querySelector("#submit");
let id=new URLSearchParams(window.location.search).get("id")
let editStatus=true;
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let obj = {
    companyName: companyName.value,
    contactTitle: contactTitle.value,
    address: {
      city: address.value,
    }
  };
  if (companyName.value && contactTitle.value && address.value) {
    if(!editStatus){
      axios.post(`${API_URL}`, obj);
   } 
   else{
    axios.patch(`${API_URL}/${id}`, obj);
    submit.innerHTML="Submit";
    editStatus=false
  }
    companyName.value="";
    contactTitle.value="";
    address.value="";
  }
  console.log(eror);
});


axios(`${API_URL}/${id}`).then(res=>{
     for(let i=0;i<res.data.length;i){

   
  
  

  companyName.value=res.data[i].companyName;
  contactTitle.value=res.data[i].contactName;}
  // address.value=res.data.address.city;
  submit.innerHTML="Edit"
  editStatus=true;

  
console.log(res.data);
})