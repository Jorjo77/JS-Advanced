const pizzUni = require('../picaPlace');
let {expect, assert} = require('chai');

describe("Pizza place tests", () => {
    describe("makeAnOrder tests", () => {

        //Order pizza only
        it("Should return confirmation message when pizza is ordered", () => {
            let order = {
                orderedPizza: 'Margarita',
            }
            expect(pizzUni.makeAnOrder(order)).to.be.equal(`You just ordered ${order.orderedPizza}`);
        });
        //Order pizza and drink
        it("Should return confirmation message when pizza and drink is ordered", () => {
            let order = {
                orderedPizza: 'Margarita',
                orderedDrink: 'Juse'
            }
            expect(pizzUni.makeAnOrder(order)).to.be.equal(`You just ordered ${order.orderedPizza} and ${order.orderedDrink}.`);
        });
        it("Should throw error when there is no ordered pizza", () => {
            let order = {};
            expect(() => pizzUni.makeAnOrder(order)).to.throw();
        });
        it("Should throw error when there is only drink", () => {
            let order = {
                orderedDrink: 'Pepsi'
            };
            expect(() => pizzUni.makeAnOrder(order)).to.throw();
        });
        it("Should throw error when there is no order", () => {

            expect(() => pizzUni.makeAnOrder()).to.throw();
        });
     });
     describe("getRemainingWork tests", () => {

        it('Should return complete orders massage when one ready statuse is given', () => {

            let statusArr = [
                { pizzaName: 'Margarita', status: 'ready'}
            ];

            expect(pizzUni.getRemainingWork(statusArr)).to.equal('All orders are complete!');
        });
        it('Should return complete orders massage when two ready statused are given', () => {

            let statusArr = [
                { pizzaName: 'Margarita', status: 'ready'},
                { pizzaName: 'Italiana', status: 'ready'}
            ];

            expect(pizzUni.getRemainingWork(statusArr)).to.equal('All orders are complete!');
        });
        it('Should return remaining pizzas when there is one preparing order', () => {

            let statusArr = [
                { pizzaName: 'Margarita', status: 'ready'},
                { pizzaName: 'Italiana', status: 'preparing '}
            ];

            expect(pizzUni.getRemainingWork(statusArr)).to.equal(`The following pizzas are still preparing: Italiana.`);
        });
        it('Should return remaining pizzas when there is two preparing orders', () => {

            let statusArr = [
                { pizzaName: 'Margarita', status: 'preparing'},
                { pizzaName: 'Italiana', status: 'preparing '}
            ];

            expect(pizzUni.getRemainingWork(statusArr)).to.equal(`The following pizzas are still preparing: Margarita, Italiana.`);
        });
     });
     describe("orderType tests", () => {

        it('Should return total sum when type of order is Delivery', () => {

            let totalSum = 10;
            let typeOfOrder = 'Delivery';
            expect(pizzUni.orderType(totalSum, typeOfOrder)).to.equal(10);

        });
        it('Should return total sum minus 10% when type of order is Carry Out', () => {

            let totalSum = 10;
            let typeOfOrder = 'Carry Out';
            expect(pizzUni.orderType(totalSum, typeOfOrder)).to.equal(9);

        });
     });
});
