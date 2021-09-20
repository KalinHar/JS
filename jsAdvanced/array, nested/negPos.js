function negPos (nums) {
    const result = [];
    for (let num of nums) {
        if (num >= 0) {
            result.push(num);
        } else { result.unshift(num)}
    }
    console.log(result.join('\n'));
}

negPos([7, -2, 8, 9])
