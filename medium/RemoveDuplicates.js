/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
    for(i=0 ; i< nums.length ; i++){

        if(nums[i] == nums[i+2]){
            console.log("befor splice i = "+ i );
            console.log("this is nums[i] "+ nums[i]);
            console.log("this is nums[i+2]" + nums[i+2]);
            nums.splice(i+2,1)
            console.log("after splice : "+nums);
            i--
        }
    }
    return nums  
};


// nums1 = [0,0,1,1,1,1,2,3,3]
nums2 = [0,0,1,1,1,1,2,3,3]

console.log(removeDuplicates(nums2));

