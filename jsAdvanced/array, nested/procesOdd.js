function processOdd(nums) {
    const result = nums.filter((v, i) => i % 2 == 1).map(n => n*2).reverse();
    return result;
}

console.log(processOdd([3, 0, 10, 4, 7, 3]))
