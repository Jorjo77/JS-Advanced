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

let {assert, expect} = require('chai');

describe("Tests of library", () => {
    describe("Tests of calcPriceOfBook method", () => {
        it("If year is > 1980, the method should return correct price with message", () => {
            assert.strictEqual(library.calcPriceOfBook('An', 1981), 'Price of An is 20.00');

        });
        it("If year is <= 1980, the method should return correct discounted price with message", () => {
            assert.strictEqual(library.calcPriceOfBook('An', 1980), 'Price of An is 10.00');
            assert.strictEqual(library.calcPriceOfBook('An', 1979), 'Price of An is 10.00');
        });
        it("If submitted type of variables is not correct, the method should throw Error", () => {
            assert.throws(() => library.calcPriceOfBook( 1980,'Normale'), 'Invalid input');
            assert.throws(() => library.calcPriceOfBook( undefined,'Normale'), 'Invalid input');
            assert.throws(() => library.calcPriceOfBook( 1980, undefined), 'Invalid input');
            assert.throws(() => library.calcPriceOfBook( 1980, NaN), 'Invalid input');
            assert.throws(() => library.calcPriceOfBook( '', NaN), 'Invalid input');
            assert.throws(() => library.calcPriceOfBook( NaN, ''), 'Invalid input');
        });
        describe("Tests of findBook method", () => {
            it("If desiredBook is present in the array booksArr, the method should return correct message", () => {
                assert.strictEqual(library.findBook(['An', 'One'], 'An'), 'We found the book you want.');
                assert.strictEqual(library.findBook(['An', 'One'], 'One'), 'We found the book you want.');
            });
            it("If desiredBook is not present in the array booksArr, the method should return correct message", () => {
                assert.strictEqual(library.findBook(['An', 'One'], 'Ano'), 'The book you are looking for is not here!');
                assert.strictEqual(library.findBook(['An', 'One'], 'Onet'), 'The book you are looking for is not here!');
            });

            it("If the length of the booksArr array is zero, throw an error", () => {
                assert.throws(() => library.findBook([],'Normale'), 'No books currently available');

            });
            describe("Tests of arrangeTheBooks method", () => {
                it("If all the books are arranged on the shelves, the method should return correct message", () => {
                    assert.strictEqual(library.arrangeTheBooks(40), 'Great job, the books are arranged.');
                    assert.strictEqual(library.arrangeTheBooks(39), 'Great job, the books are arranged.');
                });
                it("If do not have enough space on the shelves, the method should return correct message", () => {
                    assert.strictEqual(library.arrangeTheBooks(41), 'Insufficient space, more shelves need to be purchased.');
                    assert.strictEqual(library.arrangeTheBooks(42), 'Insufficient space, more shelves need to be purchased.');
                });
    
                it("if the countBooks is not an integer number, or is a negative number, throw an error", () => {
                    assert.throws(() => library.arrangeTheBooks(-1), 'Invalid input');
                    assert.throws(() => library.arrangeTheBooks(1.1), 'Invalid input');
                    assert.throws(() => library.arrangeTheBooks(''), 'Invalid input');
                    assert.throws(() => library.arrangeTheBooks(NaN), 'Invalid input');
                });
            });

        });

     });
});
