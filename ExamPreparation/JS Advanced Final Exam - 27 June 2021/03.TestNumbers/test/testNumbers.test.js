const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};

let {assert, expect} = require('chai');

describe("Tests of testNumbers", () => {
    describe("Tests of sumNumbers method", () => {
        it("If params are not numbers method should throw undefined", () => {
            assert.strictEqual(testNumbers.sumNumbers('as', 3), undefined);
            assert.strictEqual(testNumbers.sumNumbers(3, 'ab'), undefined);
            assert.strictEqual(testNumbers.sumNumbers('as', 'aa'), undefined);
        });

        it("If params are numbers method should return correct result, rounded to second digit after decimal point", () => {
            assert.strictEqual(testNumbers.sumNumbers(2, 3), (2+3).toFixed(2));
            assert.strictEqual(testNumbers.sumNumbers(3, 2.233), (3+2.233).toFixed(2));
            assert.strictEqual(testNumbers.sumNumbers(-2, -3), (-2+(-3)).toFixed(2));
            assert.strictEqual(testNumbers.sumNumbers(-3, -2.233), (-3+(-2.233)).toFixed(2));

        });
     });
     
     describe("Tests of numberChecker method", () => {
        it("If inpit is not number method should throw Error: The input is not a number!", () => {
            assert.throws(() => testNumbers.numberChecker('as'), 'The input is not a number!');

        });

        it("If inpit is even number method should return message: The number is even!", () => {
            assert.strictEqual(testNumbers.numberChecker(2), 'The number is even!');

        });

        it("If inpit is odd number method should return message: The number is odd!", () => {
            assert.strictEqual(testNumbers.numberChecker(3), 'The number is odd!');

        });
     });

     describe("Tests of averageSumArray method", () => {
        it("The method should return correct result with correct params!", () => {
            assert.strictEqual(testNumbers.averageSumArray([1, 2, 3]), 2);

        });

     });
})



