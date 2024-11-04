/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    var store = {};
    var res = [];
    for(var i = 0; i < nums.length; i++){
        if(nums[i] in store){
            res.push(i);
            res.push(store[nums[i]]);
            return res;
        }
        if(nums[i] < target){
            store[target-nums[i]] = i;            
        } else {
            store[nums[i] - target] = i; 
        }
    }
};


console.log( twoSum([-1,-2,-3,-4,-5],
    -8))