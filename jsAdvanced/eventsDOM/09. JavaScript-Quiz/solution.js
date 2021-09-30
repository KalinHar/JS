function solve() {
    const buttons = Array.from(document.querySelectorAll('.answer-text'));
    buttons.map(b => b.addEventListener('click', onClick));
    let result = 0;
    const trueAnswers = [
        'onclick',
        'JSON.stringify()',
        'A programming API for HTML and XML documents'
    ];

    function printResult(section) {
        let output;
        if (result == trueAnswers.length) {
            output = "You are recognized as top JavaScript fan!";
        }else {
            output = `You have ${result} right answers`;
        }
        section.querySelector('h1').textContent = output;
    }

    function onClick(ev) {
        if (trueAnswers.includes(ev.target.textContent)) {
            result ++;
        }
        const currSec = ev.target.parentElement.parentElement.parentElement.parentElement;
        const nextSec = currSec.nextElementSibling;
        currSec.style.display = 'none';
        nextSec.style.display = 'block';
        
        if (nextSec.id == "results") {
            printResult(nextSec);
        }
    }
}
