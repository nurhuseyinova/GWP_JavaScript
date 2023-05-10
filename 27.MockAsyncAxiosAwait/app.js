// let API_URL = `http://localhost:8080/data`;


//1+
// function getAllData() {
//   fetch(API_URL)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }
// getAllData()

//2+
// async function getAllData() {
//   await fetch(API_URL)
//     .then((data) => data.json())
//     .then((info) => console.log(info));
// }
// getAllData();

//3+
// async function getAllData() {
//   try {
//     let res=await fetch(API_URL);
//     let data=await res.json()
//     console.log(data);
//   }
//   catch(err){
//     console.log(err);

//   }
// }
// getAllData();

//4+
// async function deleteData(id) {
//   try {
//     let res=await fetch(`${API_URL}/${id}`,{
//         method:'DELETE'
//     });
  
//     console.log(res);
//   }
//   catch(err){
//     console.log(err);

//   }
// }
// deleteData(2);

//5+
// async function postData(obj){
//     let res=await fetch(API_URL,{
//         method:"POST",
//         headers:{"Content-type":"application/json"},
//         body:JSON.stringify(obj)
//     })
// }
// // postData({
//     firstName:"Moon",
//     lastName:"Sun",
//     age:"21"
// })

//6+

// async function postData(id,obj){
//     let res=await fetch(`${API_URL}/${id}`,{
//         method:"PUT",
//         headers:{"Content-type":"application/json"},
//         body:JSON.stringify(obj)
//     })
// }
// //  postData(7,{
//     firstName:"Moon",
//     lastName:"Sun",
//     age:"21"
// })
