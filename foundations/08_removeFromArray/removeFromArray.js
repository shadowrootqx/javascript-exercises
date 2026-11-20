const removeFromArray = function(arr, ...values) {
    // Check if there is any common element in the array and in the arguments list.
    // values is an array of arguments. We iterate backward since we use splice to delete items.
    for (let i = arr.length - 1; i >=0; i--) {
        // Assume current item is not in the arguments list.
        let isThere = false;

        for (let argument of values) {
            if (arr[i] === argument) {
                isThere = true;
                break; // Stop this loop as one appearance of the current item in the arguments list is enough to delete it.
            }
        }
        
        // If current item is an argument, delete it from main array. 
        if (isThere) {
            arr.splice(i, 1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
