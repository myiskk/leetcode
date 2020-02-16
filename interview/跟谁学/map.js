// 实现一个map
Array.prototype.mapLLw = function (cb) {
    if (! this instanceof Array) {
        throw 'no array'
    }
    
    let arr = this.splice(0)
    arr.forEach((item, index) => {
        arr[index] = cb.call(this, item, index)
    })

    return arr
}


let arr = [33,2,3]
let arr1 = arr.mapLLw((item, index) => {
    return item*2
})

console.log(arr1, arr)
