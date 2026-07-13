
function insertion(arr)
{
    //hum maan re hai arr[0] is sorted,1 element sorted hee hota
    for(let i=1;i<arr.length;i++){
        let curr=arr[i];
        let prev=i-1;
        while(arr[prev]>curr && prev>=0){
            arr[prev+1]=arr[prev];
            prev--;
        }
        arr[prev+1]=curr;
    }
    return arr;
}
let arr=[7,4,3,5,1,2];
console.log(insertion(arr));