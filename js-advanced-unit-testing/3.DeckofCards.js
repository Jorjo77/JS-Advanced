function printDeckOfCards(cards) {

    const deckOfCards = [];
    let currElement = '';
    let fatalError = '';
    function createCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        const suits = {
            S: '\u2660',
            H: '\u2665',
            D: '\u2666',
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

        try {
            if (!faces.includes(face) || !keysOfSuits.includes(suit)) {
                throw new Error();

            } else {

                card.face = face;
                card.suit = suit;
            }
        } catch (error) {

            fatalError = `Invalid card: ${currElement}`;
        }

        deckOfCards.push(card);

    }

    while (cards.length > 0) {
        currElement = cards.shift();
        let number = '';
        let letter = '';

        let symbols = [...currElement];
        if (symbols.length > 2) {
            for (const symbol of symbols) {
                if (isNaN(symbol)) {

                    letter += symbol;
                } else {

                    number += symbol
                }
            }

            createCard(number, letter);
        } else {
            let [face, suit] = currElement;
            createCard(face, suit);
        }

    }

    if (fatalError !== '') {
        console.log(fatalError);
    } else {
        console.log(deckOfCards.join(' '));
    }
}
printDeckOfCards(['2H', '3D', '3D', '4C']);
