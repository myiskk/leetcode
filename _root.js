function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


let treeNodeRoot1 = new TreeNode(1)
treeNodeRoot1.left = new TreeNode(2)
treeNodeRoot1.left.right = new TreeNode(3)

exports.treeNodeRoot1 = treeNodeRoot1