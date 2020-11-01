const { expect } = require('chai');
const { sum } = require('../index');

describe('Sum', function () {
    it('should calc mean from null', function () {
        const array = null;
        const result = sum(array);
        expect(result).to.equal(0);
    });
    it('should calc mean from array', function () {
        const array = [1, 4, 6, 8, 9];
        const result = sum(array);
        expect(result).to.equal(28);
    });
});