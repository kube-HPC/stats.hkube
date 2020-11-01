const { expect } = require('chai');
const { median } = require('../index');

describe('Median', function () {
    it('should calc mean from null', function () {
        const array = null;
        const result = median(array);
        expect(result).to.equal(0);
    });
    it('should calc mean from array', function () {
        const array = [1, 4, 6, 8, 9, 7];
        const result = median(array);
        expect(result).to.equal(6.5);
    });
    it('should calc mean from array', function () {
        const array = [1, 4, 6];
        const result = median(array);
        expect(result).to.equal(4);
    });
});