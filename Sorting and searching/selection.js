
function selection(arr)
{
    let n=arr.length;
    for(let i=0;i<n-1;i++){
        let min=i;
        for(let j=i+1;j<n;j++)
        {
            if(arr[j]<arr[min]){ 
                min=j;
            }
        }
        //swapping
        if(min!=i)
        {
        let temp=arr[i];
        arr[i]=arr[min];
        arr[min]=temp;
        }
    }
    return arr;
}
let arr=[7,1,5,4,3,2];
console.log(selection(arr));
//The selection sort technique, where the smallest element is repeatedly moved to the front. 