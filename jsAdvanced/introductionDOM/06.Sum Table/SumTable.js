function sumTable() {
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let sum = 0;
    for (let row of rows.slice(1, -1)) {
        sum += Number(row.lastChild.textContent);
    }
    document.getElementById('sum').textContent = sum;
}