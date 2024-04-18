/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let j = nums[0]
    while( j < nums.length ){

        console.log("this is j first:"+j);
        j = nums[j] + j
        console.log("this is j :"+j);
        if(j == nums[j]+j){
            break
        }
        
    }
    console.log("after loop j " +j );
    if(j >= nums.length -1 ){
        return true
    }
    else 
    return false
    };


    nums4=[1]
    nums3 = [0]
nums = [2,3,1,1,4]
nums1 = [3,2,1,0,4]
nums5= [2,5,0,0]
console.log(canJump(nums5));
