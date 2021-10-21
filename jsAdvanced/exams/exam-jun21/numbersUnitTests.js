const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};

// module.exports = { testNumbers };


//  ******* tests ******

// const { expect, assert } = require('chai');
// const { testNumbers } = require('./numbersUnitTests');

describe("Test numbers", function () {
    beforeEach(() => n =  testNumbers);
    describe("sumNumbers", function () {
        it("correct", function () {   
            expect(n.sumNumbers(5, 5)).to.be.equal('10.00');
            expect(n.sumNumbers(5, 5)).to.be.equal('10.00');
            expect(n.sumNumbers(-5, -5)).to.be.equal('-10.00');
            expect(n.sumNumbers(2.55, 5.35)).to.be.equal('7.90');
            expect(n.sumNumbers(0, 0)).to.be.equal('0.00');
        });  
        it("incorrect type", function () {   
            expect(n.sumNumbers(5)).to.be.undefined;
            expect(n.sumNumbers(-5, '5')).to.be.undefined;
            expect(n.sumNumbers({}, 5.35)).to.undefined;
            expect(n.sumNumbers([], 5)).to.be.undefined;
        });  
    });
    describe("numberChecker", function () {
        it("correct", function () {   
            expect(n.numberChecker(10)).to.be.equal("The number is even!");
            expect(n.numberChecker('1')).to.be.equal("The number is odd!");
            expect(n.numberChecker('10')).to.be.equal("The number is even!");
            expect(n.numberChecker(-1)).to.be.equal("The number is odd!");
        });
        it("incorrect throw error", function () {   
            expect(() => n.numberChecker('qwr')).to.throw(Error, 'The input is not a number!');
            expect(() => n.numberChecker({})).to.throw(Error, 'The input is not a number!');
 
        });
    });
    describe("•	averageSumArray", function () {
        it("correct", function () {   
            expect(n.averageSumArray([10])).to.be.equal(10);
            expect(n.averageSumArray([1.5, 2.7])).to.be.equal(2.1);
            expect(n.averageSumArray([])).to.be.NaN;
        });
        
    });
});