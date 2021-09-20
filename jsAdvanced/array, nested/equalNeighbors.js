function neighbors(mtrx) {
    let eqElements = 0;
    function inRange(mtrx, r, c) {
        if (0 <= r && r < mtrx.length && 0 <= c && c < mtrx[r].length) return true;
        return false;
    }
    for (let r = 0; r < mtrx.length; r++) {
        for (let c = 0; c < mtrx[r].length; c++) {
            el = mtrx[r][c];
            if (inRange(mtrx, r + 1, c) && el === mtrx[r + 1][c]) eqElements++;
            if (inRange(mtrx, r, c + 1) && el === mtrx[r][c + 1]) eqElements++;
        }
    }
    return eqElements;
}

console.log(neighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
))

console.log(neighbors([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]
))