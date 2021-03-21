// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome
//A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward,
// such as madam or racecar
var isPalindrome = function(str) {
    var reversedString = str
        .split("")
        .reverse()
        .join("");
    
    if (reversedString === str) {
        return true;
    } else {
        return false;
    }
};

// Alternatively, this problem could have been solved by comparing the letters at the front of `str` to the letters at the back of `str`

var isPalindrome = function(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length -1 - i]) {
            return false;
        }
    }
    return true;
}