/*
383. Ransom Note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

eg1.
Input: ransomNote = "a", magazine = "b"
Output: false

eg2.
Input: ransomNote = "aa", magazine = "ab"
Output: false

eg3.
Input: ransomNote = "aa", magazine = "aab"
Output: true
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
    //empty map object
    let map = {};
    //loops through every character in 'magazine' string and adds it to map object as a key with value of 1
    //if already exists += 1
    for (let i of magazine) {
        if (i in map) {
            map[i] += 1;
        } else {
            map[i] = 1;
        }
    }
    //loop though all characters of ransomNote string, checks if it exists in map object
    //if exist, value of key is -= 1
    //if value in map object is negative at end ==> false otherwise true..
    for (let i of ransomNote) {
        if (i in map) {
            map[i] -= 1;
            if (map[i] == -1) {
                return false
            }
        } else {
            return false
        }
    }
    return true
};