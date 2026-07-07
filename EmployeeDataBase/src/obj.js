// 
//pollyfills 

/* 
 map
 Array.map(callbackfn ,thisArg);
 function callbackfn(element,idx,arr)
*/

const smaple = {

    length:2,
      0:10,
      1:20,
      2:30
}

// const result =Array.prototype.map.call(smaple,(d)=>d*2)
// console.log(res)

//
const arr = [1,2,3,4,5];

Array.prototype.myMap= function( callbackfn){
   let finalArr= [];
    for(let i =0;i<this.length;i++){
      const newVal=  callbackfn(this[i],i, this)
    finalArr.push(newVal)
    }

    return finalArr;
}

const newrr = Array.prototype.myMap.call(smaple,(d)=>d*2)
// console.log(newrr)

// filter
/**
arr.filter(callbackfn,thisArg);
function callbackfn(element,idx,arr){
   //agar callback function true return karta hai toh element to add karna ahi arry m
   // aagr false karta hai toh nhi karna hai

}
 */


// Array.prototype.myFilter =function(callback){
//   const newArry =[];
//   for(let i =0;i<this.length;i++){

//     const value = this[i];
//     const targert = callback(value,i,this)
//     targert &&newArry.push(value);

//   }
//   return newArry;
// }

// console.log(arr.myFilter((d)=>d>2));



//reduce map it is use to return a single value from array

const  sumarr = [1,2,3,4,5,6,7,8];

// //arr.reduce(functoion (callbackfn,intitial value){
//  return acc+next
// },initial     value)