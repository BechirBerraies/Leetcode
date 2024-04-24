




/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    let result =""
    let i = 0 ; 
    while(i < strs[0].length){
        let char = strs[0][i]
        for (let j = 1 ; j< strs.length ; j++){
            if (i>= strs[j].length || strs[j][i] !== char){
                return result 
            }
        }
        result += char;
        i++;
    }
    return result

};
Input: strs = ["flower","flow","flight"]


console.log(longestCommonPrefix(strs));