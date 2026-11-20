// This version of the sumAll problem uses Gauss sums to reduce the time used for calculus
// to O(1) (constant time with no loop).

const sumAll = function(min, max) {
    // Guard conditions
    if (!Number.isInteger(min) || min < 0) return "ERROR";
    if (!Number.isInteger(max) || max < 0) return "ERROR";

    // Swap min to max if min is greater than max
    if (min > max) [min, max] = [max, min];

    // Calculate Gauss sums and interval sum
    let sumBeforeMax = max * (max + 1) / 2;
    let sumBeforeMin = min * (min - 1) / 2; // Sum up until min - 1
    let intervalSum = sumBeforeMax - sumBeforeMin;

    return intervalSum;
}