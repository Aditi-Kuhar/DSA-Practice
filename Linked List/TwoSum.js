/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) 
{
    let curr1 = l1;
    let curr2 = l2;
    let sentinel = new ListNode();
    let curr=sentinel;
    let carry=0;
    let sum=0
    let digit=0;
    while(curr1!=null || curr2!=null || carry!=0)
    {
        let sum = carry;
        if(curr1){
            sum+=curr1.val;
        }
        if(curr2){
            sum+=curr2.val;
        }
        digit=sum%10;
        carry=Math.floor(sum/10);
        let newNode= new ListNode(digit,null);
        curr.next=newNode;
        curr=curr.next;
        if(curr1) curr1 = curr1.next;
        if(curr2) curr2 = curr2.next;
    }
    return sentinel.next;
};


//meine shuru mein ese kra tha
 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    let curr1 = l1;
    let curr2 = l2;

    let sentinel = new ListNode();
    let curr = sentinel;

    let carry = 0;
    let sum = 0;
    let digit = 0;

    while (curr1 != null || curr2 != null || carry != 0) {

        if (curr1 != null && curr2 != null) {

            sum = curr1.val + curr2.val + carry;

            if (sum > 9) {
                digit = sum % 10;
                carry = Math.floor(sum / 10);
            } else {
                digit = sum;
                carry = 0;
            }

        }
        else if (curr1 == null && curr2 == null) {

            digit = carry;
            carry = 0;

        }
        else if (curr1 == null) {

            sum = curr2.val + carry;

            if (sum > 9) {
                digit = sum % 10;
                carry = Math.floor(sum / 10);
            } else {
                digit = sum;
                carry = 0;
            }

        }
        else if (curr2 == null) {

            sum = curr1.val + carry;

            if (sum > 9) {
                digit = sum % 10;
                carry = Math.floor(sum / 10);
            } else {
                digit = sum;
                carry = 0;
            }

        }

        let newNode = new ListNode(digit);
        curr.next = newNode;
        curr = curr.next;

        if (curr1) curr1 = curr1.next;
        if (curr2) curr2 = curr2.next;
    }

    return sentinel.next;
};

//sir(ternary  operator) ka use krke code ko aur chota kr skte h
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0;

    while (l1 || l2 || carry) {
        let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        l1 = l1?.next;
        l2 = l2?.next;
    }

    return dummy.next;
};
    