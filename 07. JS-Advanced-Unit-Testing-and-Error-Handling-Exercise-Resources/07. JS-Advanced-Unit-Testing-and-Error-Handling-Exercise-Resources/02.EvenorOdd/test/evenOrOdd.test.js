let isOddOrEven = require('../evenOrOdd');
const assert = require('chai').assert;

describe('Testing functionality of isOddOrEven function', () => {

    it('Should return undefined if receive incorrect params', ()=> {

        let expectedResult = undefined;

        assert.strictEqual(isOddOrEven(4), expectedResult);
        assert.strictEqual(isOddOrEven(4.1), expectedResult);
        assert.strictEqual(isOddOrEven([]), expectedResult);
        assert.strictEqual(isOddOrEven({}), expectedResult);
    });
    it('Should return odd if receive correct params', ()=> {

        let expectedResult = 'odd';

        assert.strictEqual(isOddOrEven('a'), expectedResult);
        assert.strictEqual(isOddOrEven('abc'), expectedResult);
        assert.strictEqual(isOddOrEven('asdfg'), expectedResult);
        assert.strictEqual(isOddOrEven('ppppppp'), expectedResult);
    });
    it('Should return even if receive correct params', ()=> {

        let expectedResult = 'even';

        assert.strictEqual(isOddOrEven('aq'), expectedResult);
        assert.strictEqual(isOddOrEven('abcq'), expectedResult);
        assert.strictEqual(isOddOrEven('asdfgq'), expectedResult);
        assert.strictEqual(isOddOrEven('pppppppw'), expectedResult);
    });
});