/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let key,
    map = {}
    for(let i = 0; i < nums.length; i++) {
        let val = nums[i]
        map[val] = map[val] ? ++map[val] : 1;
        if (!key || map[key] && map[key] < map[val]) {
            key = val
        }
    }

    return key
};

console.log(majorityElement([2,2,1,1,1,2,2]))