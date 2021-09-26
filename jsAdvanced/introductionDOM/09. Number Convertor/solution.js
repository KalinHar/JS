function solve() {
    document.querySelector('button').addEventListener('click', clickEvent)
    let toType = document.querySelector('#selectMenuTo');
    let binOption = document.createElement('option');
    let hexaOption = document.createElement('option');
    binOption.value = 'binary';
    binOption.text = 'Binary';
    hexaOption.value = 'hexadecimal';
    hexaOption.text = 'Hexadecimal';
    toType.add(binOption);
    toType.add(hexaOption);
    
    function clickEvent() {
        let number = Number(document.querySelector('#input').value);
        let convertTo = toType.options[toType.selectedIndex].text;
        let result = {
            "Binary": number.toString(2),
            "Hexadecimal": number.toString(16).toUpperCase()
        };
        document.querySelector('#result').value = result[convertTo];
    }
}