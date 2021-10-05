const { card } = require('./playingCards');

function createDeck(cardsArr) {
    let result = [];

    for (let c of cardsArr) {
        try {
            result.push(card(c.slice(0,-1), c.slice(-1)).toString());
        } catch (err) {
            console.log('Invalid card: ' + c);
            return;
        }
    }
    console.log(result.join(' '));
}

module.exports = { createDeck };

    // function card(face, suit) {
    //     const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    //     const symb = {
    //         'S': '\u2660',
    //         'H': '\u2665',
    //         'D': '\u2666',
    //         'C': '\u2663'
    //     }
    
    //     if (!Object.keys(symb).includes(suit)) {
    //         throw new Error('Invalid suit ' + suit);
    //     }
    
    //     if (!cards.includes(face)) {
    //         throw new Error('Invalid face ' + face);
    //     }
    
    //     return {
    //         face,
    //         suit: symb[suit],
    //         toString() {
    //             return this.face + this.suit;
    //         }
    //     }
    // }

// createDeck(['AS', '10D', 'KH', '2C']);
// createDeck(['5S', '3D', 'QD', '1C']);
