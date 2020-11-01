const { isValidArray, sumArray } = require('./utils');

const mean = (array) => {
    if (!isValidArray(array)) {
        return 0;
    }
    const sum = sumArray(array);
    return sum / array.length;
};

module.exports = mean;
