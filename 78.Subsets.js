/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let resArr = []
    let temp = []

    let backtrack = (start, _temp) => {
        resArr.push(_temp)
        for (let i = start; i < nums.length; i++) {
            _temp.push(nums[i])
            backtrack(i+1, _temp.slice())
            _temp.pop()
        }
    }

    backtrack(0, temp)

    return resArr
};


var subsets2 = function(nums) {
    let arr = [[]]
    for (let i = 0; i < nums.length;i++) {
        arr.map((item) => {
            arr.push(item.concat(nums[i]))
        })
    }
    return arr
};

console.log(subsets2([1, 2])) 