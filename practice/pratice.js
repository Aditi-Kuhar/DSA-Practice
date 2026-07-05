
// Reverse Integer
// 12345
// ↓
// 54321
// Palindrome Number
// 121 → true
// 123 → false
// Factorial using Recursion
// Sum of First N Numbers using Recursion
// Power of Two using Recursion

// function countDigits(n)
// {
//     let count=0;
//     if(n<0){
//         n=Math.abs(n);
//     }
//     if(n==0){
//         return 1;
//     }
//     while(n>0){
//         count++;
//         n=Math.floor(n/10);
//     }
//     return count;
// }
// let n=12345;
// console.log(countDigits(n));
// console.log(countDigits(0));


function reverseInteger(n)
{
    let isneg=false;
    if(n<0){
        isneg=true;
        n=Math.abs(n);
    }

    if(n===0){
        return 0;
    }

    let rev=0;
    let rem=0;
    while(n>0)
    {
        rem=n%10;
        rev=rev*10 +rem;
        n=Math.floor(n/10);
    }
    return isneg? -rev : rev;
}
let n=12345;
console.log(reverseInteger(n));
console.log(reverseInteger(0));
console.log(reverseInteger(-123));