function squareOfStars(n) {
    let size;
    if (typeof(n) == "undefined") {
        size = 5;
    }else {
        size = n;
    }
    for (let i = 1; i <= size; i++) {
        console.log('* '.repeat(size));
    }
}

squareOfStars(3);
//squareOfStars(1);