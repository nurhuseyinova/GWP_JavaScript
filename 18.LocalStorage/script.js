let addBtn=document.querySelector("#add")
let deleteBtn=document.querySelector("#delete")
////1+
addBtn.addEventListener("click",function(){
    localStorage.setItem("firstName","Nurlana"),
    localStorage.setItem("lastName","Huseyinova"),
    localStorage.setItem("city","Shamkir"),
    localStorage.setItem("age","19")

    console.log(localStorage.getItem("firstName"));
    console.log(localStorage.getItem("lastName"));
    console.log(localStorage.getItem("city"));
    console.log(localStorage.getItem("age"));
})
////1.1+
console.log(localStorage.length);
////2+
for(let i=0;i<localStorage.length;i++){
    console.log(localStorage.key(i))
}
////3+
for(let i=0;i<localStorage.length;i++){
   let keyEl= localStorage.key(i)
    console.log(localStorage.getItem(keyEl))
}
////4+
console.log(localStorage.key(0));
////4.1+
let newArr=[]
for(let i=0;i<localStorage.length;i++){
    newArr.push(localStorage.key(i))
}
console.log(newArr);
////5+
let firstValue=localStorage.key(0)
console.log(localStorage.getItem(firstValue));
////5.1+
let anyArr=[]
for(let i=0;i<localStorage.length;i++){
    let keyEl= localStorage.key(i)
    anyArr.push(localStorage.getItem(keyEl))
}
console.log(anyArr);
////6+
// deleteBtn.addEventListener("click",function () {
//     localStorage.removeItem("firstName"),
//     localStorage.removeItem("lastName"),
//     localStorage.removeItem("city"),
//     localStorage.removeItem("age")  
// })
////6.1
// deleteBtn.addEventListener("click",function () {
//     for(let i=0;i<localStorage.length;i++){
//         let keyEl= localStorage.key(i)
//         localStorage.removeItem(keyEl)
//     }
// })
////6.2
deleteBtn.addEventListener("click",function () {
    localStorage.clear()
})
////6.3
// deleteBtn.addEventListener("click",function () {
//     localStorage.removeItem("firstName")
// })



