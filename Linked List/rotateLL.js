/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) 
{
    if(!head || !head.next ||k===0) return head;
    //calculate the length
    let curr=head;
    let length=0;
    while(curr)
    {
        length++;
        curr=curr.next;
    }

    //to avoid un-neccessary loops
    k = k % length;
    if(k===0){return head;}
    let slow=head;
    let fast=head;

    //fast will start from k pos from head
    for(let i=0;i<k;i++){
        fast=fast.next;
    }

    //now slow and fast pointer movements 
    //to reach k-1 node before 
    while(fast.next)
    {
        slow=slow.next;
        fast=fast.next
    }

    // now slow.next becomes new head
    //fast.next connected to head;
    let newHead=slow.next;
    fast.next=head;
    slow.next=null;
    return newHead;
}   


