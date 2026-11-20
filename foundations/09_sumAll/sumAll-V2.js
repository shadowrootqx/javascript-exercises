const sumAll = function(min, max) {
    // Guard conditions
    if (!Number.isInteger(min) || min < 0) return "ERROR";
    if (!Number.isInteger(max) || max < 0) return "ERROR";

    // Swap min to max if min is greater than max
    if (min > max) [min, max] = [max, min];
    
    // Calculate sum
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
};