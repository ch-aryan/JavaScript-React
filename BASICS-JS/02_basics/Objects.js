//singleton
//Object.create();
//to access elements in the objects.

//object literals

//now to add sysmbols. 
const mySym =  Symbol("oldcity");

const obj = { "hello world hi mama"  : 1,
     "values" : "pairs",
    name : "Arayn",
    "full Name" : "how will you access this.",
    [mySym] : "hello "//to use this as symbol we do something open square brackets.
};
console.log(obj.name);//one way but how will you access if there are key surrounded with double quotes.
console.log(obj["name"]);//this is the best way to access. 
console.log(obj.values);
console.log(obj["values"]);
console.log(obj["full Name"]);   //this is valid/ but obj.full name will be undefined and not accessible.
console.log(obj[mySym]);
console.log(typeof obj[mySym]);//stirng to convet the string.

console.log("hello aryan");

let ABC = 123;
let abc = 123;
console.log( ABC);
console.log(abc)
console.table([abc, ABC])
console.table({ abc, ABC });



console.log("console.table() usually arrays ya objects ke liye use hota hai.")

console.log(obj);


let aSbol = Symbol("Laldarwaza");

let objectsCreation = {
    email : "aryanchilkeshwaram@gmail.com",
    id : 1907,
    Name :" aryan",
    [aSbol] : "new Symbol here"

}

console.log(objectsCreation);
// Object.freeze(objectsCreation);
objectsCreation.email = "aryanprabha650@gmail.com";
console.log(objectsCreation)


objectsCreation.greetings = function(){
    console.log("Hello js user");
    
}
console.log(objectsCreation.greetings());

console.log(Object.keys(objectsCreation));
console.log(Object.values(objectsCreation))

console.log("*******************************************")

let obj1 = {
    key : "values",
    ab : "a", 2 : "b" , 3 : "c" , 4 : "d"
}

console.log(obj1)
//to extract values we can do 
console.table([
obj1[1] , obj1[2] , obj1[3] , obj1
])
console.log(obj1.key);

//so we can do object destructing instead of writing . obj1.key obj1.key in mutltiple places/
const {key} = obj1;
//we can do our name instead. 
const {key : aryan } = obj1;
console.log(key);
console.log(aryan, "see the diff");