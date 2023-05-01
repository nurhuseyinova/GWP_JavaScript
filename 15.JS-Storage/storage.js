


////LocalStorage
// localStorage.setItem("name","Nurlana");
// localStorage.setItem("surname","Huseyinova");
// localStorage.setItem("age","19");
// localStorage.setItem("city","Shamkir");
// localStorage.setItem("father","Imameddin");
// localStorage.setItem("mother","Shahnaz");


// console.log(localStorage.getItem("name"));
// console.log(localStorage.getItem("surname"));
// console.log(localStorage.getItem("age"));
// console.log(localStorage.getItem("city"));
// console.log(localStorage.getItem("father"));
// console.log(localStorage.getItem("mother"));


// setTimeout(()=>{
//     console.log(localStorage.removeItem("city"));
// },2000);
// setTimeout(()=>{
//     console.log(localStorage.clear("surname"));
// },3000)

// console.log(localStorage.key(2));       //returns the one with index 2 ...
// console.log(localStorage.key(0));
// console.log(localStorage.key(6));


// console.log(delete localStorage.name);    //true
// delete localStorage.name                  //delete


// console.log(localStorage.length);         //length


// for(let key in localStorage){
//     console.log(key);
// }

// for(let i=0; i<localStorage.length;i++){
//     let key=localStorage.key(i)
//     console.log(`${key}:${localStorage.getItem(key)}`);
// }

// let users = ["Sabina", "Ulfat", "Kanan", "Nurlana"];
// localStorage.setItem("users",JSON.stringify(users));
// console.log(JSON.parse(localStorage.getItem("users")));

// let userObj = {
//     username: "lorem ipsum",
//     email: "lorem@gmail.com",
//     city: "Ganja",
//   };
//   localStorage.setItem("obj",JSON.stringify(userObj))
//   console.log(JSON.parse(localStorage.getItem("obj")));


// //?
// let num=10
// localStorage.setItem("number",num);
// console.log(JSON.parse(localStorage.getItem("numbers"))); //null




//SessionStorage

// sessionStorage.setItem("surname","Huseyinova");
// sessionStorage.setItem("age","19");
// sessionStorage.setItem("city","Shamkir");
// sessionStorage.setItem("father","Imameddin");
// sessionStorage.setItem("mother","Shahnaz");
// console.log(sessionStorage.removeItem("mother","Shahnaz"));

// let username=prompt("Enter u name","Nurlana")                  //this enter username to main page
// sessionStorage.setItem("name",username)

// let info=document.querySelector("#info");
// info.innerText=`Welcome ${sessionStorage.getItem("name")}`

// for (const [key, value] of Object.entries(localStorage)) {               //returns key and values in alert
//     alert(`${key}: ${value}`);
//     }





//cookies
// document.cookie="Class=GWP";
// document.cookie="Name=Nurlana; expires=Mon,02 May 2023 01:23:15 GMT";  //? time
// console.log(document.cookie);
