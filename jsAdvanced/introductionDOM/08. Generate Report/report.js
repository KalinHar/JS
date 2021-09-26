function generateReport() {
    let report = [];
    let elementsInput = Array.from(document.getElementsByTagName('input'));
    let rows = Array.from(document.getElementsByTagName('tr')).splice(1);
    let checkedCols = [];
    for (let i=0; i<elementsInput.length; i++) {
        if (elementsInput[i].checked) {
            checkedCols.push(i);
        }
    }
    for (let row of rows) {
        let result = {};
        for (let c of checkedCols) {
            result[elementsInput[c].name] = row.children[c].textContent;
        }
        report.push(result);
    }
    // console.log(JSON.stringify(report));
    document.querySelector('#output').innerHTML = JSON.stringify(report);
}