// Write code to create a function that accepts a number (`n`)
// and returns a new number that satisfies the look-and-say-sequence

var lookAndSay = function(n) {
    var numString = n.toString()
    var result = "";

    var currentCount = 1;
    var currentDigit = numString[0];
    for (var i = 1; i <= numString.length; i++) {
        var digit = numString[i];

        if (digit === currentDigit) {
            currentCount ++;
        } else {
            result += currentCount;
            result += currentDigit;
            currentCount = 1;
            currentDigit = digit;
        }
    }

    return parseInt(result);
};

//To generate a member of the sequence from the previous member, read off the digits of the previous member, counting the number of digits in groups of the same digit. For example:

// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21
// 21 is read off as "one 2, then one 1" or 1211.