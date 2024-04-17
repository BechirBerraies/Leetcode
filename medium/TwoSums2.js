/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {

  p = 0
  z = numbers.length- 1 

while(numbers[p] +  numbers[z] !== target  )
{
  if(numbers[p] + numbers[z] > target ){
      z--
  }else 
  p++

}  
return [p+1, z+1]

};