function lastK (n, k) {
    let arr = [1];
    for (i=0; i<n-1; i++){
        let sum = arr.slice(-k);
        sum = sum.reduce((a, b) => a + b, 0);
        arr.push(sum);
    }
    return arr;
}

lastK(6, 3);
lastK(8, 2);
