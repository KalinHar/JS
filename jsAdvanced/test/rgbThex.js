const {expect} = require('chai');
const { rgbToHexColor } = require('./rgbTohex');

describe('RGB to Hex', () => {
    it('return white color', () => {
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });
    it('return black color', () => {
        expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
    });
    it('return und for non integers', () => {
        expect(rgbToHexColor('1', 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, '2', 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, '3')).to.be.undefined;
    });
    it('return und for les than 0', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });
    it('return und for bidder than 255', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });
});

