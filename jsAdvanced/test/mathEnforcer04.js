let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

module.exports = { mathEnforcer};

// const {expect} = require('chai');
// const { mathEnforcer } = require('./mathEnforcer');

// describe('Enforcer', () => {
//     describe('add five', () => {
//         it('addFive undefined', () => {
//             expect(mathEnforcer.addFive('1')).to.be.undefined;
//             expect(mathEnforcer.addFive('')).to.be.undefined;
//             expect(mathEnforcer.addFive([])).to.be.undefined;
//             expect(mathEnforcer.addFive({})).to.be.undefined;
//         });
//         it('addFive corect', () => {
//             expect(mathEnforcer.addFive(1)).to.be.equal(6);
//             expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
//             expect(mathEnforcer.addFive(2.2)).to.be.closeTo(7.2, 0.1);
//         });
//     });
//     describe('subt ten', () => {
//         it('subt ten undefined', () => {
//             expect(mathEnforcer.subtractTen('1')).to.be.undefined;
//             expect(mathEnforcer.subtractTen('')).to.be.undefined;
//             expect(mathEnforcer.subtractTen([])).to.be.undefined;
//             expect(mathEnforcer.subtractTen({})).to.be.undefined;
//         });
//         it('sunt ten corect', () => {
//             expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
//             expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
//             expect(mathEnforcer.subtractTen(2.2)).to.be.closeTo(-7.8, 0.1);
//         });
//     });
//     describe('sum', () => {
//         it('sum num1 undefined', () => {
//             expect(mathEnforcer.sum('1', 1)).to.be.undefined;
//             expect(mathEnforcer.sum('', 1)).to.be.undefined;
//             expect(mathEnforcer.sum([], 1)).to.be.undefined;
//             expect(mathEnforcer.sum({}, 1)).to.be.undefined;
//         });
//         it('sum num2 undefined', () => {
//             expect(mathEnforcer.sum(1, '1')).to.be.undefined;
//             expect(mathEnforcer.sum(1, '')).to.be.undefined;
//             expect(mathEnforcer.sum(1, [])).to.be.undefined;
//             expect(mathEnforcer.sum(1, {})).to.be.undefined;
//         });
//         it('sum corect', () => {
//             expect(mathEnforcer.sum(1, 1)).to.be.equal(2);
//             expect(mathEnforcer.sum(-2, 1)).to.be.equal(-1);
//             expect(mathEnforcer.sum(1, -2)).to.be.equal(-1);
//             expect(mathEnforcer.sum(-1, -1)).to.be.equal(-2);
//             expect(mathEnforcer.sum(1.1, 1)).to.be.closeTo(2.1, 0.1);
//             expect(mathEnforcer.sum(1, 1.1)).to.be.closeTo(2.1, 0.1);
//             expect(mathEnforcer.sum(1.1, 1.1)).to.be.closeTo(2.2, 0.1);
//         });
//     });
// });