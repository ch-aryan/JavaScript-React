console.log("hello world");
console.log("how are you doing")

const arr = ["hello world", 1, 2, 3, "chilkeshwram Aryan"];
console.log(arr);
console.table(arr)

const heroes = new Array("dad", "prabhas", "arjun", "maharaj cs" , 12);
console.table(heroes);

heroes.push(122);
console.table(heroes)

const num = [1,2,3,4];
console.log(num);

num.push(6)
console.log(num);

num.pop();//means it removes the last elmt
console.log(num)


console.log(num.shift());
console.log(num)
console.log(num.unshift(9));
console.log(num);
console.log(num.includes(3));
console.log(num.indexOf(19));

let arr1 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr1);
console.log(typeof arr1);
let arr2 = arr1.join();
console.log(arr2)
console.log(typeof arr2);

//now slice and splice .slice will take elements from 0 to 2 if you are mentioning 3. only 0,1,2 are accept.
//now splice modify the entire array making entire array diff taking out the elemntes.

let ar1 = [1,2,3,4,5,6];
console.log("original array", ar1);
console.log("slice" ,ar1.slice(0,3));
console.log(ar1);
console.log("splice:", ar1.splice(0,3));
console.log(ar1);


//++++++++++++++++++++++++advance++++++++++++++++++++++
let marvel_hero = ["ironman", "thor", "hulk"];
console.log(marvel_hero)
let dc_hero = ["batman", "flash", "BenT10"];
console.log(dc_hero)

console.log(marvel_hero.push(dc_hero));
console.log(marvel_hero)//this is too awkard adding the entire array as a single index watch carefuuly.

//so we use concat/
console.log("concat methods")
let marvel_heros = ["ironman", "thor", "hulk"];
console.log(marvel_heros)
let dc_heros = ["batman", "flash", "BenT10"];
console.log(dc_heros)
let heros = marvel_heros.concat(dc_heros);//here unlike the push we need to initialzie the new array to print the modfication happend
console.log(heros);

//so we can aslo use spread method to add elements. 
let heroes1 = [... marvel_hero , ... dc_hero , ...marvel_heros , ... dc_heros];
console.log(heroes1);

//************************ */
console.log(Array.isArray("Aryan"));
console.log(Array.from("Aryan"));
