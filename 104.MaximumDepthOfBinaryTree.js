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
 * @return {number}
 */
var maxDepth = function(root) {
    function cb (r, l = 1) {
        if (!r) {
            return l
        } else {
            l++
            let leftLen = cb(r.left, l)
            let rightLen = cb(r.right, l)

            return (leftLen > rightLen ? leftLen : rightLen)
        }
    }
    if (root) {
        return cb(root)
    } else {
        return 0
    }
};


console.log(maxDepth(treeNodeRoot2))