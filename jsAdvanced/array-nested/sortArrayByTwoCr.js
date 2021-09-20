function sortByTwo(arr) {
    arr.sort((a, b) => a.localeCompare(b)).sort((a, b) => a.length - b.length)
    console.log(arr.join('\n'))
}

sortByTwo(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
)