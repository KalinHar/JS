function biggerHalf(nums) {
    result = nums.sort((a, b) => a - b).slice(nums.length / 2);
    return result
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]))
