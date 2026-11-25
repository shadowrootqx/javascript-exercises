// Leap years are years that are divisible by 4, are not divisible by 100 but are divisible by 400. My first try
// was 
// if (Number.isInteger(year / 4) && !Number.isInteger(year / 100)) return true; 
// if (Number.isInteger(year / 400)) return true;
// return false;
// but I refined the code to express he same thing in a single line.

const leapYears = function(year) {
    return ((Number.isInteger(year / 4) && !Number.isInteger(year / 100)) || Number.isInteger(year / 400));
};

// Do not edit below this line
module.exports = leapYears;
