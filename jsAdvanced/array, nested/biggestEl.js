function biggestEl(matrx) {
    let biggest = Math.max(...matrx[0]);
    for (let row of matrx) {
        if (biggest < Math.max(...row)) {biggest = Math.max(...row)};
    }
    return biggest
}

console.log(biggestEl([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ))
