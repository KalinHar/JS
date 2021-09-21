function productCalories(arr) {
    const result = {};
    for (let i=0; i<arr.length; i+=2) {
        result[arr[i]] = Number(arr[i+1]);
    }
    return result;
}

console.log(productCalories(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']))
