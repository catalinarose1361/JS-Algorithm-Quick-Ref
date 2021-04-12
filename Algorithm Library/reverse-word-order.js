// Write code to create a function that accepts a string (`str`) 
// and reverses the order of the words in the string

var reverseWords = function(str) {
    var words = str.split(" ");
    var reversedWords = words.reverse();

    return reversedWords.join(" ")
};

//Split a string into an array of substrings:

    //.split(" ")
        //Split a string into an array of substrings:
        //EXAMPLE: "How are you doing today" would become 
        //["How", "are", "you", "doing", "today"]

    //.split()
        //If the seperator is omitted, the entire string 
        // will be returned (an array with only one item)
        //EXAMPLE: "How are you doing today" would become 
        //["How are you doing today"]

    //.split("")
        //Separate each character, including white-space
        //EXAMPLE: "How are you doing today" would become 
        //[H,o,w, ,a,r,e, ,y,o,u, ,d,o,i,n,g, ,t,o,d,a,y]

//.reverse() method reverses the order of the elements in an array.

//.join() method returns the array as a string.
    //["Banana", "Orange", "Apple", "Mango"] becomes
    //"Banana,Orange,Apple,Mango"