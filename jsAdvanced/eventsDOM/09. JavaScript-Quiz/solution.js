function solve() {
    const buttons = Array.from(document.querySelectorAll('.answer-text'));
    buttons.map(b => b.addEventListener('click', onClick));
    let result = 0;
    let key = 0;
    const trueAnswers = {
        1: 'onclick',
        2: 'JSON.stringify()',
        3: 'A programming API for HTML and XML documents'
    };

    function printResult(section) {
        let output;
        if (key == result) {
            output = "You are recognized as top JavaScript fan!";
        }else {
            output = `You have ${result} right answers`;
        }
        section.querySelector('h1').textContent = output;
    }

    function onClick(ev) {
        key ++;
        if (ev.target.textContent == trueAnswers[key]) {
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
