/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {NodeList} l1
 * @param {NodeList} l2
 * @return {NodeList}
 */
 

function ListNode(val) {
    this.val = val;
    this.next = null;
}
let l1 = new ListNode(1).next = new ListNode(4);
l1.next = new ListNode(2);

console.log(l1);
let l2 = new ListNode(1).next = new ListNode(3).next = new ListNode(4);
var mergeTwoLists = function (l1, l2) {
    // 儲存結果的ListNode
    var result = new ListNode(0);
    // 目前Node位置
    var c = result;

    while (l1 !== null && l2 !== null) {
        // l1,l2較小的數加入result
        if (l1.val > l2.val) {
            c.next = l2;
            l2 = l2.next;
        } else {
            c.next = l1;
            l1 = l1.next;
        }
        c = c.next;
      
    }

    //將l1,l2剩下的Node加到result
    if (l1 !== null) {
        c.next = l1;
    }

    if (l2 !== null) {
        c.next = l2;
    }
    return result.next;
};
// console.log(mergeTwoLists(l1, l2));
const hashMap = new Map();
     hashMap.set('123', 1);
console.log(hashMap.size);
hashMap.clear();
console.log(hashMap.size);

