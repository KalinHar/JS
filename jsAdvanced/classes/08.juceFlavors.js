function solve(input) {
    let botles = new Map();
    let quantity = new Map;

    input.forEach(el => {
        let [fruit, value] = el.split(' => ');

        if (quantity.has(fruit)) {
            quantity.set(fruit, quantity.get(fruit) + Number(value))
        }else {
            quantity.set(fruit, Number(value));
        }

        if (quantity.get(fruit) >= 1000) {
            if (botles.has(fruit)) {
                botles.set(fruit, botles.get(fruit) + Math.floor(quantity.get(fruit) / 1000));
                quantity.set(fruit, quantity.get(fruit) % 1000);
            }else {
                botles.set(fruit, Math.floor(quantity.get(fruit) / 1000));
                quantity.set(fruit, quantity.get(fruit) % 1000);
            }
        }
    });

    botles.forEach((value, key) => {
        console.log(`${key} => ${value}`);

    });
}

let input1 = ['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
let input2 = ['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']

solve(input2);