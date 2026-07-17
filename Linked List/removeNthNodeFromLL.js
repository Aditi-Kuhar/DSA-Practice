// OR (two pass)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //add sentinel node at start
    let sentinel=new ListNode();
    sentinel.next=head;
    let curr=head;
    let length=0;
    //calculate the length of LL
    while(curr!=null)
    {
        length++;
        curr=curr.next;
    }
    //calculate the index of prev no before the node to be deleted
    let prevNo=length-n;
    let prev=sentinel;
    //reach the prev node using loop
    for(let i=0;i<prevNo;i++){
        prev=prev.next;
    }
     //just delete prev.next
    prev.next=prev.next.next;
    return sentinel.next;
};

// OR (one pass)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //add sentinel node at start
    let sentinel=new ListNode();
    sentinel.next=head;
    let slow=sentinel;
    let fast=sentinel;
    //move my first pointer ahead by n
    for(let i=0;i<n;i++){
        fast=fast.next;
    }
    //move both  pointer until fast pointer reaches the last node
    while(fast.next!=null){
        slow=slow.next;
        fast=fast.next;
    }
    //just delete slow.next
    slow.next=slow.next.next;
    return sentinel.next;
};