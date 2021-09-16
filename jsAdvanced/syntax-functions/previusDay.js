function previousDay (year, month, day) {
    const date = new Date(year, month-1, day);
    const resultDate = new Date();
    const millisecs = 1000 * 3600 * 24;
    resultDate.setTime(date.getTime() - millisecs)
    console.log(`${resultDate.getFullYear()}-${Number(resultDate.getMonth())+1}-${resultDate.getDate()}`)
}
previousDay(2016, 10, 01)