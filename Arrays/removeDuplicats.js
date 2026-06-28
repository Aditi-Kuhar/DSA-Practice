/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
   let count=1;
   if(nums.length==0){return 0;}
    for(let i=0;i<nums.length-1;i++){
        if(nums[i]!==nums[i+1]){
            nums[count]=nums[i+1];
            count++;
        }
    }
    return count;
};

console.log(removeDuplicates([10,20,20,20,30,40,40,40,40]));

//by sir

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates2 = function(nums) {
   let x=0;
   for(let i=0;i<nums.length;i++){
    if(nums[i]>nums[x]){
        x++;
        nums[x]=nums[i];
    }
   }
    return x+1;
};

console.log(removeDuplicates2([10,20,20,20,30,40,40,40,40]));