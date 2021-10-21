class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(arrOfStr) {
        arrOfStr.forEach(pr => {
            let [productName, productQuantity, productTotalPrice] = pr.split(' ');
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);
            if (productTotalPrice <= this.budgetMoney) {
                this.budgetMoney -= productTotalPrice;
                if (!this.stockProducts[productName]) {
                    this.stockProducts[productName] = 0;
                }
                this.stockProducts[productName] += productQuantity;
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
            }else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        });
        return this.history.join('\n');
    }

    addToMenu(meal, prArr, price) {
        if (Object.keys(this.menu).includes(meal)){
            return `The ${meal} is already in the our menu, try something different.`;  
        }
        this.menu[meal] = {
            products: prArr,
            price
        }
        if (Object.keys(this.menu).length == 1) {
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
        }
        return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
    }

    showTheMenu() {
        if (Object.keys(this.menu).length == 0) {
            return "Our menu is not ready yet, please come later...";
        }
        let output = [];
        Object.keys(this.menu).forEach(m => {
            output.push(`${m} - $ ${this.menu[m].price}`)
        });
        return output.join('\n');
    }

    makeTheOrder(meal) {
        if (!Object.keys(this.menu).includes(meal)){
            return `There is not ${meal} yet in our menu, do you want to order something else?`;  
        }
        let products = this.menu[meal].products;
        let price = this.menu[meal].price;
        let hasProducts = true;
        products.forEach(pr => {
            let [prName, prQua] = pr.split(' ');
            if (!this.stockProducts[prName] || this.stockProducts[prName] < Number(prQua)) {
                hasProducts = false;
            }
        });
        if (!hasProducts) {
            return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }
        products.forEach(pr => {
            let [prName, prQua] = pr.split(' ');
            this.stockProducts[prName] -= Number(prQua);
        });
        this.budgetMoney += price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${price}.`
    }
}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// console.log(kitchen.showTheMenu());

// let kitchen = new Restaurant(1000);
// kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// // kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// console.log(kitchen.makeTheOrder('frozenYogurt'));
// console.log(kitchen.showTheMenu());
