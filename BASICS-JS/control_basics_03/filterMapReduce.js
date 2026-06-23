let arr = [1,2,3,4,5,6,7,8,9];
arr.forEach((nums) => console.log(nums));
const val = arr.forEach((num)=> num > 4);
console.log(val)
//if we want to return the numbers then it is not possible to get it by this forEAch. and want to store in varible.

//so use filter.
const fil = arr.filter((num)=> num > 4);
const fil2 = arr.filter((num)=> {
    return num < 4;
})
console.log(fil)
console.log(fil2)
