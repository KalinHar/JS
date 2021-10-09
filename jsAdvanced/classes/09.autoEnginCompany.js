function solve(input) {

    const carBrands = new Map();

    input.forEach((el)=> {
        let [brand, model, count] = el.split(" | ");
        count = Number(count);

        if (carBrands.has(brand)) {
            let carBrand = carBrands.get(brand);
            if (carBrand.has(model)) {
                carBrand.set(model, carBrand.get(model) + count);
            } else {
                carBrand.set(model, count);
            }
        } else {
            const modelMap = new Map();
            modelMap.set(model, count);
            carBrands.set(brand, modelMap);

        }
    })

    for (const [key, value] of carBrands.entries()) {
        console.log(key);
        for (const [model, count] of value) {
            console.log(`###${model} -> ${count}`);
        }
    }

}