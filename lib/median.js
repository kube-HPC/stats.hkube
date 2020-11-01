const { isValidArray } = require('./utils');

const median = (array) => {
    if (!isValidArray(array)) {
        return 0;
    }
    array.sort((a, b) => a - b);
    const half = Math.floor(array.length / 2);
    const result = array.length % 2 ? array[half] : (array[half - 1] + array[half]) / 2.0;
    return result;
};

module.exports = median;
