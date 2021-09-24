function extractText() {
    const result = [];
    let text = document.getElementsByTagName('li');
    let last = document.getElementById('result');

    for (let el of text) {
        result.push(el.textContent);
    }
    last.value = result.join('\n')
}