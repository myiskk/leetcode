/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    
    if (str1 === str2) {
        return str1
    }

    if (str1.length > str2.length) {
        let res = str1.split(str2).filter(item => item !='')
        if (res.length === 0) {
            return str2
        } else if (res.length == 1) {
            return gcdOfStrings(res[0], str2)
        }
    }

    if (str2.length > str1.length) {
        let res = str2.split(str1).filter(item => item !='')
        if (res.length === 0) {
            return str1
        } else if (res.length == 1) {
            return gcdOfStrings(res[0], str1)
        }
    }

    return ''
};


console.log(gcdOfStrings('ABABAB', 'ABA'))