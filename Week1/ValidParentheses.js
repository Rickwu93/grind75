/*
20. Valid Parentheses

https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


eg1.
Input: s = "()"
Output: true

eg2.
Input: s = "()[]{}"
Output: true

eg3.
Input: s = "(]"
Output: false
*/


/**
 * @param {string} s
 * @return {boolean}
 */

//define what pairs are true cases
//if odd return false, if even then check cases for true^
//Open brackets must be closed by the same type of brackets.
//Open brackets must be closed in the correct order.
//Every close bracket has a corresponding open bracket of the same type.

const pairs = {
    "(": ")",
    "{": "}",
    "[": "]"
}


var isValid = function(s) {
    //to check odd length, return false    
    if (s.length % 2 === 1) return false;
    //check if closing bracket and return false right away if it is
    if (s[0] === ")" || s[0] === "}" || s[0] === "]") return false
    //check if last element is a open bracket, if it is then return false
    if (s[s.length - 1] === "(" || s[s.length - 1] === "{" || s[s.length -1] === "[") return false

//to push into to check
    let output = []
//iterate through indexes to check brackets
    for(let i = 0; i < s.length; i++) {
        //if the bracket is open bracket push into output 
        //else, assume it's closing bracket and check for const pairs matches
        if(s[i] === "(" || s[i] === "{" || s[i] === "[") {
            output.push(s[i])
        } else if (pairs[output.pop()] !== s[i]) {
            return false
        }
    }   
    //checks return output for even number length otherwise would return false
    return output.length === 0
};


//other method:

var isValid = function(s) {
    //start with empty array to push indexes into
    var array = [];
    //splits each input up
    s = s.split( "" );
    //loop through and declaring the if statements for true values
    for(let i = 0; i < s.length; i ++){
        if( s[i] === "(" ) array.push( ")" );
        else if( s[i] === "[" ) array.push( "]" );
        else if( s[i] === "{" ) array.push( "}" );
        //
        else if( s.length === 0 || array[array.length - 1] !== s[i] ) return false;
        else array.pop();
    }
    return array.length === 0;
};