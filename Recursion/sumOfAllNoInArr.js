let arr = [10, 20, 30, 40, 50];
function sum(n) {
    if (n == 0) {
        return arr[0];
    }
    return arr[n] + sum(n - 1);
}
console.log(sum(arr.length - 1));