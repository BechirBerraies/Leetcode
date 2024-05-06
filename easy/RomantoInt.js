/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0 ;
    const RomanToint = {

        'I'     :    1,
        'V'   :      5,
        'X'    :     10,
        'L'     :    50,
        'C'      :   100,
        'D'       :  500,
        'M'        : 1000,
    }

for( i = 0 ; i< s.length ; i++ ){
    if(s[i] == 'I' && (s[i+1] == 'V' || s[i+1] =='X' ) ){
        sum += RomanToint[s[i+1]] - RomanToint[s[i]]
        i++
    }
    else if(s[i] == 'X' && (s[i+1] == 'L' || s[i+1] == 'C' ) ){
        sum += RomanToint[s[i+1]] - RomanToint[s[i]]
        i++
    }
    else if(s[i] == 'C' && (s[i+1] == 'D' || s[i+1] == 'M' ) ){
        sum += RomanToint[s[i+1]] - RomanToint[s[i]]
        i++
    }
    else {
        sum += RomanToint[s[i]]
    }
}
return sum


};

s = "MCMXCIV"
console.log(romanToInt(s));