let { treeNodeRoot2 } = require('./_root.js')
/**
 * 二叉树的层次遍历
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function (root) {
    let arr = []
    let layer = 0

    function cb (r, i) {
        if (r) {
            if (arr[i]) {
                arr[i].push(r.val)
            } else {
                arr[i] = [r.val]
            }
            cb(r.left, i+1)
            cb(r.right, i+1)
        }
    }

    cb(root, layer)

    return arr
};

console.log(levelOrder(treeNodeRoot2))