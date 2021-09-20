function smallTwo(nums) {
    const result = nums.sort((a, b) => a - b).slice(0, 2);
    console.log(result.join(' '));
}

smallTwo([30, 15, 50, 5]);
