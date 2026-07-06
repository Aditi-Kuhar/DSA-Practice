

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


// function reverseInteger(n)
// {
//     let isneg=false;
//     if(n<0){
//         isneg=true;
//         n=Math.abs(n);
//     }

//     if(n===0){
//         return 0;
//     }

//     let rev=0;
//     let rem=0;
//     while(n>0)
//     {
//         rem=n%10;
//         rev=rev*10 +rem;
//         n=Math.floor(n/10);
//     }
//     return isneg? -rev : rev;
// }
// let n=12345;
// console.log(reverseInteger(n));
// console.log(reverseInteger(0));
// console.log(reverseInteger(-123));


// function isPalindrome(n)
// {
//     let n1=n;
//     if(n<0){
//         return false;
//     }
//     if(n===0){
//         return true;
//     }
//     let rev=0;
//     let rem=0;
//     while(n>0)
//     {
//         rem=n%10;
//         rev=rev*10 +rem;
//         n=Math.floor(n/10);
//     }
//     return n1===rev;
// }
// console.log(isPalindrome(121));
// console.log(isPalindrome(123));
// console.log(isPalindrome(1221));
// console.log(isPalindrome(-121));
// console.log(isPalindrome(0));


// Sum of First N Numbers using Recursion
// Power of Two using Recursion


// function factorial(n)
// {
//     if (n < 0) {
//     return "Factorial is not defined for negative numbers";
// }

//     if(n===0){
//         return 1;
//     }
//     return n * factorial(n-1);
// }
// console.log(factorial(4));
// console.log(factorial(5));

// function sum(n)
// {
//     if (n < 0) 
//     {
//     return "Invalid input";
//     }
//     if(n==0){
//         return 0;
//     }
//     return n + sum(n-1);
// }
// console.log(sum(5));
// console.log(sum(0));
// console.log(sum(-5));


// function isPowerOfTwo(n) 
// {
//     if(n===1){
//         return true;
//     }
//     if(n<=0 || n%2!=0){
//         return false;
//     }
//     return isPowerOfTwo(n/2);
// }
// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(2) );
// console.log(isPowerOfTwo(4) );
// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwo(16));

// console.log(isPowerOfTwo(3) );
// console.log(isPowerOfTwo(5));
// console.log(isPowerOfTwo(6) );
// console.log(isPowerOfTwo(10) );
// console.log(isPowerOfTwo(12));

// console.log(isPowerOfTwo(0));
// console.log(isPowerOfTwo(-8) );
// console.log(isPowerOfTwo(-1) );
