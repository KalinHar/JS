class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    get budget() {
        return this._budget;
    }

    set budget(value) {
        if (value <= 0){
            throw new Error("The budget cannot be a negative number");
        }
        this._budget = value;

    }

    shopping(product) {
        const [prName, prPrice] = product;
        if (prPrice > this.budget) {
            throw new Error("Not enough money to buy this product")
        }
        this.products.push(prName);
        this.budget -= prPrice;
        return `You have successfully bought ${prName}!`;
    }

    recipes(recipe) {
        recipe.productsList.forEach(pr => {
            if(!this.products.includes(pr)) {
                throw new Error("We do not have this product")
            }
        });
        this.dishes.push(recipe);
        return `${recipe.recipeName} has been successfully cooked!`
    }

    inviteGuests(name, dish) {
        if (!this.dishes.some(d => d.recipeName == dish)) {
            throw new Error("We do not have this dish")
        }
        if (Object.keys(this.guests).some(gName => gName == name)) {
            throw new Error("This guest has already been invited");
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let output = [];
        for (let [gn, d] of Object.entries(this.guests)) {
            let recDish = this.dishes.filter(dish => dish.recipeName == d)[0]
            let pr = recDish.productsList.join(', ');
            output.push(`${gn} will eat ${d}, which consists of ${pr}`);
        }
        return output.join('\n');
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());
