/*
1480. Running Sum of 1d Array
https://leetcode.com/problems/running-sum-of-1d-array/

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

eg1. 
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

eg2.
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

eg3.
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    let runningSum = 0;
    for (let i = 0; i < nums.length; i++) {
       //updates value by adding current element input array i
        runningSum = runningSum + nums[i];
        //updates new current element array value
        nums[i] = runningSum;
    }
    return nums;
};