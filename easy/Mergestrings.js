/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */






var mergeAlternately = function(word1, word2) {

    result = ""
    if( word1.length == word2.length )
    {

        for(i =0 ;i < word1.length ; i++)
        {
        result += word1.charAt(i) + word2.charAt(i)
            
        }
    }

    else if( word1.length < word2.length )
    {
        for (i=0 ; i< word2.length ; i++ )
        {
            result += word1.charAt(i)+word2.charAt(i)

        }
    }

    else
    {
        for (i=0 ; i< word1.length ; i++ )
        {
            result += word1.charAt(i)+word2.charAt(i)

        }
    }
    return result
    

};





mergeAlternately("abc","pqr")
mergeAlternately("ab","pqrs")
mergeAlternately("abcd","pq")