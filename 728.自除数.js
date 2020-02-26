/**
 * https://leetcode-cn.com/problems/self-dividing-numbers/
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let res = []
    function numdivd (num) {
        let _num = num
        while(_num) {
            let item = _num%10
            if (num%item === 0) {
                _num = parseInt(_num/10)
            } else {
                break
            }
        }

        return !_num
    }


    for (let s = left; s <= right; s++) {
        console.log(numdivd(s))
        numdivd(s) && res.push(s)
    }

    return res
    
};

console.log(selfDividingNumbers(1,2))