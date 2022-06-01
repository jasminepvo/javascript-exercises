const repeatString = function(string, num) {
    // repeats the string x many times as defined in 'num'
    for(let i=0; i <= num; i++) {
        let result = string.repeat(num);
        return result;
    }
    // returns error when num is a negative #
    if(num <=0)
        return "ERROR";
    // repeats the string random amount of times as defined in 'number'
    for(let i=0; i <= number; i++) {
        let result = string.repeat(number);
        return result;
    } 
    // works with blank strings - additional code is not needed for this test function
};

// Do not edit below this line
module.exports = repeatString;
