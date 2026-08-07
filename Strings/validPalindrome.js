//sir 
var isPalindrome = function (s) {
s = s.toLowerCase();
let filteredString = "";
let rev = "";
for (let i = 0; i < s.length; i++) {
    if (
    (s[i].charCodeAt() >= "a".charCodeAt() && s[i].charCodeAt() <= "z".charCodeAt()) ||
    (s[i].charCodeAt() >= "0".charCodeAt() && s[i].charCodeAt() <= "9".charCodeAt())
    ) {
    filteredString = filteredString + s[i];
    rev = s[i] + rev;
    }
}
return filteredString === rev;
};

//TC=O(n) where n is the length of the string s
//SC=O(n) because we are using extra space for filteredString and rev


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

//TC=O(n) where n is the length of the string s
//SC=O(1) because we are using two pointers and not using any extra space for data structures