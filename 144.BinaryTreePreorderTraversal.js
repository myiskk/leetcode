let { treeNodeRoot1 } = require('./_root.js')
/**
 * 二叉树前序遍历
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let preorderTraversal = function(root) {
    let arr = []
    function cb (r) {
        if( !r ) {
            return
        }
        arr.push(r.val)
        cb(r.left)
        cb(r.right)
    }
    cb(root)

    return arr
};



console.log(preorderTraversal(treeNodeRoot1))