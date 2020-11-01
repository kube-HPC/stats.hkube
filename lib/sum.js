const { isValidArray, sumArray } = require('./utils');

const sum = (array) => {
    if (!isValidArray(array)) {
        return 0;
    }
    return sumArray(array);
};

module.exports = sum;
