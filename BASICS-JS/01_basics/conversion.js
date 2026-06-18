let x = 10;
console.log(typeof x);
console.log(x)
let str = String (x);
console.log(typeof str);
console.log(str)

let bool = true;
console.log(typeof true);
let n = Number (bool);
console.log(n);


let num = "33";
console.log(num);
console.log(typeof num);
let xy = Number (num);
console.table([xy , typeof xy]);


let score = "33abc";
console.table([score, typeof score]);
let bc = score;
console.table([bc, typeof bc]);
bc = Number(score);
console.table([bc, typeof bc]);


console.table([null > 0 , null == 0 , null >= 0 , ]);
console.table([undefined == 0 , undefined > 0 , undefined < 0]);
console.log(2==="2");
console.log(2=="2");
//null means empty not zero. zero means a nunber.
let xz; //this is undefined . we have initialzied the var name but not its value.
console.log(typeof xz)


//bigInt, Boolean , Number, Stirng, null, undefined,  symbol , 7 primitive data types. call by value form the memory
//perspective.

//NON primitive. call by referrence.
//Arrays, objects, functions. 

//js is dynamic typed language.


let num1 = 110.2;
//this also comes under the NUmber category


//symbols are specialized type of data used moslty in react library. to call the unique vlaues

const id = Symbol ("123");
const anotherid = Symbol("123");

console.table([id == anotherid, id === anotherid]);


const bigN = 12456789432n
console.log(typeof bigN);

const arrheros = ["shakitman" , "chatraapthi shivaji maharaj", "maharanaPratap"];
let obj = {
    name : "aryan",
    id : 12,
};
console.log(arrheros);
console.log(obj);

let anObj = {
    name1 : obj,
    id : 14
}
console.log(anObj)

let accessObj = {
    name2 :  anObj.name1,
   
}
console.log(accessObj);
//we can declare function in two types one is variable type and another one is using the lambda expression.
const myfun = function() {
    console.log(x)
}
console.log(myfun) 
//typeof is useful keyword to identify which data type we are using. 

console.log(typeof null)//object


//++++++++++++++++++++++++++++++++++++++++++++++++

//stack memory is used for primitive data types.
//heap memory is used for non primitve data types.
//wehen ever we access the stack memory data we get the copy of that var.//and for the non primitve we get the reference.
