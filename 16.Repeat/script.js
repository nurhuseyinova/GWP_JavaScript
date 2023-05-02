// const arr = ["6", 8, NaN, "0", 5, 4, "true", false, 7, "a", undefined, 8, true];
//1+
// let falsyValue = (anyArr) => {
//     let newArr=[]
//   for (let i = 0; i < anyArr.length; i++) {
//     if(!anyArr[i]){
//         newArr.push(anyArr[i])

//     }
//   }
//   return newArr
// };
// console.log(falsyValue(arr));

//2+
// let stringValues = (anyArr) => {
//     let newArr=[]
//   for (let i = 0; i < anyArr.length; i++) {
//     if(typeof anyArr[i]=="string"){
//         newArr.push(anyArr[i])

//     }
//   }
//   return newArr
// };
// console.log(stringValues(arr));

//3+

// let sliceValues = (anyArr) => {
//     let newArr=[]
//   for (let i = 3; i < 7; i++) {

//         newArr.push(anyArr[i])
//   }
//   return newArr
// };
// console.log(sliceValues(arr));

//4+
// let sumArr = (anyArr) => {
//     let sum=0
//   for (let i = 0; i < anyArr.length; i++) {
//     if(typeof anyArr[i]=="number" && anyArr[i]){
//        sum+=anyArr[i]

//     }
//   }
//   return sum
// };
// console.log(sumArr(arr));

//5+
// let findLastIndex = (anyArr) => {
//     let newArr=[]
//   for (let i = 2; i < anyArr.length; i++) {
//     if(anyArr[i]==8){

//         return i
//     }
//   }
// };
// console.log(findLastIndex(arr));

//6+
// let reverseArr = (anyArr) => {
//   let newArr = [];
//   for (let i = anyArr.length - 1; i >= 0; i--) {
//     newArr.push(anyArr[i]);
//   }
//   return newArr;
// };
// console.log(reverseArr(arr));


//7
//Ascending
// const arrNum = [3, 1, 22, 0, 12, 11, 9, 8, 10, 14, 41, 55, 51];
// let sortArr=(newArr)=>{

//     for (let i = 1; i < newArr.length; i++){
//         for (let j = 0; j < i; j++){
//             if(newArr[i]<newArr[j]){
//                 let temp=newArr[i];
//                 newArr[i]=newArr[j];
//                 newArr[j]=temp;

//             }
//         }
//     }
//     return newArr
// }
// console.log(sortArr(arrNum))

//7
//Descending
// const arrNum = [3, 1, 22, 0, 12, 11, 9, 8, 10, 14, 41, 55, 51];
// let sortArr=(newArr)=>{

//     for (let i = 1; i < newArr.length; i++){
//         for (let j = 0; j < i; j++){
//             if(newArr[i]>newArr[j]){
//                 let temp=newArr[i];
//                 newArr[i]=newArr[j];
//                 newArr[j]=temp;

//             }
//         }
//     }
//     return newArr
// }
// console.log(sortArr(arrNum))

//8?
//  const arrLetters = ['g', 'd', 'a', 'c', 'j', 'b', 'e']
//  let sortArr=(newArr)=>{

//         for (let i = 0; i < newArr.length-1; i++){
//             for (let j = i+1; j < newArr.length; j++){
//                 if(newArr[i].compareTo(newArr[j])>0){
//                     let temp=newArr[i];
//                     newArr[i]=newArr[j];
//                     newArr[j]=temp;
    
//                 }
//             }
//         }
//         return Array.toString(newArr)
       
//     }

// console.log(sortArr(arrLetters));  //['a', 'b', 'c', 'd', 'e', 'g', 'j']


//8++
//  const arrLetters = ['g', 'd', 'a', 'c', 'j', 'b', 'e']-
// function sortArr(str) {
//     let i = 0, j;
//     while (i < str.length) {
//         j = i + 1;
//         while (j < str.length) {
//             if (str[j] < str[i]) {
//                 var temp = str[i];
//                 str[i] = str[j];
//                 str[j] = temp;
//             }
//             j++;
//         }
//         i++;
//     }
//     return str;
// }


// console.log(sortArr(arrLetters));  //['a', 'b', 'c', 'd', 'e', 'g', 'j']



//9+
// let calculator=(num1,operator,num2)=>{
//     let operations={
//     "+":()=>num1+num2,
//     "-":()=>num1-num2,
//     "*":()=>num1*num2,
//     "/":()=>num2 ?num1/num2 :"Can't divide by 0!",
//     }
//     return operations[operator]().toFixed(2)     //toFixed in c.log from 3

// }
// console.log(calculator(2, "+", 2));  // 4
// console.log(calculator(2, "*", 2));  // 4
// console.log(calculator(4, "/", 2));  // 2
// console.log(calculator(2, "/", 0));
// console.log(calculator(2, "-", 10));
// console.log(calculator(2, "/", 7));
