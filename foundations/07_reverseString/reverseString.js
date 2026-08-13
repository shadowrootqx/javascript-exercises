const reverseString = function(word) {
    let wordReversed = "";
    let wordSplit = word.split("");
    let length = word.length;

    for (let i = 0; i < length; i++) {
        wordReversed += wordSplit[length - i - 1];  
    }

    return wordReversed;

};

// Do not edit below this line
module.exports = reverseString;
