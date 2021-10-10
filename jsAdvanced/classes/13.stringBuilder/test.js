const { expect, assert } = require('chai');
const { StringBuilder } = require('./StringBuilder');

describe('StringBuilder', () => {
    describe('constructor', () => {
        it('correct init', () => {
            const sb1 = new StringBuilder('hell');
            expect(sb1 instanceof StringBuilder).to.be.true;
            expect(sb1._stringArray.join('')).to.be.equal('hell');
            const sb2 = new StringBuilder();
            expect(sb2._stringArray.length).to.be.equal(0);
        });
        it('incorrect init static', () => {
            expect(() => { sb1 = new StringBuilder(5) }).throw(TypeError, 'Argument must be a string');
            expect(() => { sb2 = new StringBuilder([]) }).throw(TypeError, 'Argument must be a string');
            expect(() => { sb3 = new StringBuilder({}) }).throw(TypeError, 'Argument must be a string');
        });

    });
    describe('methods', () => {
        it('toString', () => {
            const sb1 = new StringBuilder('hell');
            expect(sb1.toString()).to.be.equal('hell')
        });
        
        it('append', () => {
            const sb1 = new StringBuilder('hell');
            sb1.append(' ok')
            expect(sb1.toString()).to.be.equal('hell ok')
        });

        it('prepend', () => {
            const sb1 = new StringBuilder('hell');
            sb1.prepend('ok ')
            expect(sb1.toString()).to.be.equal('ok hell')
        });

        it('insertAt', () => {
            const sb1 = new StringBuilder('hell');
            sb1.insertAt('ooo', 2)
            expect(sb1.toString()).to.be.equal('heoooll');
        });

        it('remove', () => {
            const sb1 = new StringBuilder('hell');
            sb1.remove(1, 2)
            expect(sb1.toString()).to.be.equal('hl');
        });

        it ('incorrect string for methods', () => {
            const sb1 = new StringBuilder('hell');
            expect(() => {sb1.append(5)}).throw(TypeError, 'Argument must be a string');
            expect(() => {sb1.prepend(5)}).throw(TypeError, 'Argument must be a string');
            expect(() => {sb1.insertAt(5, 2)}).throw(TypeError, 'Argument must be a string');

        });
        it('toString works correctly - 2', () => {
            const expected = '\n A \n\r B\t123   ';
            const obj = new StringBuilder();
        
            expected.split('').forEach(s => {obj.append(s); obj.prepend(s); });
        
            obj.insertAt('test', 4);
        
            obj.remove(2, 4);
        
            expect(obj.toString()).to.equal('  st21\tB \r\n A \n\n A \n\r B\t123   ');
        });
    });
});

