function secondLargest(arr)
{
    if(arr.length<2){
        return "Array should have atleast 2 elements";
    }
    let largest=-Infinity;
    let seclarg=-Infinity;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>largest){
            seclarg=largest;
            largest=arr[i];  
        }
        else if(arr[i]>seclarg && arr[i]!=largest){
            seclarg=arr[i];
        }
    }
    return seclarg;
}
let arr=[4,9,0,2,8,7,1];
console.log(secondLargest(arr));


//old largest ko second largest banana
// seclarg ko -Infinity se initialize karna to avoid duplicates [9,9,9]
//handle if arr