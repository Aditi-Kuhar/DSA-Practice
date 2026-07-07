/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let n = nums.length;  
  let l=0;
  let r=n-1;
  let m=Math.floor((l+r)/2);
  while(l<=r){
    if(nums[m]=== target){
    return m;
  }
  else if(nums[m]<target){
    l=m+1;
    m=Math.floor((l+r)/2);
  }
  else if(nums[m]>target){
    r=m-1;
    m=Math.floor((l+r)/2);
  }
  }
  return -1;
};
console.log(search([10,20,30,40,50,60,70,80],10));