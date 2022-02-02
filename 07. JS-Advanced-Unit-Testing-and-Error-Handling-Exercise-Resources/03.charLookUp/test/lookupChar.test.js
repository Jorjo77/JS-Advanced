const lookupChar = require('../charLookUp');
const assert = require('chai').assert;

describe('Testing functionality of lookupChar', () =>{

    it('Function should return undefined if receive incorrect params type', () =>{
        let string = 1;
        let index = 'a';

        let expectedResult = undefined;
        let actualResult = lookupChar(string, index);

        assert.strictEqual(actualResult, expectedResult);
    });
    it('Function should return undefined if receive one incorrect param type', () =>{
        let string = 1;
        let index = 1;

        let expectedResult = undefined;
        let actualResult = lookupChar(string, index);

        assert.strictEqual(actualResult, expectedResult);
    });
    it('Function should return undefined if receive one incorrect param type', () =>{
        let string = 'fds';
        let index = 'a';

        let expectedResult = undefined;
        let actualResult = lookupChar(string, index);

        assert.strictEqual(actualResult, expectedResult);
    });
    it('Function should return undefined if receive one incorrect param type', () =>{
        let string = 'fds';
        let index = 1.1;

        let expectedResult = undefined;
        let actualResult = lookupChar(string, index);

        assert.strictEqual(actualResult, expectedResult);
    });
    it('Function should return "Incorrect index" if receive correct params type with incorrect index', () =>{

        let expectedResult = 'Incorrect index';

        assert.strictEqual(lookupChar('asd', -1), expectedResult);
        assert.strictEqual(lookupChar('asd', 3), expectedResult);
        assert.strictEqual(lookupChar('asd', 4), expectedResult);
    });
    it('Function should return  the character if receive correct params type with correct index', () =>{

        assert.strictEqual(lookupChar('asd', 1), 's');
        assert.strictEqual(lookupChar('asd', 2), 'd');
        assert.strictEqual(lookupChar('asd', 0), 'a');
    });

});

