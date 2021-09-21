function lowestPrice(arr) {
    let result = {};
    for (let tpp of arr) {
        let [city, product, pri] = tpp.split(' | ');
        if (result.product == undefined) {
            let el = {
                price: pri,
                town: city
            }  
            
            result[product] = el; 
        }else if (result.product.price > pri) {
            result[product] = {
                price: pri,
                town: city
            }
        }
    }
    console.log(result)
    const elements = Object.entries(result)
    for (let [pro, v] of elements) {
        console.log(`${pro} -> ${v.price} (${v.town})`)
    }
}

lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
