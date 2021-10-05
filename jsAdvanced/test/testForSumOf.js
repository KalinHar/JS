const { expect } = require('chai');
const { sum } = require('./sumOfNums');

describe('sum of  nums', () => {
    it('return strt sum - 0', () => {
        expect(sum([])).to.equal(0);
    });
    it('return calculated sum - 10', () => {
        expect(sum([2, 5, 3])).equal(10);
    });
    it('return NaN', () => {
        expect(sum([1, 'we', 45])).to.be.NaN;
    })
});
