function diagonalSum(matrx) {
    let sum1 = 0;
    let sum2 = 0;
    for (i = 0; i < matrx.length; i++) {
        sum1 += matrx[i][i]
        sum2 += matrx[matrx.length - i -1][i]
    }
    console.log(sum1, sum2)
}

diagonalSum([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   )
