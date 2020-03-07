
/**
 * @param {number} n
 * @return {Array} 
 */
function calc (n) {
    if ( n == 1) {
        return n
    }
    let base = [2,3,5,7]
    let res = []
    let _n = n
    while (_n && Math.abs(_n) != 1) {
        let baseKey = _n
        base.forEach(item => {
            if (_n%item == 0) {
                baseKey = item
                return
            }
        })
        _n = _n/baseKey
        res.push(baseKey)
    }
    return res
}

console.log(calc(-21))