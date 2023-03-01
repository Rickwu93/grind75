/*
217. Contains Duplicate
https://leetcode.com/problems/contains-duplicate/

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

eg1.
Input: nums = [1,2,3,1]
Output: true

eg2.
Input: nums = [1,2,3,4]
Output: false

eg3.
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    //base case
    if (nums.length < 1) {
        return false;
    }
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true
            }
        }
    } return false
};