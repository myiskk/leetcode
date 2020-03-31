function intanceof (a, b) {
    let b_proto = b.prototype
    let a_proto = a.__proto__
    while (true) {
        if (!a_proto) {
            return
        }
        if (a_proto === b_proto) {
            return true
        }

        a_proto = a_proto.__proto__
    }
}



function instance_of(L, R) {//L 表示左表达式，R 表示右表达式 

    var O = R.prototype;   // 取 R 的显示原型 

    L = L.__proto__;  // 取 L 的隐式原型

    while (true) {    

        if (L === null)      

             return false;   

        if (O === L)  // 当 O 显式原型 严格等于  L隐式原型 时，返回true

             return true;   

        L = L.__proto__;  

    }

}