//Write a function that searches for an element in an array and returns the index,if the element is not present then just return -1.

function search(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == num) {
      return i;
    }
  }
  return -1;
}
let arr = [4, 2, 0, 10, 8, 30];
let ans = search(arr, 9);
console.log(ans);

//Write a function that returns the number of negative numbers in an array

let arr1 = [2, -9, 17, 0, 1, -10, -4, -8];
function negNo(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      count++;
    }
  }
  return count;
}
console.log(negNo(arr1));

// Write a function that returns the largest number in an array

let arr2 = [5, 0, 10, 8, 17, 1];
function largest(array) {
  let largNo = array[0]; //put as least no (-Infinity) or array[0] ,don't write -1 (beacuse it may be present in array)
  for (let i = 1; i < array.length; i++) {
    if (array[i] > largNo) {
      largNo = array[i];
    }
  }
  return largNo;
}
console.log(largest(arr2));

// Write a function that returns the smallest number in an array

function smallest(array) {
  let smlNo = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < smlNo) {
      smlNo = array[i];
    }
  }
  return smlNo;
}
console.log(smallest(arr2));
