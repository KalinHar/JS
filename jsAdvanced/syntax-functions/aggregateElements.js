function aggregateElements(n) {
    let sum = n.reduce((a, b) => a + b, 0);
    console.log(sum);
    let newN = [];
    for (let i = 0; i < n.length; i ++) {
        newN.push(1/n[i])
    }
    let invsum = newN.reduce((a, b) => a + b, 0);
    console.log(invsum);
    console.log(n.join(''));
}

aggregateElements([1, 2, 3]);