/*
409. Longest Palindrome
https://leetcode.com/problems/longest-palindrome/

Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

eg1.
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

eg2.
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
*/

var longestPalindrome = function(s) {
    //empty string to keep track of each character in string s
    const map = {};
    //counter at 0 init
    let counter = 0;
    //loops through string s
    for (let i = 0; i < s.length; i++) {
        //check if it's counter before looking through map object
        //if 1, matching character for current character so add 2 (form palindrome)
        //if 0 or undefined, current character not counter and function set its count to 1
      if (map[s[i]] === 1) {
        map[s[i]] = 0;
        counter += 2;
      } else {
        map[s[i]] = 1;
      }
    }
    //after looping through all the characters in input string, check count variable if less than length of input string
    //means one character is not used to form a palindrome, so increment count by 1
    if (counter < s.length) {
      counter += 1;
    }
    
    return counter;
  };