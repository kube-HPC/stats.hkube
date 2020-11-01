const { expect } = require('chai');
const { mean } = require('../index');

describe('Mean', function () {
    it('should calc mean from null', function () {
        const array = null;
        const result = mean(array);
        expect(result).to.equal(0);
    });
    it('should calc mean from array', function () {
        const array = [1, 4, 6, 8, 9];
        const result = mean(array);
        expect(result).to.equal(5.6);
    });
});