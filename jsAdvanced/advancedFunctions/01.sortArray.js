function sortArray(arr, sortType) {
    const sortBy = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    }
    return arr.sort(sortBy[sortType])
}

console.log(sortArray([14, 7, 17, 6, 8], 'desc'));