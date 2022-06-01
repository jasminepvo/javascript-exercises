const sumAll = function(min, max) {
    // Swap values when min is greater than max using temporary holder
    if(min>max) {
        const temp = min;
        min = max;
        max = temp;
    }
    // Return error for negative numbers
    if(min<0 || max<0) return "ERROR";

    // Return error if NOT number parameter
    if(!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    
    // Sums numbers within the range
    let sum = 0;
    for(let i=min; i<=max; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
