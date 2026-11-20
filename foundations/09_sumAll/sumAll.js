const sumAll = function(a, b) {
    // Check if arguments are positive integers.
    if (!Number.isInteger(a) ||  a < 0) {
        return "ERROR";
    } 
    if (!Number.isInteger(b) || b < 0) {
        return "ERROR";
    }

    // Main logic
    let sum = 0;

    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        } 
    } else {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
