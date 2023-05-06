// let URL = `https://northwind.vercel.app/api/orders`;
// function getInfo(){
// fetch(URL)
//   .then((info) => info.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// }
// getInfo()

/////DELETE
// function getId(id){
// fetch(`${URL}/${id}`,{
//     method:"DELETE",
// }) ;
// }
// getId(10266)

//////PATCH
// function getPatch(id,obj){
// fetch(`${URL}/${id}`,{
//     method:"PATCH",
//     headers: {
//         "Content-type": "application/json",
//       },
//       body:JSON.stringify(obj)
// }) ;
// }
// getPatch(10292,{
//     customerId:"Nur",
//     shipName:"Nurlana"
// })
///////PUT
// function getPut(id,obj){
// fetch(`${URL}/${id}`,{
//     method:"PUT",
//     headers: {
//         "Content-type": "application/json",
//       },
//       body:JSON.stringify(obj)
// }) ;
// }
// getPut(10279,{
//     customerId:"Nur",
//     shipName:"Nurlana"
// })

/////POST
// function getPost(obj){
// fetch(`${URL}`,{
//     method:"POST",
//     headers: {
//         "Content-type": "application/json",
//       },
//       body:JSON.stringify(obj)
// }) ;
// }
// getPost({
//     customerId:"Nur",
//     shipName:"Nurlana"
// })

// let obj={
//     customerId:"Nur",
//     shipName:"Nurlana"
// }

// let API = `https://northwind.vercel.app/api/suppliers`;

// function getApi() {
//   fetch(API)
//     .then((info) => info.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// getApi();

/////DELETE
// function getId(id) {
//   fetch(`${API}/${id}`,{
//     method: "DELETE",
//   })

// }
// getId(7);

//////PUT
// function getId(id,obj) {
//   fetch(`${API}/${id}`,{
//     method: "PUT",
//     headers:{"Content-type":"application/json"},
//     body:JSON.stringify(obj)
//   })

// }
// getId(6,{
//     companyName:"Nur",
//     contactName:"contactName"
// });

//////PATCH
// function getId(id,obj) {
//   fetch(`${API}/${id}`,{
//     method: "PATCH",
//     headers:{"Content-type":"application/json"},
//     body:JSON.stringify(obj)
//   })

// }
// getId(10,{
//     companyName:"Nurlana",
//     contactName:"Huseyinova"
// });

////POST
// function getId(obj) {
//   fetch(`${API}`,{
//     method: "POST",
//     headers:{"Content-type":"application/json"},
//     body:JSON.stringify(obj)
//   })

// }
// getId({
//     companyName:"Nurlana",
//     contactName:"Huseyinova",
//     age:19,
//     city:"Shamkir"
// });

/////////////// Table /////////////////
let API = `https://northwind.vercel.app/api/suppliers`;
let tbody = document.querySelector("#tbody");
let idEl = document.querySelector("#id");
function getInformation() {
    tbody.innerHTML=""
    fetch(`${API}`)
    .then((data) => data.json())
    .then((info)=>info.forEach((element) => {
        let trEl=document.createElement("tr")
        trEl.innerHTML=`
        <td>${element.id}</td>
        <td>${element.companyName}</td>
        <td>${element.contactName}</td>
        <td>${element.contactTitle}</td>
        <td>${element.address.city},${element.address.region}</td>
        <td><button onclick=deleteBtn(${element.id})>Delete</button></td>
        `
        
        tbody.append(trEl);
    }));
}
getInformation()


function deleteBtn(id){
    fetch(`https://northwind.vercel.app/api/suppliers/${id}`,{
        method:"DELETE"
    }).then(()=>{
    getInformation()
})
        
        
    }



