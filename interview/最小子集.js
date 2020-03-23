/** 
 * 给定任一数组和数字n
加和大于等于n的最短连续子数组的长度

[5, 7, 8, 3, 9, 2, 8, 6, 7, 5]
n = 16      3
n = 20      3
n = 100    -1
n = 5        1
*/
function subsets2(arr, n) {
    let len = -1
    for (let i = 1; i < arr.length; i++) {
        for (let start = 0; start < arr.length; start++) {
            let sum = arr[start]
            for (let end = start + 1; end < start + i; end++) {
                sum += arr[end]
            }
            if (sum >= n) {
                len = i
                return len
            }
        }
    }
    
    return len
}


function subsets1(arr, n) {
    let len = -1
    for (let start = 0; start < arr.length; start++) {
        let sum = arr[start]
        for (let end = start + 1; end < arr.length; end++) {
            sum = sum + arr[end]
            if (sum >= n) {
                len = len < (end - start) ? end - start : len;
                break;
            }
        }
    }
    return len
}

console.log(subsets1([5, 7, 8, 3, 9, 2, 8, 6, 7, 5], 16))