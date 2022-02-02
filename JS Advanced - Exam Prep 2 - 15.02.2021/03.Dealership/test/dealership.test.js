let dealership = {
    newCarCost: function (oldCarModel, newCarPrice) {

        let discountForOldCar = {
            'Audi A4 B8': 15000,
            'Audi A6 4K': 20000,
            'Audi A8 D5': 25000,
            'Audi TT 8J': 14000,
        }

        if (discountForOldCar.hasOwnProperty(oldCarModel)) {
            let discount = discountForOldCar[oldCarModel];
            let finalPrice = newCarPrice - discount;
            return finalPrice;
        } else {
            return newCarPrice;
        }
    },

    carEquipment: function (extrasArr, indexArr) {
        let selectedExtras = [];
        indexArr.forEach(i => {
            selectedExtras.push(extrasArr[i])
        });

        return selectedExtras;
    },

    euroCategory: function (category) {
        if (category >= 4) {
            let price = this.newCarCost('Audi A4 B8', 30000);
            let total = price - (price * 0.05)
            return `We have added 5% discount to the final price: ${total}.`;
        } else {
            return 'Your euro category is low, so there is no discount from the final price!';
        }
    }
}

let {assert, expect} = require('chai');

describe("Tests dealership", () => {
    describe("Method newCarCost should check if return oldCar and return correct newCarPrice", function() {

        it("Should return newCarPrice if not receive oldCarModel", () => {

            assert.strictEqual(dealership.newCarCost('BMW', 3000), 3000); 
            assert.strictEqual(dealership.newCarCost('MB', 30000.15), 30000.15); 
        });
        it("Should return newCarPrice with discount if receive appropriate oldCarModel", () => {

            assert.strictEqual(dealership.newCarCost('Audi A4 B8', 30000), 15000); 
            assert.strictEqual(dealership.newCarCost('Audi A6 4K', 30000), 10000); 
            assert.strictEqual(dealership.newCarCost('Audi A8 D5', 30000), 5000); 
            assert.strictEqual(dealership.newCarCost('Audi TT 8J', 30000), 16000);
        });
     });

     describe("Method carEquipment should return correct array of selected extras", function() {

        it("Should return correct array of selected extras", () => {

            let extrasArray = ['heated seats', 'sliding roof', 'sport rims', 'navigation'];
            let indexArr = [0, 1, 2];
            assert.deepEqual(dealership.carEquipment(extrasArray, indexArr), ['heated seats', 'sliding roof', 'sport rims']); 
            indexArr = [0, 1];
            assert.deepEqual(dealership.carEquipment(extrasArray, indexArr), ['heated seats', 'sliding roof']); 
            indexArr = [0];
            assert.deepEqual(dealership.carEquipment(extrasArray, indexArr), ['heated seats']); 
        });

     });

     describe("Method euroCategory should check the ecology of new car and returns a message regarding the final price", function() {

        it("Should return correct message", () => {


            assert.deepEqual(dealership.euroCategory(4), `We have added 5% discount to the final price: 14250.`); 
            assert.deepEqual(dealership.euroCategory(5), `We have added 5% discount to the final price: 14250.`); 
            assert.deepEqual(dealership.euroCategory(3), 'Your euro category is low, so there is no discount from the final price!'); 
            assert.deepEqual(dealership.euroCategory(2), 'Your euro category is low, so there is no discount from the final price!');

        });

     });
});

