// Write code to create a function that returns the factorial of `num`
// A Factorial is the product of an integer and all the integers below it; e.g. factorial four ( 4! ) is equal to 24
var factorial = function(num) {
    var result = 1;

    for (var i = num; i > 1; i--) {
        result = result * i;
    }

    return result;

};