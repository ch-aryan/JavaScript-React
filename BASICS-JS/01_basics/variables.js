const accId = 12345;
let accountEmail = "aryanchilkeshwaram@gmail.com";
var password = "aryan@123";
accountCity = "hyderabad";

// accId = "change"; // const keywords are not allowed to change right.
accountEmail = " can we change them yes offcourse";
password = "can we change yes";
accountCity = "can we chagne ?"//it is also possible but not recommended.
let x; //valued will be undefined. right. 
console.log(accId);
console.log("aryan");
console.log("ctrl + shift + p and press auto save on");
//to print multiple variables declared in the console.log we use console.table([accountEamil, ])
console.table([accId, accountEmail, password, accountCity]);
/* 
don't use the var because of block scope and functional scope issues.
and in js if we use semicolon ; at the end or not doesn't matter;
*/