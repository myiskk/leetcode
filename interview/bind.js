Function.prototype._bind = function(context) {
    context.fn = this
    return function () {
        context.fn()
    }
}
var a = 1
let obj = {
    a: 2,
    f: function() {
        console.log(this)
    }
}

let bindfn = function () {
    console.log(3, this)
}

console.log(bindfn._bind(obj)())