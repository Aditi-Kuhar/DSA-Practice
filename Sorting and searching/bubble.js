
function bubbleSort(arr)
{
    let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        let isSwapped = false;
        for (let j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) {
            break;
        }
    }
    return arr;
}
let arr = [10,100,40,56,23,42];
let arr2 = [10,20,40,56,70,80];
console.log(bubbleSort(arr));
console.log(bubbleSort(arr2));