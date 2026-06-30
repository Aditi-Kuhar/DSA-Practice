/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count=0;
    let maxCount=0;
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]===1)
        {
            count++;
        }
        else{
        maxCount= Math.max(maxCount,count);
        count=0;
        }
    }
    return Math.max(maxCount,count);
};
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));