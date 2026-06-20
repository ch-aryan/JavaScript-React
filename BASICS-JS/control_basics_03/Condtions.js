let obj = {

}

if(obj){
    console.log("it should n't execute but it will right.");
    
}
//so the object is empty right then how to check and make it false.
if(Object.keys(obj).length === 0){
    console.log("it is an empty object");
    
}//this will return array of keys right. Ojbect.keys(obj) if you know it properly.

const arr = [];
if(arr){
    console.log("it is empty but it will exectue right");
}

if(arr.length === 0){
    console.log("it is an empty array.")
}
//false values in js.
// 0, -0, false, BigInt 0n, ""(no space ony two quotes) is also false, nan, null , undefined.
//true values in js/
//1,true, "0", " " see the diff all are in the strings. , "false" is also true, [] empty array is true, {} empty object is true,
//as wwell as empty funciton(){} is also true

//Nullish Coalescing Operator (??) :null undefined.
//if we got some input from db but it is expected as a number but got null or undefined. then we dont' want 
//them so we can make it possible.

let va1 = 5 ?? 10;
console.log(va1)
let va2 = null ?? 5;//remember the default should be written after the ??  question mark not in the input place.
console.log(va2);//same for undefined.