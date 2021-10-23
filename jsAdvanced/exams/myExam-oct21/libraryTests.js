const library = {
    calcPriceOfBook(nameOfBook, year) {

        let price = 20;
        if (typeof nameOfBook != "string" || !Number.isInteger(year)) {
            throw new Error("Invalid input");
        } else if (year <= 1980) {
            let total = price - (price * 0.5);
            return `Price of ${nameOfBook} is ${total.toFixed(2)}`;
        }
        return `Price of ${nameOfBook} is ${price.toFixed(2)}`;
    },

    findBook: function(booksArr, desiredBook) {
        if (booksArr.length == 0) {
            throw new Error("No books currently available");
        } else if (booksArr.find(e => e == desiredBook)) {
            return "We found the book you want.";
        } else {
            return "The book you are looking for is not here!";
        }

    },
    arrangeTheBooks(countBooks) {
        const countShelves = 5;
        const availableSpace = countShelves * 8;

        if (!Number.isInteger(countBooks) || countBooks < 0) {
            throw new Error("Invalid input");
        } else if (availableSpace >= countBooks) {
            return "Great job, the books are arranged.";
        } else {
            return "Insufficient space, more shelves need to be purchased.";
        }
    }

};

module.exports = { library};

//  ****** tests *****

const { expect} = require('chai');
const { library } = require('./libraryTests');

describe("Tests library", function () {
    beforeEach(() => l =  library);
    describe("calcPriceOfBook ", function () {
        it("invalid input", function () {
            expect(() => l.calcPriceOfBook(5, 12)).to.throw(Error, "Invalid input");
            expect(() => l.calcPriceOfBook(undefined, 12)).to.throw(Error, "Invalid input");
            expect(() => l.calcPriceOfBook('name', "3")).to.throw(Error, "Invalid input");
            expect(() => l.calcPriceOfBook({}, 12)).to.throw(Error, "Invalid input");
            expect(() => l.calcPriceOfBook('name', 1.2)).to.throw(Error, "Invalid input");
        });
        it("year <= 1980", function () {
            expect(l.calcPriceOfBook('name', 12)).to.be.equal(`Price of name is 10.00`);
            expect(l.calcPriceOfBook('name', 1980)).to.be.equal(`Price of name is 10.00`);
            expect(l.calcPriceOfBook('name', 2000)).to.be.equal(`Price of name is 20.00`);
        });
    });

    describe("findBook", function () {
        it("zero arr throw", function () {
            expect(() => l.findBook ([], 'Troy')).to.throw(Error, "No books currently available");
        });
        it("book in arr", function () {
            expect(l.findBook (["Troy", "Life Style"], 'Troy')).to.be.equal("We found the book you want.");
        });
        it("book not in arr", function () {
            expect(l.findBook (["Troy", "Life Style"], 'Toy')).to.be.equal("The book you are looking for is not here!");
        });
    });   
    
    describe("arrangeTheBooks ", function () {
        it("zero arr throw", function () {
            expect(() => l.arrangeTheBooks(-1)).to.throw(Error, "Invalid input");
            expect(() => l.arrangeTheBooks()).to.throw(Error, "Invalid input");
            expect(() => l.arrangeTheBooks(" 4")).to.throw(Error, "Invalid input");
            expect(() => l.arrangeTheBooks(2.5)).to.throw(Error, "Invalid input");
            expect(() => l.arrangeTheBooks([])).to.throw(Error, "Invalid input");
            expect(() => l.arrangeTheBooks({})).to.throw(Error, "Invalid input");
        });
        it("boobs <= 40", function () {
            expect(l.arrangeTheBooks(40)).to.be.equal("Great job, the books are arranged.");
            expect(l.arrangeTheBooks(0)).to.be.equal("Great job, the books are arranged.");
        });
        it("boobs <= 40", function () {
            expect(l.arrangeTheBooks(41)).to.be.equal("Insufficient space, more shelves need to be purchased.");
            expect(l.arrangeTheBooks(50)).to.be.equal("Insufficient space, more shelves need to be purchased.");
        });
    });
});
