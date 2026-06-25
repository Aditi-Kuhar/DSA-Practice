/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let x1=x;
    if(x<0){
        return false;
    }
    let no=0;
    while(x1>0){
        let rem=x1%10;
        no=no*10 + rem;
        x1=Math.floor(x1/10);
    }
    return no===x;
};
console.log(isPalindrome(121));
console.log(isPalindrome(134));
console.log(isPalindrome(10));
console.log(isPalindrome(-121));