function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let treeNodeRoot1 = new TreeNode(2)
treeNodeRoot1.left = new TreeNode(3)
treeNodeRoot1.left.right = new TreeNode(4)

exports.treeNodeRoot1 = treeNodeRoot1


let treeNodeRoot2 = new TreeNode(1)
treeNodeRoot2.left = new TreeNode(2)
treeNodeRoot2.right = new TreeNode(3)

exports.treeNodeRoot2 = treeNodeRoot2
