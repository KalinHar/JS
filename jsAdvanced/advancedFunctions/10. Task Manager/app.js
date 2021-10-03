function solve() {
    const [addSec, openSec, inProgrSec, complSec] = document.querySelectorAll('section');
    const addBtn = addSec.querySelector('button').addEventListener('click', toOpenSec);
    let task = {
        tName: addSec.querySelector('#task'),
        tDescr: addSec.querySelector('#description'),
        tDate: addSec.querySelector('#date')
    }

    function toOpenSec(e) {
        e.preventDefault();
        if (task.tName.value != '' && task.tDescr.value != '' && task.tDate.value != '') {
            const openTask = document.createElement('article');
            openTask.innerHTML = `<h3>${task.tName.value}</h3>
                                    <p>Description: ${task.tDescr.value}</p>
                                    <p>Due Date: ${task.tDate.value}</p>
                                    <div class="flex">
                                        <button class="green">Start</button>
                                        <button class="red">Delete</button>
                                    </div>`;
            openSec.children[1].appendChild(openTask);
            const [startBtn, delBtn] = openTask.querySelectorAll('button');
            delBtn.addEventListener('click', () => openTask.remove());
            startBtn.addEventListener('click', toInProgrSec);
            task.tName.value = '';
            task.tDate.value = '';
            task.tDescr.value = '';

            console.log(task.tName.value);
        }
    }

    function toInProgrSec(e) {
        const inPrTask = document.createElement('article');
        const task = e.target.parentElement.parentElement;
        inPrTask.innerHTML = `<h3>${task.children[0].textContent}</h3>
                                <p>${task.children[1].textContent}</p>
                                <p>${task.children[2].textContent}</p>
                                <div class="flex">
                                    <button class="red">Delete</button>
                                    <button class="orange">Finish</button>
                                </div>`;
        inProgrSec.children[1].appendChild(inPrTask);
        const [delBtn, finBtn] = inPrTask.querySelectorAll('button');
        delBtn.addEventListener('click', () => inPrTask.remove());
        finBtn.addEventListener('click', toComplSec);
        task.remove();
    }

    function toComplSec(e) {
        const complTask = document.createElement('article');
        const task = e.target.parentElement.parentElement;
        complTask.innerHTML = `<h3>${task.children[0].textContent}</h3>
                                <p>${task.children[1].textContent}</p>
                                <p>${task.children[2].textContent}</p>`;
        complSec.children[1].appendChild(complTask);
        task.remove();
    }
}