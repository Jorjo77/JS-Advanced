const numberOperations = require('../03. Number Operations_Resources');
let assert = require('chai').assert;
let expect = require('chai').expect;

describe("Tests of numberOperations", () => {
    describe("powNumber tests", function () {
        it("Should returns the power of the given number", () => {

            assert.strictEqual(numberOperations.powNumber(2), 4);
            assert.strictEqual(numberOperations.powNumber(2.3), 2.3 * 2.3);
            assert.strictEqual(numberOperations.powNumber(-3), 9);
            assert.strictEqual(numberOperations.powNumber(0), 0);
        });
    });

    describe("numberChecker", () => {
        it("Should parses the input to number and return correct message", () => {
            let expectedResult = 'The number is lower than 100!';
            let actualResult = numberOperations.numberChecker('4');
            assert.equal(actualResult, expectedResult);
            let expectedResult2 = 'The number is lower than 100!';
            let actualResult2 = numberOperations.numberChecker('9');
            assert.equal(actualResult2, expectedResult2);
        });
        it("Should parses the input to number and return correct message", () => {
            let expectedResult = 'The number is greater or equal to 100!';
            let actualResult = numberOperations.numberChecker('104');
            assert.equal(actualResult, expectedResult);
            let expectedResult2 = 'The number is greater or equal to 100!';
            let actualResult2 = numberOperations.numberChecker('100');
            assert.equal(actualResult2, expectedResult2);
        });
        it("Should throws an error if passed an argument that coarses to NaN ", () => {

            assert.throws(() => numberOperations.numberChecker('abc'));
            assert.throws(() => numberOperations.numberChecker(undefined));
        });
    });
    describe("sumArrays", () => {
        it("Should return empty array when receive empty arrays", () => {
            assert.deepEqual(numberOperations.sumArrays([], []), []);
            assert.deepEqual(numberOperations.sumArrays([1], [2]), [3]);
        });
        it("Should return correct result when receive correct params", () => {
            let expectedResult = [2, 4, 6];
            let actualResult = numberOperations.sumArrays([1, 2, 3], [1, 2, 3]);
            //expect(actualResult).to.eql(expectedResult);
            assert.deepEqual(actualResult, expectedResult);//така ми харесва повече!
            let expectedResult2 = [-2, -4, -6];
            let actualResult2 = numberOperations.sumArrays([-1, -2, -3], [-1, -2, -3]);
            //expect(actualResult2).to.eql(expectedResult2);
            assert.deepEqual(actualResult, expectedResult);
        });
        it("Should return correct result when receive longer second array", () => {
            let expectedResult = [2, 4, 6, 4];
            let actualResult = numberOperations.sumArrays([1, 2, 3], [1, 2, 3, 4]);
            //expect(actualResult).to.eql(expectedResult);
            assert.deepEqual(actualResult, expectedResult);
            let expectedResult2 = [-2, -4, -6, -4];
            let actualResult2 = numberOperations.sumArrays([-1, -2, -3], [-1, -2, -3, -4]);
            expect(actualResult2).to.eql(expectedResult2);
        });
        it("Should return correct result when receive longer first array", () => {
            let expectedResult = [2, 4, 3];
            let actualResult = numberOperations.sumArrays([1, 2, 3], [1, 2]);
            expect(actualResult).to.eql(expectedResult);
            let expectedResult2 = [-2, -4, -3];
            let actualResult2 = numberOperations.sumArrays([-1, -2, -3], [-1, -2]);
            expect(actualResult2).to.eql(expectedResult2);
        });
        it("Should return correct result when receive not equal length arrays", () => {

            assert.deepEqual(numberOperations.sumArrays([1.1, 2, 8], [2.2, 3]), [1.1 + 2.2, 5, 8]);
            assert.deepEqual(numberOperations.sumArrays(['a', 'b', 'c'], ['b', 'c']), ['ab', 'bc', 'c']);

        });
    });
});
