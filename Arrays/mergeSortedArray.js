/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let c1=m-1;
    let c2=n-1;
    let count=nums1.length-1;
    while(c2 >= 0){
        if( c1>=0 && (nums1[c1]>=nums2[c2])  ){
            nums1[count]=nums1[c1];
            c1--;
            count--;
        }
        else{
            nums1[count]=nums2[c2];
            c2--;
            count--;
        }
    }
    return nums1;
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));