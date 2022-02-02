const isSymmetric = require('../checkforSymmetry');
const { assert } = require('chai');

describe('Check if isSemetric works correctly', () => {
    it('Should return true if incoming array is symetric', () => {
        let input = [1, 2, 1];
        let expectedResult = true;

        let actualResult = isSymmetric(input);
        assert.strictEqual(actualResult, expectedResult);       
    });
    it('Should return true if incoming array is symetric2', () => {
        let input = [1, 2, 3, 2, 1];
        let expectedResult = true;

        let actualResult = isSymmetric(input);
        assert.strictEqual(actualResult, expectedResult);       
    });
    it('Should return false if incoming array is not symetric', () => {
        let input = [1, 2, 2];
        let expectedResult = false;

        let actualResult = isSymmetric(input);
        assert.strictEqual(actualResult, expectedResult);       
    });
    it('Should return false if incoming array is symetric but not of one type', () => {
        let input = ['1', 1];
        let expectedResult = false;

        let actualResult = isSymmetric(input);
        assert.strictEqual(actualResult, expectedResult);       
    });
    it('Should return false if incoming array is incorrect type', () => {

        let expectedResult = false;

        assert.strictEqual(isSymmetric(null), expectedResult);  
        assert.strictEqual(isSymmetric(''), expectedResult);
        assert.strictEqual(isSymmetric(undefined), expectedResult);
        assert.strictEqual(isSymmetric({}), expectedResult);   
        assert.strictEqual(isSymmetric(5), expectedResult);
        assert.strictEqual(isSymmetric('asd'), expectedResult); 
        assert.strictEqual(isSymmetric(true), expectedResult);                                           
    });
});