function catalogue(arr) {
    result = {};
    arr.sort((a, b) => a.localeCompare(b));
    for (let product of arr) {
        const literal = product[0];
        let [prName, price] = product.split(' : ')
        price = Number(price);
        if (!result[literal]) {
            result[literal] = {};
        }
        result[literal][prName] = price;
    }
    for (const alfa in result) {
        console.log(alfa);
        // const stored = Object.entries(result[alfa])
        // for (let pr of stored) {
        //     console.log(`  ${pr[0]}: ${pr[1]}`)
        for (let pr in result[alfa]){
            console.log(`  ${pr}: ${result[alfa][pr]}`)
        }

    }
}

catalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)
