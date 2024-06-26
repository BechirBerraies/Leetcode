// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string neword, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.



/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    let isPalindrome = true 
    let neword = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    console.log(neword);

    for(let i = 0 ; i < neword.length/2 ; i++ )
    {
        if (neword[i] != neword[neword.length-i-1]){
            console.log("this is the beginning "+ neword[i]  , "this is the end "+neword[neword.length-i-1]);
            isPalindrome = false
        }
        else{
            console.log("this is the beginning "+ neword[i]  , "this is the end "+neword[neword.length-i-1]);
            isPalindrome = true

        }
    }
    console.log(isPalindrome);
    return isPalindrome


}


let r = "A man, a plan, a canal: Panama"
isPalindrome(r);