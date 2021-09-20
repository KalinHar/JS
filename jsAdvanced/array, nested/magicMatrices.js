function magicMtrx(mtrx) {
    let isMagic = true;
    const sum = mtrx[0].reduce((a, b) => a + b, 0);
    for (let row of mtrx) {
        if (sum != row.reduce((a, b) => a + b, 0)) {
            isMagic = false;
            break;
        }
    }
    if (isMagic) {
        for (c = 0; c < mtrx[0].length; c++) {
            let colSum = 0;
            for (r = 0; r < mtrx.length; r++) {
                colSum += mtrx[r][c];
            }
            if (sum != colSum) {
                isMagic = false;
                break;
            }
        }

    }
    console.log(isMagic);
}

magicMtrx([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]
)
magicMtrx([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]
)
