/*
121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

eg1.
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

eg2.
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104


*/

var maxProfit = function(prices) {
    //store maximum price in variable
        let maxProfit = 0;
            let minPrice = prices[0]   //create min variable to store first value in array
        //loop through prices array skipping index 1 as the selling price
            for(let i = 1; i < prices.length; i++) {
                let sellPrice = prices[i]
                let profit = sellPrice - minPrice //must get profit positive from sell - min
    //if profit is greater than max profit, replace maxprofit to profit value
                maxProfit = Math.max(maxProfit, profit)
    //if selling price is less than minPrice, set selling price to minPrice
                if(sellPrice < minPrice) minPrice = sellPrice
            }
            return maxProfit
    };