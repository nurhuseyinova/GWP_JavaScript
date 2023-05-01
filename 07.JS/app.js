
////1
// function reverceStr(str){
//     return str.split('').reverse("").join``
// }
// console.log(reverceStr("Nurlana.H"));


////2
// function reverceStr(str){
//     return str==str.split('').reverse("").join``
//     ? `Yes ${str} is polidrom`
//     : `No ${str} isn't polidrom`
// }
// console.log(reverceStr("Nurlana.H"));
// console.log(reverceStr("mom"));


////3
// function reverceStr1(str){
//     let result=""
//     for(let i=str.length-1;i>=0;i--){
//         result+=str[i]
//     }
//     return result;
// }
// console.log(reverceStr1("Nurlana.H"));


////4
// let arr = [1, 2, 2, 2, 4, 3, 3, 2, 4, 7, 5, 7, 6];
// function removeDublicates(array){
//     let result=[]
//     array.filter((el,i)=>!result.includes(el)&& result.push(el));
//     return result;
    // return [...new Set(array)]
    // return array.filter((el,i)=>array.indexOf(el)==i);
// }
// console.log(removeDublicates(arr));


// let myArr = [1, 4, true, false, 0, 5, "hello", NaN, undefined];
// console.log(myArr.filter((el)=> typeof el==="boolean"));
// console.log(myArr.filter(Boolean));
