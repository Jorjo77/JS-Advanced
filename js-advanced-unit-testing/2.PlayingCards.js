function createCard(face, suit) {
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    const suits = {
        S: '\u2660',
        H: '\u2665',
        D: '\u2665',
        C: '\u2663'
    };

    const card = {
        face,
        suit,
        toString: () => {

            return `${face}${suits[suit]}`;
        }
    }

    let keysOfSuits = Object.keys(suits);

    if (!faces.includes(face) || !keysOfSuits.includes(suit)) {

        throw new Error('Error')

    } else {
        card.face = face;
        card.suit = suit;
    }

    return card.toString();

}

