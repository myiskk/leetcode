let { treeNodeRoot2 } = require('./_root.js')
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let res = true
    function cb (_root) {
        if (!_root) {
            return 0
        }
        let leftlen = cb(_root.left)
        let rightlen = cb(_root.right)

        if (Math.abs(leftlen - rightlen) > 1) {
            res = false
            return 
        }
        
        return Math.max(leftlen, rightlen) + 1
    }
    cb(root)

    return res
};

console.log(isBalanced(treeNodeRoot2))