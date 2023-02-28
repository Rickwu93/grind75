/*
1672. Richest Customer Wealth
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

eg1.
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.

eg2.
Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.

eg3.
Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17
*/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    //start counter with 0
    let richest = 0;

    for (let m = 0; m < accounts.length; m++) {
        let customer = accounts[m];
        let wealth = 0;

        for (let n = 0; n < customer.length; n++) {
            wealth += customer[n];
        }
        if( wealth > richest) {
            richest = wealth;
        }
    }
    return richest
};