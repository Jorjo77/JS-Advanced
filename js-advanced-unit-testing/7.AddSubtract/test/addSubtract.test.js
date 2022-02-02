const createCalculator = require('../addSubtract');
const assert = require('chai').assert;

describe('Testing functionality of function createCalculator', () => {
    it('Check if function sum positive numbers correctly', () => {

        let calculator = createCalculator();
        calculator.add(1);
        calculator.add(2);

        let expectedResult = 3;
        let actualResult = calculator.get();

        assert.strictEqual(actualResult, expectedResult);
    });
    it('Check if function sum negative numbers correctly', () => {

        let calculator = createCalculator();
        calculator.add(-1);
        calculator.add(-2);

        let expectedResult = -3;
        let actualResult = calculator.get();

        assert.strictEqual(actualResult, expectedResult);
    });
    it('Check if function keep inturnal sum and suming negative numbers correctly', () => {

        let calculator = createCalculator();
        calculator.add(-1);
        let expectedResult = -1;
        let actualResult = calculator.get();
        assert.strictEqual(actualResult, expectedResult);
        calculator.add(-2);
        expectedResult = -3;
        actualResult = calculator.get();
        assert.strictEqual(actualResult, expectedResult);
        calculator.add(-2);
        expectedResult = -5;
        actualResult = calculator.get();
        assert.strictEqual(actualResult, expectedResult);
    });
    it('Check if function subtract positive numbers correctly', () => {

        let calculator = createCalculator();
        calculator.subtract(1);
        calculator.subtract(2);

        let expectedResult = -3;
        let actualResult = calculator.get();

        assert.strictEqual(actualResult, expectedResult);
    });
    it('Check if function subtract negative numbers correctly', () => {

        let calculator = createCalculator();
        calculator.subtract(-1);
        calculator.subtract(-2);

        let expectedResult = 3;
        let actualResult = calculator.get();

        assert.strictEqual(actualResult, expectedResult);
    });
    it('Check if function keep inturnal sum and subtract negative numbers correctly', () => {

        let calculator = createCalculator();
        calculator.subtract(-1);
        let expectedResult = 1;
        let actualResult = calculator.get();
        assert.strictEqual(actualResult, expectedResult);
        calculator.subtract(-2);
        expectedResult = 3;
        actualResult = calculator.get();
        assert.strictEqual(actualResult, expectedResult);
        calculator.subtract(-2);
        expectedResult = 5;
        actualResult = calculator.get();
        assert.strictEqual(actualResult, expectedResult);
    });
    it('Check if function can parse numbers when sum positive numbers correctly', () => {

        let calculator = createCalculator();
        calculator.add('1');
        calculator.add('2');

        let expectedResult = 3;
        let actualResult = calculator.get();

        assert.strictEqual(actualResult, expectedResult);
    });
    it('Check if function can parse numbers when subtract positive numbers correctly', () => {

        let calculator = createCalculator();
        calculator.subtract('1');
        calculator.subtract('2');

        let expectedResult = -3;
        let actualResult = calculator.get();

        assert.strictEqual(actualResult, expectedResult);
    });
    it('Check if function return module', () => {

        let expectedResult = 'object';
        let actualResult = createCalculator();

        assert.strictEqual(typeof actualResult, expectedResult);
    });

});