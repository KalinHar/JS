function sameNumbers(num) {
    const strNum = num.toString();
    let isTrue = true;
    let result = parseInt(strNum[0]);
    for (let i = 1; i < strNum.length; i++) {
        result += parseInt(strNum[i]);
        if (strNum[i] != strNum[i-1]) {
            isTrue = false;
        }
    }
    console.log(isTrue);
    console.log(result);
}

sameNumbers(22222)
