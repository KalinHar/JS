function diagonalAttack(arr) {
    let diagIndexes = [];
    let sum1 = 0;
    let sum2 = 0;
    let mtrx = [];
    for (let el of arr) {
        mtrx.push(el.split(' ').map((n) => Number(n)));
    }
    for (let i=0; i < mtrx.length; i++) {
        sum1 += mtrx[i][i];
        sum2 += mtrx[mtrx.length - i - 1][i];
        diagIndexes.push(`${i}-${i}`, `${mtrx.length - i - 1}-${i}`);
    }

    if (sum1 == sum2) {
        for (let r = 0; r < mtrx.length; r++) {
            for (let c = 0; c < mtrx.length; c++) {
                if (diagIndexes.includes(`${r}-${c}`)) continue;
                mtrx[r][c] = sum1;
            }
        }
    }
    mtrx.flatMap((row) => console.log(row.join(' '))) 
}

diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
)

diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0']
)
