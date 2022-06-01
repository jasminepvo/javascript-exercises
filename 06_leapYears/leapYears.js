const leapYears = function(year) {
    // Condition to check if divisible by 4 but not divisible by 100
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 ==0);
};

// Do not edit below this line
module.exports = leapYears;
