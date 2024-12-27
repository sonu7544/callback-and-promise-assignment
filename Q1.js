/*1. Double using callback.
Write a function that takes in an array of integers and a callback function, and returns a
 new array where each element is doubled using the callback.
 */
function doubleArray(arr,callback){
    const doubledArr = arr.map((num)=>{
        return callback(num);
    });
    return doubledArr;
}

const originalArray = [1,2,3,4];

function callback(num){
    return num*2;
}
const doubledArray = doubleArray(originalArray, callback);
console.log(doubledArray);