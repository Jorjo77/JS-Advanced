const rgbToHexColor = require('../rgbToHex');
const assert = require('chai').assert;

describe('Testing functionality of function rgbToHexColor', () =>{

    it('It should return undefined if take three parametars of invalid type', () =>{
        let red = 'fdd';
        let green = 'fdfs';
        let blue = 'dfd';

        let expectedResult = undefined;
        let actualResult = rgbToHexColor(red, green, blue);

        assert.strictEqual(actualResult, expectedResult);
    });
    it('It should return undefined if take three parametars of invalid type2', () =>{
        let red = 2.3;
        let green = 3.22;
        let blue = 6.5;

        let expectedResult = undefined;
        let actualResult = rgbToHexColor(red, green, blue);

        assert.strictEqual(actualResult, expectedResult);
    });
    it('It should return undefined don not take three parametars of valid type', () =>{
        let red = 'fdd';
        let green = 'fdfs';

        let expectedResult = undefined;
        let actualResult = rgbToHexColor(red, green);

        assert.strictEqual(actualResult, expectedResult);
    });
    it('It should return undefined take empty array', () =>{

        let expectedResult = undefined;
        let actualResult = rgbToHexColor([]);

        assert.strictEqual(actualResult, expectedResult);
    });
    it('It should return undefined if take three parametars of valid type but out of range', () =>{

        let expectedResult = undefined;

        assert.strictEqual(rgbToHexColor(333, 266, 444), expectedResult);
        assert.strictEqual(rgbToHexColor(-333, -266, -444), expectedResult);
        assert.strictEqual(rgbToHexColor(256, 256, 256), expectedResult);
    });
    it('It should return undefined if take three parametars of valid type but one of them out of range', () =>{

        let expectedResult = undefined;

        assert.strictEqual(rgbToHexColor(111, 254, 444), expectedResult);
        assert.strictEqual(rgbToHexColor(-333, 222, 254), expectedResult);
        assert.strictEqual(rgbToHexColor(256, 254, 111), expectedResult);
        assert.strictEqual(rgbToHexColor(-1, 254, 111), expectedResult);
        assert.strictEqual(rgbToHexColor(256, 255, 255), expectedResult);
    });
    it('It should return undefined if take three parametars one of them of invalid type', () =>{

        let expectedResult = undefined;

        assert.strictEqual(rgbToHexColor('fdf', 254, 44), expectedResult);
        assert.strictEqual(rgbToHexColor(-333, 'sd', 254), expectedResult);
        assert.strictEqual(rgbToHexColor(25, 254, '12'), expectedResult);
        assert.strictEqual(rgbToHexColor(-1, 'sd', '@'), expectedResult);
        assert.strictEqual(rgbToHexColor(-1, [], '@'), expectedResult);
        assert.strictEqual(rgbToHexColor(-1, {}, '@'), expectedResult);
        assert.strictEqual(rgbToHexColor({}, [], '@'), expectedResult);
    });
    it('It should return the same color if take three parametars in range of valid type', () =>{

        assert.strictEqual(rgbToHexColor(11, 22, 33), '#0B1621');
        assert.strictEqual(rgbToHexColor(255, 255, 255), '#FFFFFF');
    });
    it('It should return undefined if take three not correct parametars of valid type', () =>{

        assert.notEqual(rgbToHexColor(11, 22, 13), '#0B1621');
        assert.notEqual(rgbToHexColor(255, 255, 2355), '#FFFFFF');
    });
    it('Should convert red to hex', () => {
        let expectedResult = '#FF0000';
    
        let actualResult = rgbToHexColor(255, 0, 0);
    
        assert.equal(actualResult, expectedResult);
      });
});