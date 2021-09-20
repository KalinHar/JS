function orbit(arr) {
    const [width, height, x, y] = arr;
    let nOrbits = width > height ? width : height;
    let mtrx = [];
    for(let i=0; i<height; i++) {
        mtrx[i] = [];
    }

    for(let row = 0; row < height; row++) {
        for(let col = 0; col < width; col++) {
            mtrx[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }

    // function inRowRange(c) {
    //     return 0 <= c && c < width;
    // }

    // function inColRange(r) {
    //     return 0 <= r && r < height;
    // }
    
    // function fillRow(r, start, end, char) {
    //     for (let c = start; c <= end; c++) {
    //         if (inRowRange(c)) mtrx[r][c] = char;
    //     }
    // }

    // function fillCol(c, start, end, char) {
    //     for (let r = start; r <= end; r++) {
    //         if (inColRange(r)) mtrx[r][c] = char;
    //     }
    // }

    // mtrx[x][y] = 1
    // for (let n = 1; n < nOrbits; n++) {
    //     const upRow = x-n, downRow = x+n, leftCol = y-n, rightCol = y+n;

    //     if (inColRange(upRow)) fillRow(upRow, leftCol, rightCol, n+1);
    //     if (inColRange(downRow)) fillRow(downRow, leftCol, rightCol, n+1);
    //     if (inRowRange(leftCol)) fillCol(leftCol, upRow, downRow, n+1);
    //     if (inRowRange(rightCol)) fillCol(rightCol, upRow, downRow, n+1);
    // }
    
    mtrx.forEach((el) => console.log(el.join(' ')))
}

orbit([4, 4, 0, 0]);
orbit([5, 3, 1, 4]);
