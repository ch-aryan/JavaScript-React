let a = 10;
console.log(a);
console.log(typeof a);

let b = new Number(122);//object type of number same like stirng to get additonal features.
console.log(b);
console.log(typeof b);

console.log(b.toFixed(2));
console.log(b.toString().length);

//we need to so carefulll while using the .toPreceison() method.
let n = 1111.999;
console.log(n.toPrecision(4));

let val = 1004444;
console.log(val.toLocaleString('en-IN'));// important .

//+++++++++++++++++++++++
//maths.tricks.
let  nun = 12.65;
console.log(Math.round(nun));
console.log(Math.ceil(nun));
console.log(Math.floor(nun));
console.log(Math.floor(Math.random() * 10)+ 1);


let date = new Date();
console.log(date)
console.log(date.toString())
console.log(date.toLocaleString('en-IN'))
console.log(date.toDateString());
console.log(date.toLocaleString())
console.log(typeof date);
