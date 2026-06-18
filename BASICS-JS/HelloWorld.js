console.log("Hello world!");
console.log("HI mama");
//every time we create variable we use let.
let variable = 44;
console.log(variable/2);
let userName = "aryan";
console.log(userName);

const pi = 3.14;//constants means fixed value we cannot reinitialize them. once declared.
let rad = 5;
const ans = pi * rad * rad;//area of circle.
console.log(ans);

//typeOf is a operator used to see the var datatype.
console.log(typeof ans);

console.log(5/0);
console.log(-1/0);
console.log(Number.MAX_VALUE);
let bigIntNum = 1294021902121421214214n;//here last n is mandatory if we want to work with bigInt.
let bol = 5 <6;
console.log(bol);
console.log(typeof bol);

let number11;
console.log(number11)
console.log(typeof number11)

let val = null;
console.log(val)
console.log(typeof val)
console.log("\n")

//type conversion explicit .
let num = String (123);
console.log(num, typeof num);

let varr =  Number("124");
console.log(varr, typeof varr);

//
//type coericon
let varaa ;
varaa = 5 + "aryan";
console.log(varaa , typeof varaa);

var ansd = 11; // the diff b/w the let and var is the scope{ } the var scope is infinite means no matter what
// it the var ansd will be changed without respective to the lifetime of the scope.
console.log(ansd);

console.table([varaa, ansd, varr, num, val]);

let str = "Naranb";
let stdd = "ahdl";
console.log(str + stdd+ "values are diff");// this is not recommended.

//so we have backticks and string interpoolation. here we get placeholders we can inject what we want.
console.log(`hello this is nran ${str} kaghos  shog ${stdd}`)//mostly used in backend development.

//another way of declaring strings same as java i feel using object and constructor.

let stringsss = new String("hello rayn from hosg");
console.log(stringsss);
console.log(typeof stringsss);

//strings
console.log(stringsss.slice(4));

console.log("Rhyan dal is the founder of nodejs and deno js the javascript runtime environment");

const aryan = "hello aryan ";
console.log(aryan);