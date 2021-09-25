function solve() {
    let sentences = document.getElementById('input').value.split('.');
    sentences.pop();
    const output = document.getElementById('output');
    const blocks = Math.ceil(sentences.length / 3);
    let result = '';
    for (let i=0; i<blocks; i++) {
        result += `<p>${sentences.splice(0, 3).join('.')}.</p>`;
    }
    output.innerHTML = result;
}
