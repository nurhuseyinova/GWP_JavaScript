const array1 = [5, 12, 8, 130, 44, 5];
const array2 = ["a", "b", "c", "d", "e"];
const arr3 = [1, [[2], 1]];
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const elements = ["Fire", "Air", "Water"];

//reduce
// let arr=array1.reduce((acc,curr)=>acc+curr,0)
// console.log(arr);

//sort
// let arr=array1.sort((a,b)=>a-b)
// console.log(arr);

//toString
// console.log(array1.toString());

//map
// array2.map(el=>console.log(el));

//reverse
// console.log(words.reverse());

//slice
// console.log(array2.slice(2,4));
// console.log(array2.slice());
// console.log(array2.slice(2));

//splice
// array2.splice(1,1,"Nur")
// console.log(array2);

//push,pop
// array2.push('5','6')     //push 5,6
// array2.pop()              
// console.log(array2);
// let arr=array1.push('5','6')    //8
// console.log(arr);

//unshift,shift
// array2.unshift('5','6')     
// array2.shift()              
// console.log(array2);

//join
// console.log(array2.join`-`);

//includes
// console.log(array2.includes("a"));

//indexOf
// console.log(array2.indexOf("a"));

//isArray
// console.log(Array.isArray(array1));

// forEach
// array1.forEach(el=>console.log(el));


//flatMap
// console.log(array1.flatMap((el) => (el === 8 ? [10, 8] : 1)));

//flat
// console.log(arr3.flat(Infinity));

//find
// let finded=array1.find(el=>el=5)
// console.log(finded);

//findLast
// let finded=array1.findLast(el=>el=5)
// console.log(finded);
//findLastIndex
// let finded=array1.findLastIndex(el=>el>30)
// console.log(finded);

//filter
// let filtered=array1.filter(el=>el>15)
// console.log(filtered);

//fill
// console.log(array1.fill(0,2,3));
// console.log(array1.fill(0,2));

//every
// console.log(array1.every(el=>el>30));

//some
// console.log(array1.some(el=>el>50));

//copyWithin
// console.log(array2.copyWithin(1,2));??

//at()
// const array1 = [5, 12, 8, 130, 44];
// let index = 2;
// let index2=4;
// console.log(`${array1.at(index)}`); //8
// console.log(`${array1.at(index2)}`); //44

//concat()
// let arr=array1.concat(arr3)
// let arr1=arr.concat(words)
// // console.log(arr);
// console.log(arr1);
