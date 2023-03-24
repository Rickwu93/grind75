/*
1309. Decrypt String from Alphabet to Integer Mapping
https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/

You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
Return the string formed after mapping.

The test cases are generated so that a unique mapping will always exist.

eg1.
Input: s = "10#11#12"
Output: "jkab"
Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".

eg2.
Input: s = "1326#"
Output: "acz"
*/

/**
 * @param {string} s
 * @return {string}
 */
 var freqAlphabets = function(s) {
    //dictionary of nums to alphabets
    const alpNum = {
        '1': 'a',
        '2': 'b',
        '3': 'c',
        '4': 'd',
        '5': 'e',
        '6': 'f',
        '7': 'g',
        '8': 'h',
        '9': 'i',
      '10#': 'j',
      '11#': 'k',
      '12#': 'l',
      '13#': 'm',
      '14#': 'n',
      '15#': 'o',
      '16#': 'p',
      '17#': 'q',
      '18#': 'r',
      '19#': 's',
      '20#': 't',
      '21#': 'u',
      '22#': 'v',
      '23#': 'w',
      '24#': 'x',
      '25#': 'y',
      '26#': 'z'        
  }
//empty string to store message
  let output = '';
//basic loop
  for (let i = 0; i < s.length; i++) {
    //checks from next two characters if # is 2 digit numbers, if so increment loop i by 2 to skip over two # characters
    if(s[i+2] == '#') {
        let substr = s[i] + s[i+1] + s[i+2];
        output += alpNum[substr];
        i+=2;
        //else looks up letter to dictionary
    } else {
        output += alpNum[s[i]];
    }
  }
  return output
};


//another way, optimal 

function freqAlphabets(s) {
    let result = "";
    let i = s.length - 1;
    while (i >= 0) {
        if (s[i] === '#') {
            result = String.fromCharCode(parseInt(s.substring(i-2, i)) + 96) + result;
            i -= 3;
        } else {
            result = String.fromCharCode(parseInt(s[i]) + 96) + result;
            i -= 1;
        }
    }
    return result;
}

// We initialize an empty string result to store the mapped characters.
// We initialize the index i to the end of the string s.
// We enter a while loop that runs as long as i is greater than or equal to 0.
// Inside the while loop, we check if the current character s[i] is a '#'. If it is, we take the two preceding characters using substring(i-2, i), parse it as an integer using parseInt, add 96 to it (to get the ASCII code of the corresponding lowercase character), convert it to a character using String.fromCharCode, and add it to the beginning of the result string. We then decrement i by 3 to skip over the two preceding characters and the '#'.
// If the current character is not a '#', we simply parse it as an integer using parseInt, add 96 to it, convert it to a character using String.fromCharCode, and add it to the beginning of the result string. We then decrement i by 1 to move on to the next character.
// Finally, we return the result string.