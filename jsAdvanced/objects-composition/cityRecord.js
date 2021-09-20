function city(name, population, treasury) {
    const result = {
        name: name,
        popupation: population,
        treasury: treasury 
    };
    return result;
}

console.log(city("ruse", 15000, 100))

function city(name, population, treasury) {
    const result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percent) {
            this.population += Math.floor(this.population * (percent /100))
        },
        applyRecession(percent) {
            this.treasury -= Math.ceil(this.treasury * (percent / 100))
        }
    };
    return result;
}
