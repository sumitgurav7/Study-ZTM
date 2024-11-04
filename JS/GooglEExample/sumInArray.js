/**
 * Need to find pair in an array which results in given number
 * an array will be provided and a number 
 * need to return an pair which will be equal to the sum of the given input in the given
 * array
 */

const inputArray1 = [1,2,3,9];
const sum1 = 8;
const inputArray2 = [1,2,4,5,3];
const sum = 8;


const findPair = (_array, _sum) => {
    let mappedArray = {};
    for(let num of _array){
        
        if(num in mappedArray){
            return {num : mappedArray[num]}
        }
        if(num <= sum){
            mappedArray[(sum - num)] = num;
        }
    }
}

console.log(findPair(inputArray1, sum1));
console.log(findPair(inputArray2, sum1));