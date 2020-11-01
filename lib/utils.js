const isValidArray = (array) => {
    return Array.isArray(array) && array.length > 0;
};

const sumArray = (array) => {
    return array.reduce((acc, c) => acc + c, 0);
};

module.exports = {
    isValidArray,
    sumArray
};
