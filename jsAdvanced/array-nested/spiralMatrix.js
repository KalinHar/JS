function spiralMatrix(width, height) {
    let maximum = width * height;
    let mtrx = [];
    for (let i = 0; i < height; i++) {
        mtrx[i] = [];
    }

    let rowIndex = 0;
    let colIndex = 0;
    let step = 0;
    for (let num = 0; num < maximum;) {
        while (colIndex + step < width) {
            num++;
            mtrx[rowIndex][colIndex] = num;
            colIndex++;

        }

        colIndex--;
        rowIndex++;
        while (rowIndex + step < height) {
            num++;
            mtrx[rowIndex][colIndex] = num;
            rowIndex++;
        }

        rowIndex--;
        colIndex--;
        while (colIndex >= step) {
            num++;
            mtrx[rowIndex][colIndex] = num;
            colIndex--;
        }

        colIndex++;
        rowIndex--;
        step++;
        while (rowIndex >= step) {
            num++;
            mtrx[rowIndex][colIndex] = num;
            rowIndex--;
        }
        
        rowIndex++;
        colIndex++;
    }
    mtrx.forEach(row => console.log(row.join(' ')));
}

spiralMatrix(2, 5)
spiralMatrix(5, 5)
spiralMatrix(4, 3)
