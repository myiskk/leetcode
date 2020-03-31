/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let leftArr = ['(', '[', '{']
    let rightArr = [')', ']', '}']
    let stack = []
    for (let i = 0; i < s.length; i++) {
        let sitem = s[i]
        if (stack.length > 0) {
            let last = stack[stack.length - 1]
            if (leftArr.indexOf(sitem) > -1) {
                stack.push(s[i])
            } else if (rightArr.indexOf(sitem) > -1 && rightArr.indexOf(sitem) == leftArr.indexOf(last)) {
                stack.pop()
            } else {
                return false
            }
        } else {
            stack.push(s[i])
        }
    }

    return !stack.length
};

console.log(isValid('()'))