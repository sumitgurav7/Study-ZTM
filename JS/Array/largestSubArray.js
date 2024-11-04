/**
 * @param {number[]} nums
 * @return {number}
 */

// var inputArray = [];
// var prevSum = 0;
// var currVal = 0;
// var newSum = 0;
// var StartInd = 0;
// var endInd = 0;
// var highestSum = 0;
// var highStartInd = 0;
// var highEndInd = 0;
// var length = 0;

// var maxSubArray = function(nums = []) {
//     initializeParams();
//     inputArray = nums;
//     length = nums.length;    
//     prevSum = inputArray[0];
//     highestSum = prevSum;
//     for (let index = 1; index < inputArray.length; index++) {
//         currVal = inputArray[index];        
//         newSum = prevSum + (currVal);
//         if(currVal > prevSum){
//             if(newSum < currVal){
//                 StartInd= index;
//                 endInd = index;
//                 prevSum = currVal;
//                 newSum = prevSum;
//                 checkForHighest();
//             }
//             else if(newSum > currVal){
//                 endInd = index;
//                 incrementAndAdd();
//             }
//         }
//         else if(currVal < prevSum) {            
//             endInd = index;
//             incrementAndAdd();
//         }
        
//     }
//     return highestSum;
// };

// function initializeParams() {
//     inputArray = [];
//     prevSum = 0;
//     currVal = 0;
//     newSum = 0;
//     StartInd = 0;
//     endInd = 0;
//     highestSum = 0;
//     highStartInd = 0;
//     highEndInd = 0;
//     length = 0;
// }

// function checkForHighest(){
//     if(newSum > highestSum){
//         highEndInd = endInd;
//         highStartInd = StartInd;
//         highestSum = newSum;
//     }
// }

// function incrementAndAdd(){
//     checkForHighest();
//     prevSum = newSum;
// }

var maxSubArray = function(nums = []) {
    var currentSum = nums[0];
    var maxSum = nums[0];
    nums.forEach((num, index) => {
        if(index > 0){
            if(currentSum>=0){
                currentSum+=num;
            }else{
                currentSum = num;
            }
            
            if(currentSum>maxSum){
                maxSum =currentSum;
            }
        }
    });
    return maxSum;
}


console.log( maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log( maxSubArray([1]));
console.log( maxSubArray([5,4,-1,7,8]));
console.log( maxSubArray([-2,1]));
console.log( maxSubArray([1,2]));
console.log( maxSubArray([1,2,-1,-2,2,1,-2,1,4,-5,4]));