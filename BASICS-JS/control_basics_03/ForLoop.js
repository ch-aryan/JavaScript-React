// for(let i =1 ; i<=10; i++){
//     console.log(`table of ${i}`);
//     for(let j = 1; j<=10; j++){
//         console.log(`${i} * ${j} = `,i*j);
//     }
// }
//now it is same as java, as well as while and do while as same.
//let us undersand. for of. loop.
// let arr = [1,2,3,4,5];
// for (const i of arr) {
//     console.log(i)
// }

let map = new Map();
map.set(1, "aryan");
map.set(2, "bhavana")
map.set(3, "vani");//maps contains only unique values.
map.set(4, "anil")
console.log(map)

for(const [key,val] of map){
    console.log(val +":-"+ key);
    
}

for(const key of map){
    console.log(`${key}`);
}

for(const val of map){//can we use for in here.
    console.log(val);
}

console.log("can we use for in loop here");
for(const val in map){
    console.log(val)
}
console.log("is it printinnganutihng : NO")//so confirmed that for in loop is not working for maps.


//can we place the for of loop for the object.
const objectA = {
    name : "Aryan",
    hello : "Bhai",
    old : "How are you doing",
}
// for(let val of objectA){//we can't access for of loop in the object.
//     console.log(val);
// }
//so we use for in loops.
for(let key in objectA){//here key is an variable name we can name it anything we want.
    console.log(`${key}`);//this is just giving us the keys what aobut values.
}

for(let key in objectA){
    console.log(`${key} : ${objectA[key]}, this is somting huge`);
}
//forEach works with array using Call Back functions.
let arrAryan = ["js", "java", "c++" , "python", "rubby"];
arrAryan.forEach(function (Aryan1){
console.log(Aryan1)
})
console.log("using arrow functions.")

//we can use arrow function also here.
arrAryan.forEach((val, index, arr)=>{//we also get the item and the index also. and whole arr also
console.log(val, index, arr);
})

//we can also give the function which is already build by us example
console.log("using already declared funtion ")
function print(val){
    console.log(val)
}

arrAryan.forEach(print)//we are giving the referrence here. print() it is called execution of the funtion.

//important in real life.
const myARR = [
    {"languageFile" : "js",
        "Framework" : "Next js or Express js"
    },
    {
        "languageFile" : ".java",
        "FrameWork" : "springBoot"
    },
    {
        "languageFile" : ".py",
        "Framework" : "FrameworkOfPython"
    }
]
myARR.forEach((item)=>{
console.log(item.languageFile);
})

