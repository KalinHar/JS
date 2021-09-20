function extract(arr) {
    // let result = [arr[0]];
    // for (i=0; i<arr.length-1; i++){
    //     if (arr[i+1]>=arr[i]) result.push(arr[i+1])
    // }   

    // let biggest = Number.MIN_SAFE_INTEGER;
    // const result = arr.filter((el) => {
    //     if (el >= biggest) {
    //         biggest = el;
    //         return true;
    //     }
    //     return false;
    // })

    let result = [];
    let biggest = Number.MIN_SAFE_INTEGER;
    arr.reduce((accum, current) => {
        if (current >= biggest) {
            biggest = current;
            accum.push(current);
        }
        return accum;
    }, result)

    return result;
}

console.log(extract([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ))