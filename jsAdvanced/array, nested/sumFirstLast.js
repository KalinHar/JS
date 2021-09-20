function sumFL (arr) {
    const sum = Number(arr[0]) + Number(arr[arr.length - 1]);
    return sum;
}

console.log(sumFL(['20', '30', '40']));
