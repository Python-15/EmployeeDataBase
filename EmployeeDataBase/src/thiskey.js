// this keyword in js
// "use strict"
// console.log(this)

let obj1 ={

    name:'aaditya',
    age:'24',
    display: function(){

        let obj2={
        name:'newobj',
        age:'22',
        print:()=>{ console.log(this)}
        }
 obj2.print()
    }
   
}
obj1.display()