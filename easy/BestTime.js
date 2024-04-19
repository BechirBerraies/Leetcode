/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    profit= 0 
    soum = prices[0] 
    for(i = 0 ; i < prices.length ; i++ ){
        if (prices[i]< soum ){
            soum = prices[i]
        }
        else if (prices[i]- soum > profit ){
            profit = prices[i]-soum
        }


    }
    return profit



};

prices = [7,1,5,3,6,4]
prices2 = [7,6,4,3,1]
console.log(maxProfit(prices));