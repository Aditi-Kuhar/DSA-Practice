//mee pehli baari mein theek huaa 😭😭😭
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) 
{
    let curr1=list1;
    let curr2=list2;
    let sentinel=new ListNode();
    let curr=sentinel;
    while(curr1 || curr2){
        if(curr1 && curr2)
        {
            if(curr1.val>curr2.val){
                let newNode=new ListNode(curr2.val,null);
                curr.next=newNode;
                curr=curr.next;
                curr2=curr2.next;
            }
            else
            {
                let newNode=new ListNode(curr1.val,null);
                curr.next=newNode;
                curr=curr.next;
                curr1=curr1.next;
            }
        }
        else{
            if(curr1){
                let newNode=new ListNode(curr1.val,null);
                curr.next=newNode;
                curr=curr.next;
                curr1=curr1.next;
            }
            if(curr2){
                let newNode=new ListNode(curr2.val,null);
                curr.next=newNode;
                curr=curr.next;
                curr2=curr2.next;
            }
        }

    }
    return sentinel.next;
};