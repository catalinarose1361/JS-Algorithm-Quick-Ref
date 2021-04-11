// Write code to create a function that accepts a string 
//and returns an acronym for the given string


//ACRONYM = an abbreviation formed from the initial letters of other 
//words and pronounced as a word (e.g. ASCII, NASA )

var acronymBuilder = function(str) {
    var words = str.split(" ")
    var result = "";

    for (var i = 0 ; i < words.length; i++) {
        var word = words[i];
        result += word[0].toUpperCase()
    }

    return result;
};
