//to call a repeated set of work or instructions multiple times once defined /
function myfun(){
    console.log('Hello js functions. from ch_aryan .(java -javascript)')
    let a = 4;
    let b = 5
    console.log(a+b);
   return  15+14;
}
let c = myfun();
console.log(c)

function funParan(n , m){//parametrs.
    let c = n + m;
    return c;
}
console.log(funParan(2,2));//arguments

//here in js we can set the parameters as default. wow.
//helpful if user forgot to give the arguments to the funtion
console.log("great future")
function explore(n , m=1){//great feature.
 console.log(n+m);
}
explore(3,3);


///if user enters n number of arguments but the function accepts only the 1 parameter then we used 
//something called as rest. same as slice. ...(slice means to concat the objects remember).
//useful when you don't know how many parameters are getting added.
function createUserCart( ...ar1){//REST operator.
    console.log( ar1);
}
createUserCart(200,300,400);


//now comes most important functions and objects.
let user = {
    username : "aryan",
    id : "21671A1907"
}

function usingObj(anyObject){
    console.log(`hello ${anyObject.username} here is your id :- ${anyObject.id}`);
}

usingObj(user);
//we can also pass direct object.
usingObj({
    username : "bhavana",
    id : 14
})

//nested functions scope and blocks are important.
function A(){
    let userN = "aryan";
    function B(){
        let email = "aryanchilkeshwaram@gmail.com";
       let idd = 1;
        console.log(email);
        console.log(userN);
    }
    B();// if we are not calling the B() then it will not execute at any cost.
   

}

A();

//+++++++++++++++++++++++++++++++++++++++++++++++
//intresting
console.log("+++++++++++++++++++++++++++++++++++")
//we can access anywhere right calling function.
console.log(addOne(5));
function addOne(num){
    return num +1;//this is normal function right.
}

console.log()


// console.log(addTwo(5))///but you can't called before initializng the variable.
let addTwo = function(num2){// this is normally a funciton but mostly called as expressions
    return num2 +2;
}//javascript variables are powerful it can hold funtions, json, etc..

console.log(addTwo(5));


//es6 came and launced the arrow funtions

 const obj1 =  {
 
     userName : "aryab",
    id : 12,
    welcome : function(){
        console.log(`hello world using ${this.userName} how are you doing id ${this.id}`)
        console.log(this);
    }
    

}


obj1.welcome();
obj1.userName = "AAryan";
obj1.welcome();


let vr = function a(){
let username = 'arya';

}

vr();
//arrow funtion.s
let arrow = () => {
    console.log("this are arrow functions how are you doing. ")
}
arrow();

//explicit return.
let arr = (a, b) => {
    return a+b;
}
console.log(arr(3,4));

// implicti return type.
let arow = (a,b ) => (a + b);
let arow1 = (a,b) => a-b;
console.log(arow(10,10));
console.log(arow1(20,10));

//to return objects in arrow functions.
let arow2 = (par1, par2) => ({userAnother : "AryanChilkeshwaram"});
console.log(arow2());

//IIFE
//immediately invoked function expression.
(function chai() {//it is an named 
    console.log("DB connection successful")
})();

(()=>{
    console.log("using the arrow function IIFE")
})();// here the semicolon is must and must.

//using parameters.
((userN)=>{
    console.log(`hello this is ${userN}`);
})("aryan");