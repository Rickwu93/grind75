/*
169. Majority Element

https://leetcode.com/problems/majority-element/

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

eg1.
Input: nums = [3,2,3]
Output: 3

eg2.
Input: nums = [2,2,1,1,1,2,2]
Output: 2

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    //sort list of numbers in array
    //if majority exists it should be in the middle of array
    nums.sort();
   let index = Math.floor((nums.length-1)/2);
   return nums[index];    
};