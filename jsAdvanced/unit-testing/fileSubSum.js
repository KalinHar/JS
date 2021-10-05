function sumArr(arr, start, end) {
    if (!Array.isArray(arr)) {
        return NaN;
    }
    if (start < 0) {
        start = 0
    }
    if (end > arr.length - 1) {
        end = arr.length - 1;
    }
    ar = arr.slice(start, end + 1); 
    if (ar.length !=  ar.filter(n => (typeof n) === 'number').length) {
        return NaN;
    }
    return ar.reduce((a, b) => a + b, 0);
}

console.log(sumArr([10, 'twenty', 30, 40], 0, 2));