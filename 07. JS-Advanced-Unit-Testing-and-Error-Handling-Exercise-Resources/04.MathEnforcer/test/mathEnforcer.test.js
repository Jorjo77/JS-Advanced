const mathEnforcer = require('../mathEnforcer.js');
const assert = require('chai').assert;

describe('mathEnforcer', function() {

    describe('addFiveFunc', function() {

        it('Should return undefined if type of received param is not a number', () => {

            assert.strictEqual(mathEnforcer.addFive('a'), undefined);
            assert.strictEqual(mathEnforcer.addFive(null), undefined);
            assert.strictEqual(mathEnforcer.addFive([]), undefined);
            assert.strictEqual(mathEnforcer.addFive({}), undefined);
        });
        it('Should return correct result if type of received param is a number', () => {

            assert.strictEqual(mathEnforcer.addFive(5), 10);
            assert.strictEqual(mathEnforcer.addFive(-5), 0);
            assert.closeTo(mathEnforcer.addFive(2.2), 7.2, 0.01);
            assert.closeTo(mathEnforcer.addFive(-7.2), -2.2, 0.01);  
        });
    });
    describe('subtractTen', function() {

        it('Should return undefined if type of received param is not a number', () => {

            assert.strictEqual(mathEnforcer.subtractTen('a'), undefined);
            assert.strictEqual(mathEnforcer.subtractTen(null), undefined);
            assert.strictEqual(mathEnforcer.subtractTen([]), undefined);
            assert.strictEqual(mathEnforcer.subtractTen({}), undefined);
        });
        it('Should return correct result if type of received param is a number', () => {

            assert.strictEqual(mathEnforcer.subtractTen(15), 5);
            assert.strictEqual(mathEnforcer.subtractTen(-5), -15);
            assert.closeTo(mathEnforcer.subtractTen(22.2), 12.2, 0.01);
            assert.closeTo(mathEnforcer.subtractTen(-7.2), -17.2, 0.01);  
        });
    });
    describe('sum', function() {

        it('Should return undefined if first type of received param is not a number', () => {

            assert.strictEqual(mathEnforcer.sum('a', 1), undefined);
            assert.strictEqual(mathEnforcer.sum(null, 2), undefined);
            assert.strictEqual(mathEnforcer.sum([], 3), undefined);
            assert.strictEqual(mathEnforcer.sum({}, 4), undefined);
        });
        it('Should return undefined if second type of received param is not a number', () => {

            assert.strictEqual(mathEnforcer.sum(1, 'a'), undefined);
            assert.strictEqual(mathEnforcer.sum(2, null), undefined);
            assert.strictEqual(mathEnforcer.sum(3, []), undefined);
            assert.strictEqual(mathEnforcer.sum(4, {}), undefined);
        });
        it('Should return correct result if type of received param is a number', () => {

            assert.strictEqual(mathEnforcer.sum(15, 5), 20);
            assert.strictEqual(mathEnforcer.sum(-5, -5), -10);
            assert.closeTo(mathEnforcer.sum(22.2, 2.8), 25, 0.01);
            assert.closeTo(mathEnforcer.sum(-7.2, -2.8), -10, 0.01);  
            assert.closeTo(mathEnforcer.sum(22.2, 2), 24.2, 0.01);
            assert.closeTo(mathEnforcer.sum(-7.2, -2), -9.2, 0.01); 
        });
    });
    
});