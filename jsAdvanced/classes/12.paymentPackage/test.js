const { expect, assert } = require('chai');
const { PaymentPackage } = require('./PaymentPackage');

describe('PaymentPackage', () => {
    describe('constructor', () => {
        it('correct init', () => {
            let pp = new PaymentPackage('ivan i', 10);
            expect(pp instanceof PaymentPackage).to.be.true;
            
            expect(pp.name).to.be.equal('ivan i');
            expect(pp.value).to.be.equal(10);
            expect(pp.VAT).to.be.equal(20);
            expect(pp.active).to.be.true;
            pp.name = 'asen';
            pp.value = 20;
            pp.VAT = 10;
            pp.active = false;
            expect(pp.name).to.be.equal('asen');
            expect(pp.value).to.be.equal(20);
            expect(pp.VAT).to.be.equal(10);
            expect(pp.active).to.be.false;
            pp.value = 20.5;
            pp.VAT = 10.5;
            pp.active = true;
            expect(pp.value).to.be.equal(20.5);
            expect(pp.VAT).to.be.equal(10.5);
            expect(pp.active).to.be.true;
        });
        it('incorrect init', () => {
            assert.throws(() => {pp = new PaymentPackage()}, Error, 'Name must be a non-empty string');
            assert.throws(() => {pp = new PaymentPackage('iva')}, Error, 'Value must be a non-negative number');
        });
        it('trow error name and value', () => {
            let pp = new PaymentPackage('ivan', 10);
            expect(() => {pp.name = 5}).to.throw(Error, 'Name must be a non-empty string')
            // assert.throws(() => {pp.name = 5}, Error, 'Name must be a non-empty string');
            assert.throws(() => {pp.value = 'five'}, Error, 'Value must be a non-negative number');
            assert.throws(() => {pp.name = ''}, Error, 'Name must be a non-empty string');
            assert.throws(() => {pp.value = ''}, Error, 'Value must be a non-negative number');
            assert.throws(() => {pp.name = [5]}, Error, 'Name must be a non-empty string');
            assert.throws(() => {pp.value = ['five']}, Error, 'Value must be a non-negative number');
            assert.throws(() => {pp.name = {}}, Error, 'Name must be a non-empty string');
            assert.throws(() => {pp.value = {}}, Error, 'Value must be a non-negative number');
            assert.throws(() => {pp.name = undefined}, Error, 'Name must be a non-empty string');
            assert.throws(() => {pp.value = undefined}, Error, 'Value must be a non-negative number');
            // assert.throws(() => {pp.value = NaN}, Error, 'Value must be a non-negative number'); ????
            // assert.throws(() => {pp.name = NaN}, Error, 'Name must be a non-empty string');
            assert.throws(() => {pp.value = -5}, Error, 'Value must be a non-negative number');
            assert.throws(() => {pp.name = null}, Error, 'Name must be a non-empty string');
            // assert.throws(() => {pp.value = null}, Error, 'Value must be a non-negative number');

        });
        it('throw error Vat', () => {
            let pp = new PaymentPackage('ivan', 10);
            assert.throws(() => {pp.VAT = ''}, Error, 'VAT must be a non-negative number');
            assert.throws(() => {pp.VAT = 'five'}, Error, 'VAT must be a non-negative number');
            assert.throws(() => {pp.VAT = undefined}, Error, 'VAT must be a non-negative number');
            assert.throws(() => {pp.VAT = -5}, Error, 'VAT must be a non-negative number');
            assert.throws(() => {pp.VAT = {}}, Error, 'VAT must be a non-negative number');
            assert.throws(() => {pp.VAT = []}, Error, 'VAT must be a non-negative number');
            // assert.throws(() => {pp.VAT = null}, Error, 'VAT must be a non-negative number');
        });
        it('throw error active', () => {
            let pp = new PaymentPackage('ivan', 10);
            // assert.throws(() => {pp.active = ''}, Error, 'Active status must be a boolean');
            // assert.throws(() => {pp.active = 'five'}, Error, 'Active status must be a boolean');
            // assert.throws(() => {pp.active = undefined}, Error, 'Active status must be a boolean');
            // assert.throws(() => {pp.active = -5}, Error, 'Active status must be a boolean');
            // assert.throws(() => {pp.active = {}}, Error, 'Active status must be a boolean');
            // assert.throws(() => {pp.active = []}, Error, 'Active status must be a boolean');
            // assert.throws(() => {pp.active = 5}, Error, 'Active status must be a boolean');
            assert.throws(() => {pp.active = null}, Error, 'Active status must be a boolean');

        });
    });
    describe('methods', () => {
        it('toString with true and false active', () => {
            let pp = new PaymentPackage('ivan', 10);
            expect(pp.toString()).to.be.equal('Package: ivan\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12');
            pp.active = false;
            expect(pp.toString()).to.be.equal('Package: ivan (inactive)\n- Value (excl. VAT): 10\n- Value (VAT 20%): 12');
        });
    });    
});

