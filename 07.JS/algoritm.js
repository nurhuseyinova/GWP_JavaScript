
function myFun(str){
    let count=0;
    let element=[];
    str.split``.map(el=>{
        count=str.split(el).length-1;
        element.push([el,count])

    })
return Object.fromEntries(element);

}






console.log(myFun("Nurlana"));
console.log(myFun("Kanan Teacher"));
console.log(myFun("Ulfat Teacher"));