/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {}
    let len = nums.length/2
    let res
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]] = ++map[nums[i]]
        } else {
            map[nums[i]] = 1
        }
    }

    for (let k in map) {
        if (len < map[k]) {
            res = k
        }
    }

    return res
};

var majorityElement2 = function(nums) {
    let count = 1;
    let majority = nums[0];

    for(let i = 1; i < nums.length; i++) {
        if (count === 0) {
            majority = nums[i];
        }

        if (nums[i] === majority) {
            count ++;
        } else {
            count --;
        }
    }

    return majority;
};


console.log(majorityElement2([1,3,2]))