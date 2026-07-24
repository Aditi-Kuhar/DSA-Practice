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
var swapPairs = function(head) 
{
    if(!head || !head.next){
        return head;
    }
    
    let sentinel=new ListNode();
        sentinel.next=head;
        let prev=sentinel;
        let curr=head;
        let future=curr.next;
        while(curr && curr.next){
            let temp=future.next;
            prev.next=future;
            future.next=curr;
            curr.next=temp;

            prev=curr;
            curr=prev.next;
            future=curr? curr.next : null;
        }
        return sentinel.next;
};