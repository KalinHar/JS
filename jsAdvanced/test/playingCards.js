function card(face, suit) {
    const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const symb = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    if (!Object.keys(symb).includes(suit)) {
        throw new Error('Invalid suit ' + suit);
    }

    if (!cards.includes(face)) {
        throw new Error('Invalid face ' + face);
    }

    return {
        face,
        suit: symb[suit],
        toString() {
            return this.face + this.suit;
        }
    }
}

module.exports = { card };
// const card1 = card('A', 'S');
// console.log(card1.toString());