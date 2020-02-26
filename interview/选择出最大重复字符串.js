/**
 * 选择出最大重复字符串
 */

function Afn (str) {
    let start = 0, end = 1;
    let res = str[start]
    for (start; start < str.length;) {
        let s = str[start]
        for(end; end < str.length;) {
            if(str[start] == str[end]) {
                s = s + str[end]
                if (res.length < s.length) {
                    res = s
                }
                end++
            } else {
                break;
            }
        }
        start++;
    }

    return res
}


Afn('abbbbbdccc')