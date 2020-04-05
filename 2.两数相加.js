/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let node = new ListNode('head')
    let temp = node , n = 0
    while (l1 || l2) {
        let n1 = l1.val || 0
        let n2 = l2.val || 0
        let sumAll = n1 + n2 + n
        n = parseInt(sumAll/10)
        temp.next = new ListNode(sumAll % 10)
        temp = temp.next
        l1 = l1.next || 0
        l2 = l2.next || 0
    }

    if (n) {
        temp.next = new ListNode(n)
    }

    return node.next
};
