"use strict";
console.log("let us learn about strings in js");
let a = 'stirngs can cbe initialized in double as well as single';
let ab = "strings" ;
console.table([a, ab]);
console.log(a + ab);

//use backticks . string interpoolation concepts comes into the picture.
const name = "Aryan";
const repo = 14;

console.log(name  + repo + " Value");//this is old way. this is not modern 

console.log(`Hello world this is ${name} how are you alll doing i have ${repo} in my git hub repositories `);

//another way of initializing the strings.using new Keyword object type.
const str = new String('hello this is new way of ');
console.table([str , typeof str ])
console.log(str);
console.log(str[0]);
console.log(str.__proto__);

//jaava mein string ka charAt(i) funciton rahate. aur stirng ek object hee. java mein class.String lnag.

let url = "aruanchilkekshwaram@gmail.com";
console.log(url);
console.log(url.replace("uan", "yan"));//no change only change in copy . Immutable.
console.log(url);
console.log(url.includes("aruan"));
