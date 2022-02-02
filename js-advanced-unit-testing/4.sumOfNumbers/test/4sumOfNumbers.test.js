const assert = require('chai').assert;//Така включваме в действие assert бибкиотеката chai
const sum = require('../4.sumOfNumbers');

describe('Test sum functionallity', () => {
it('Should add positive numbers', ()=> {
//Arange
let input = [1,2,3,4,5];
let expectedResult = 15;
//Act
let actualResult = sum(input);
//Assert
// if (expectedResult === actualResult) { //така е без assert бибкиотеката chai
//         console.log('Passing');
//     } else {
//         throw new Error('Sum should be 15');
//     }
assert.strictEqual(actualResult, expectedResult);
});
it('Should add negative numbers', ()=> {
//Arange
let input = [-1,-2,-3,-4,-5];
let expectedResult = -15;
//Act
let actualResult = sum(input);
//Assert

assert.strictEqual(actualResult, expectedResult);
});

it('Should add negative numbers correctly', ()=> {
//Arange
let input = [-1,-2,-3,-4,-4];
let expectedResult = -15;
//Act
let actualResult = sum(input);
//Assert

assert.notEqual(actualResult, expectedResult);
});

it('Should add positive numbers correctly', ()=> {
//Arange
let input = [1,2,3,4,4];
let expectedResult = 15;
//Act
let actualResult = sum(input);
//Assert

assert.notEqual(actualResult, expectedResult);
});
});