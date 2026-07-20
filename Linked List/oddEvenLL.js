/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) 
{
    if(head==null){
        return head;
    }
    let curr=head;
    let temp=curr.next;
    let newHead=temp;
    while(temp!=null && temp.next!=null)
    {
        curr.next=curr.next.next;
        temp.next=temp.next.next;
        curr=curr.next;
        temp=temp.next;
    }
    curr.next=newHead;
    return head;
};