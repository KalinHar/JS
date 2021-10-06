function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

module.exports = {lookupChar};

// const {expect} = require('chai');
// const { lookupChar } = require('./charLookup');

// describe('charlookup', () => {
    
//     it('return undefined', () => {
//         expect(lookupChar(5, 3)).to.be.undefined;
//         expect(lookupChar({}, 1)).to.be.undefined;
//         expect(lookupChar([], 2)).to.be.undefined;
//         expect(lookupChar('asd', '1')).to.be.undefined;
//         expect(lookupChar('asd', 2.5)).to.be.undefined;
//         expect(lookupChar('asd', [])).to.be.undefined;
//         expect(lookupChar('asd', {})).to.be.undefined;
//     });

//     it('return incorect index', () => {
//         expect(lookupChar('asd', 3)).to.be.equal('Incorrect index');
//         expect(lookupChar('asd', -1)).to.be.equal('Incorrect index');
//     });
    
//     it('return corect', () => {
//         expect(lookupChar('asd', 1)).to.be.equal('s');
//     });
// });
