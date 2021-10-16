class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(arrStr) {
        arrStr.forEach(element => {
            let [productName, productQuantity, productTotalPrice] = element.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);
            if (productTotalPrice <= this.budgetMoney) {
                this.budgetMoney = this.budgetMoney - productTotalPrice;
                if (!this.stockProducts[productName]) {
                    this.stockProducts[productName] = 0;
                }
                this.stockProducts[productName] = this.stockProducts[productName] + productQuantity;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }

        });
        return this.history.join('\n');
    }

    addToMenu(meal, needProds, price) {
        if (!this.menu[meal]) {
            this.menu[meal] = {products: needProds, price: price};
            let mealsNum = Object.keys(this.menu).length;
            if (mealsNum == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            }else {
                return `Great idea! Now with the ${meal} we have ${mealsNum} meals in the menu, other ideas?`
            }
        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }
    }

    showTheMenu() {
        let result = [];
        for (let ml in this.menu) {
            result.push(`${ml} - $ ${this.menu[ml].price}`)
        }
        if (result.length > 0) {
            return result.join('\n');
        }
        return 'Our menu is not ready yet, please come later...'
    }

    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        let prodsForMeal = this.menu[meal].products;
        let hasProds = true;
        prodsForMeal.forEach(proQua => {
            let [prod, qua] = proQua.split(' ');
            if (!this.stockProducts[prod] || Number(qua) > this.stockProducts[prod]) {
                hasProds = false; 
            }
        });
        if (hasProds) {
            prodsForMeal.forEach(proQua => {
                let [prod, qua] = proQua.split(' ');
                this.stockProducts[prod] = this.stockProducts[prod] - Number(qua);
            });
            this.budgetMoney = this.budgetMoney + this.menu[meal].price;
            return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`

        }
        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`   
    }
}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// console.log(kitchen.showTheMenu());

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 3 3', 'Honey 50 4', 'Strawberries 400 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));
console.log(kitchen.makeTheOrder('frozenYogurt'));


