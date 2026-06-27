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