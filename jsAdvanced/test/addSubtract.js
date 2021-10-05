const {expect} = require('chai');
const { createCalculator } = require('./addSubtract');

describe('addSubtract', () => {
    let instance = null;

    beforeEach(() => {
        instance = createCalculator();
    });

    it('has all methods', () => {
        expect(instance).to.haveOwnProperty('add');
        expect(instance).to.haveOwnProperty('subtract');
        expect(instance).to.haveOwnProperty('get');
    });
    
    it('start value', () => {
        expect(instance.get()).to.be.equal(0);
    });

    it('add nums', () => {
        instance.add(2);
        expect(instance.get()).to.be.equal(2);
        instance.add('3');
        expect(instance.get()).to.be.equal(5);
    });

    it('subtract nums', () => {
        instance.subtract(-2);
        expect(instance.get()).to.be.equal(2);
        instance.subtract('1');
        expect(instance.get()).to.be.equal(1);
    });

    it('add/sub string', () => {
        instance.add('asd');
        expect(instance.get()).to.NaN;
        instance.subtract('asd');
        expect(instance.get()).to.NaN;
    });
    
});

