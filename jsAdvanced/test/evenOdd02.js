function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

module.exports = {isOddOrEven};


// describe('oddOrEven', () => {
    
//     it('return undefined', () => {
//         expect(isOddOrEven(5)).to.be.undefined;
//         expect(isOddOrEven({})).to.be.undefined;
//         expect(isOddOrEven([])).to.be.undefined;
//     });

//     it('return even', () => {
//         expect(isOddOrEven('asdf')).to.be.equal('even');
//         expect(isOddOrEven('12')).to.be.equal('even');
//     });
    
//     it('return odd', () => {
//         expect(isOddOrEven('a')).to.be.equal('odd');
//         expect(isOddOrEven('345')).to.be.equal('odd');
//     });
    
// });