/*
2520. Count the Digits That Divide a Number

Given an integer num, return the number of digits in num that divide num.

An integer val divides nums if nums % val == 0.

eg1.
Input: num = 7
Output: 1
Explanation: 7 divides itself, hence the answer is 1.

eg2.
Input: num = 121
Output: 2
Explanation: 121 is divisible by 1, but not 2. Since 1 occurs twice as a digit, we return 2.

eg3.
Input: num = 1248
Output: 4
Explanation: 1248 is divisible by all of its digits, hence the answer is 4.

*/
/**
 * @param {number} num
 * @return {number}
 */
 var countDigits = function(num) {
    //input num converted to string to loop over
    const numStr = num.toString();
    //counter to keep track of how many divides into it
    let counter = 0
//after each loop, if the input number is divisible by the digit at current index numStr
    for (let i = 0; i < numStr.length; i++) {
        if (num % parseInt(numStr[i]) == 0) {
            counter += 1;
        }
    }
    return counter
};