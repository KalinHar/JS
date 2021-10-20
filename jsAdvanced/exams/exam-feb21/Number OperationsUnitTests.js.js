const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};

module.exports = {numberOperations};


//  ******* tests *********

const { expect, assert } = require('chai');
const { numberOperations } = require('./Number OperationsUnitTests.js');

describe("Test numberOperations", function () {
    beforeEach(() => n =  numberOperations);
    describe("powNumber", function () {
        it("correct", function () {   
            expect(n.powNumber(5)).to.be.equal(25);
        });  
    });
    describe("numberChecker", function () {
        it("correct >= 100", function () {   
            expect(n.numberChecker(100)).to.be.equal('The number is greater or equal to 100!');
            expect(n.numberChecker('100')).to.be.equal('The number is greater or equal to 100!');
        });
        it("correct < 100", function () {   
            expect(n.numberChecker(99)).to.be.equal('The number is lower than 100!');
            expect(n.numberChecker(0)).to.be.equal('The number is lower than 100!');
            expect(n.numberChecker(-1)).to.be.equal('The number is lower than 100!');
            expect(n.numberChecker("")).to.be.equal('The number is lower than 100!');
        
        });
        it("incorrect input", function () {   
            expect(() => n.numberChecker("a")).to.throw(Error, 'The input is not a number!');
            expect(() => n.numberChecker()).to.throw(Error, 'The input is not a number!');
            expect(() => n.numberChecker({})).to.throw(Error, 'The input is not a number!');
            expect(() => n.numberChecker(["a"])).to.throw(Error, 'The input is not a number!');
            
        });
    });
    describe("sumArrays", function () {
        it("arr1 > arr2", function () {   
            expect(n.sumArrays([1, 2 ,3], [1])).to.be.eql([2, 2, 3]);
        });
        it("arr1 < arr2", function () {   
            expect(n.sumArrays([1, 2 ,3], [1, 2, 3, 4, 5])).to.be.eql([2, 4, 6, 4, 5]);
        });
        it("arr1 = arr2", function () {   
            expect(n.sumArrays([1, 2 ,3], [1, 2, 3])).to.be.eql([2, 4, 6]);
        });
        it("[] < arr2", function () {   
            expect(n.sumArrays([], [1, 2, 3])).to.be.eql([1, 2, 3]);
        });
        it("arrstr1 < arr2", function () {   
            expect(n.sumArrays(['a', 'b'], [1, 2, 3])).to.be.eql(['a1', 'b2', 3]);
        });
    });
});

