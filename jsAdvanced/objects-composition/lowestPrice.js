function lowestPrice(arr) {
    let result = {};
    for (let tpp of arr) {
        let [city, product, pri] = tpp.split(' | ');
        pri = Number(pri);

        if (!result[product]) {
            result[product] = {};
        }
        result[product][city] = pri; 
    }
    // console.log(result)
    // let sortedItems = Object.keys(result).sort((a, b) => a.localeCompare,b);
    for (const prod in result) {
        const sorted = Object.entries(result[prod]).sort((a, b) => a[1] - b[1]);
        console.log(`${prod} -> ${sorted[0][1]} (${sorted[0][0]})`)
    }
}

lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
