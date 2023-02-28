/*
1512. Number of Good Pairs
https://leetcode.com/problems/number-of-good-pairs/

Given an array of integers nums, return the number of good pairs.

A pair (i, j) is called good if nums[i] == nums[j] and i < j.

eg1.
Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

eg2.
Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.

eg3.
Input: nums = [1,2,3]
Output: 0
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    //start 0
    let counter = 0;
    //two loops to iterate i and j
    for (let i = 0; i < nums.length; i++) {
        //start nested loop on index after i
        //so it's no comparing index i with index j
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] == nums [j]) {
                counter++
            }
        }
    }
    return counter;
};