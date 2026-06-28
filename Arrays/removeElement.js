/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
            nums[count]=nums[i];
            count++;
        }
    }
    return count;
};
console.log(removeElement([10,20,20,20,30,40,40,40,40],20));