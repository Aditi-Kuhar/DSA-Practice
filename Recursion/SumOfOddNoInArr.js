// let arr=[10,40,23,10,37,25,15];
// function oddSum(n)
// {
//     if(n<0){
//         return 0;
//     }
//   if(arr[n]%2!=0){
//     return arr[n] + oddSum(n-1);
//   }
//   return oddSum(n-1);
// }
// console.log(oddSum(arr.length-1));
//me + chatgpt


// let arr=[5,2,5,3,6,7];
// function oddSum(n){
//     isOdd=(arr[n]%2!=0);
//     if(n==0){
//         if(isOdd){
//             return arr[n];
//         }
//         else{
//             return 0;
//         }
//     }
//     if(isOdd){
//         return arr[n] +oddSum(n-1);
//     }
//     return 0+oddSum(n-1);
// }
//  console.log(oddSum(arr.length-1));
 //sir


 let arr=[5,3,2,10,1];
function oddSum(n){
    let isOdd=(arr[n]%2!=0);
    if(n==0){
        return isOdd? arr[n]:0;
    }
    return isOdd? arr[n]+oddSum(n-1):oddSum(n-1);
}
 console.log(oddSum(arr.length-1));
 //modified version by sir