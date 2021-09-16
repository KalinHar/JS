function cook (num, op1, op2, op3, op4, op5) {
    let num = Number(num);
    let coms = [op1, op2, op3, op4, op5];
    for (i = 0; i < 5; i++) {
        switch (coms[i]) {
            case 'chop': num = num / 2
            case 'dice': num = Math.sqrt(num)
            case 'spice': num++
            case 'bake': num *= 3
            case 'fillet': num *= 0.8

        }
        console.log(num)
    }
}
cook('32', 'chop', 'chop', 'chop', 'chop', 'chop')