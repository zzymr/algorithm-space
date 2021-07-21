/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head) return false;
    let pre = head, cur = head;
    while(cur && cur.next) {
        pre = pre.next;
        cur = cur.next.next;
        // 比较地址
        if(pre === cur) {
            return true;
        }
    }
    return false;

};

