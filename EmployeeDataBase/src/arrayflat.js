const arr = [1,2,3,[[4,5],8,4]]
const flatarry = arr.flat()


//2nd
const flat = arr.toString().split(",")
console.log(flat)

// 3rd prototype
function flatten(arr,limit){

  const result =[]

   //forcall;

arr.forEach(function(element, depth=100){
    // check is our element is array
    if(Array.isArray(element,depth-1)){
    result.push(...flatten( element ))

    }
    else{
result.push(element)
    }
    
})

  return result;
}

console.log(flatten(arr))