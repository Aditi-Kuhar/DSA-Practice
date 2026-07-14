//Approach 1 T.C=O(n) AND SC =O(1)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr=[];
    let curr=head;
    while(curr!=null){
        arr.push(curr.val);
        curr=curr.next;
    }
    let left=0;
    let right=arr.length-1;
    while(left<right){
        if(arr[left]!=arr[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;
};
//Approach 2 T.C=O(n) AND SC =O(1)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //Finding middle element
    let fast = slow = head;
    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
    }
    //Reversing the second half
    let prev=null;
    let curr=slow;
    while(curr!=null){
        let temp=curr.next;
        curr.next=prev;
        prev=curr;
        curr=temp;
    }

    //comparing with 2 pointers
    let firstList=head;
    let secondList=prev;
    while(secondList!=null){
        if(firstList.val!=secondList.val){
            return false;
        }
        firstList=firstList.next;
        secondList=secondList.next;
    }
    return true;
};