let API_URL = `http://localhost:8080/data`;
//1+
// axios(API_URL).then((res)=>console.log(res.data)).catch(err=>console.log(err))

//2+
// async function deleteDataById(id) {
//     await axios.delete(`${API_URL}/${id}`);
//   }
// deleteDataById(4)

//3+
// function postData(obj){
//     axios.post(API_URL,obj)
// }
// postData({
//     firstName:"Life",
//     lastName:"Death",
// age:"?"
// })

//4+
// function patchData(id,obj){
// axios.patch(`${API_URL}/${id}`, obj);
// }
// patchData(10,{
//   firstName: "Life",
//   lastName: "Death",
//   age: "?",
// });

//5+
// const axiosInstance=axios.create({
//     baseURL:"http://localhost:8080/",
//     timeout:4000,
//     headers:{"Content-Type": "application/json"}
// })

// async function getData(){
//     let res =await axiosInstance("data")
//     console.log(res.data);
// }
// getData()
