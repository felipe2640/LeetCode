// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

function lengthLastWord(s) {
    let arr = s.trim().split(" ");
    let n = arr.length;
    return arr[n - 1].length;
};