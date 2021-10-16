let pizzUni = {
    makeAnOrder: function (obj) {

        if (!obj.orderedPizza) {
            throw new Error('You must order at least 1 Pizza to finish the order.');
        } else {
            let result = `You just ordered ${obj.orderedPizza}`;
            if (obj.orderedDrink) {
                result += ` and ${obj.orderedDrink}.`;
            }
            return result;
        }
    },

    getRemainingWork: function (statusArr) {

        const remainingArr = statusArr.filter(s => s.status != 'ready');

        if (remainingArr.length > 0) {

            let pizzaNames = remainingArr.map(p => p.pizzaName).join(', ')
            let pizzasLeft = `The following pizzas are still preparing: ${pizzaNames}.`

            return pizzasLeft;
        } else {
            return 'All orders are complete!'
        }

    },

    orderType: function (totalSum, typeOfOrder) {
        if (typeOfOrder === 'Carry Out') {
            totalSum -= totalSum * 0.1;

            return totalSum;
        } else if (typeOfOrder === 'Delivery') {

            return totalSum;
        }
    }
}

module.exports = {pizzUni}

// ***********test***********

const { expect, assert } = require('chai');
const { pizzUni } = require('./pizzaPlaseUnitTest');

describe('pizzUni', () => {
    describe('has properties', () => {
        it('has correct property', () => {
            expect(typeof pizzUni.makeAnOrder == 'function').to.be.true;
            expect(typeof pizzUni.getRemainingWork == 'function').to.be.true;
            expect(typeof pizzUni.orderType == 'function').to.be.true;
        });
    }); 
    describe('propertiy makeAnOrder', () => {
        it('throw error', () => {
            let obj = { orderedPizza: '', orderedDrink: '' }
            expect(() => pizzUni.makeAnOrder(obj)).to.be.throw();
        });
        it('order only pizza', () => {
            let obj = { orderedPizza: 'Pizzz', orderedDrink: '' }
            expect(pizzUni.makeAnOrder(obj)).to.be.equal('You just ordered Pizzz');
        });
        it('order pizza and drink', () => {
            let obj = { orderedPizza: 'Pizzz', orderedDrink: 'Drink' }
            expect(pizzUni.makeAnOrder(obj)).to.be.equal('You just ordered Pizzz and Drink.');
        });
    }); 
    describe('propertiy getRemainingWork', () => {
        it('pizza not ready', () => {
            let arr = [{pizzaName: 'Gooo', status: 'preparing'},
                        {pizzaName: 'Pizzz', status: 'ready'},
                        {pizzaName: 'Nooo', status: 'preparing'}]
            expect(pizzUni.getRemainingWork(arr)).to.be.equal('The following pizzas are still preparing: Gooo, Nooo.');
        });
        it('pizza ready', () => {
            let arr = [{pizzaName: 'Gooo', status: 'ready'},
                        {pizzaName: 'Pizzz', status: 'ready'},
                        {pizzaName: 'Nooo', status: 'ready'}]
            expect(pizzUni.getRemainingWork(arr)).to.be.equal('All orders are complete!');
        });
    }); 
    describe('propertiy orderType', () => {
        it('Carry out', () => {
            let typeOrd = 'Carry Out';
            let totSum = 50;
            expect(pizzUni.orderType(totSum, typeOrd)).to.be.equal(45);
        });
        it('Delivery', () => {
            let typeOrd = 'Delivery';
            let totSum = 50;
            expect(pizzUni.orderType(totSum, typeOrd)).to.be.equal(50);
        });
    });
});


