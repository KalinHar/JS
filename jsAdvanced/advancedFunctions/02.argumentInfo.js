function agrInfo (...input) {
    const countTypes = {};

    for (let el of input) {
        const elType = typeof(el);
        if (countTypes.hasOwnProperty(elType)) {
            countTypes[elType] = countTypes[elType] + 1;
        }else {
            countTypes[elType] = 1;
        }
        console.log(`${elType}: ${el}`);
    }
    
    for (let el of Object.entries(countTypes).sort(([,a], [,b]) => b - a)) {
        console.log(`${el[0]} = ${el[1]}`)
    }
}

agrInfo('cat', 42, function () { console.log('Hello world!'); } , 5)