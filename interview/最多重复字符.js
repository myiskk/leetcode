function findMaxDuplicateChar(str) {
    let maxChar = ''
    let maxValue = 1
    let charMap = {}
    str = str.replace(/\s+/g,"")

    for (let i = 0; i < str.length; i++) {
        if (charMap[str[i]])  {
            charMap[str[i]]++;
        } else {
            (charMap[str[i]] = 1)
        }

        if (maxValue < charMap[str[i]]) {
            maxValue = charMap[str[i]]
            maxChar = str[i]
        }
    }

    return {
        maxChar,
        maxValue
    };
}
const str = 'this is a fe test at toutiao on September'

console.log(JSON.stringify(findMaxDuplicateChar(str))) // output: { maxChar: "t", maxValue:7 }