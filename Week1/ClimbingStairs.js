/*
70. Climbing Stairs
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

eg1.

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

eg2.

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    //assuming n is only a positive integer and can only go up and not down
   //base case if one step
   if (n <= 1) return 1;

   //else we return a basic fibonaci sequence of n-1 and n-2
   return climbStairs(n - 1) + climbStairs(n - 2);
};
