/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let rev=0;
    let xcopy=x;
    x=Math.abs(x);
while(x>0){
        let rem=x%10;
        if (rev > 214748364 || (rev === 214748364 && rem > 7)) {
    return 0;
}
        rev=rev*10 + rem;
        x=Math.floor(x/10);
    }
    if(xcopy<0){
        rev=rev*-1;
    }
    return rev;
};
console.log(reverse(-12));

