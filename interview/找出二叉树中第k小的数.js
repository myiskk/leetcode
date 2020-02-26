let { treeNodeRoot2 } = require('../_root.js')

/**
 * 找出二叉树中第k小的数
 */
function BinaryTreeK2 (root, k) {
    let sortArr = []
    let stack = []
    stack.push(root)
    sortArr.push(root.val)

    while(stack.length < 1) {
        for (let i = 0; i < stack.length; i++) {
            let s = stack[i]

            if (root.left) {
                stack.push(root.left)
            } 
            if (root.right) {
                stack.push(root.right)
            }
            
        }
        
    }
}

function BinaryTreeK1 (root, k) {
    let arr = []
    function cb (_root) {
        if (!_root) {
            return
        }
        arr.push(_root.val)
        cb(_root.left)
        cb(_root.right)
    }
    cb(root)
    arr.sort()

    return arr[k-1]
}


console.log(BinaryTreeK1(treeNodeRoot2, 1))