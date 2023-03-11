/*
1281. Subtract the Product and Sum of Digits of an Integer

Given an integer number n, return the difference between the product of its digits and the sum of its digits.

eg1. 
Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15

eg2.
Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21
*/

/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    //convert a variable toString() to allow iteration of each number
    const values = n.toString()
    //to keep track of the counter for each (sum/product)
    let sum = 0, product = 1
    //for loop to iterate each digit and then converted to Number
    for (const val of values) {
        sum += Number(val)
        product *= Number(val)
    }
    return product - sum
};

