function piecePie(pies, start, end) {
    const strOf = pies.indexOf(start);
    const endTo = pies.indexOf(end) + 1;
    const result = pies.slice(strOf, endTo);
    return result

}

console.log(piecePie(['Pumpkin Pie',
                      'Key Lime Pie',
                      'Cherry Pie',
                      'Lemon Meringue Pie',
                      'Sugar Cream Pie'],
                      'Key Lime Pie',
                      'Lemon Meringue Pie'))
                      