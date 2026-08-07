/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) 
{
    s = s.toLowerCase().replace(/[^a-z0-9]/g, ""); //yeh ni soch pa ri thi
    let left=0; //two pointer soch pa ri thi
    let right=s.length-1;
    while(left<right){
        if(s[left]!=s[right]){
            return false;
        }
        
        left++;
        right--;
    }
    return true;
};