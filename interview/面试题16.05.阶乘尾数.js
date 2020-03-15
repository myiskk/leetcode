/**
 * https://leetcode-cn.com/problems/factorial-zeros-lcci/
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let m5=0;
    while(n>0){
        m5 += parseInt(n/5);
        n = parseInt(n/5);
    }

    return m5
};

console.log(trailingZeroes(4))