const {expect} = require('chai');
const { isSymmetric } = require('./checkForSymmetry');

describe('symmetricArr', () => {
    it('if is not array', () => {
        expect(isSymmetric(5)).to.be.false;
    });
    it('symmetric odd array', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });
    it('symmetric even array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });
    it('non symmetric odd array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });
    it('non symmetric even array', () => {
        expect(isSymmetric([1, 2, 1, 2])).to.be.false;
    });
    it('non symmetric str num', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });
});

