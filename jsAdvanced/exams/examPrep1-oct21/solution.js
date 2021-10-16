function solve() {
    const inputFields = Array.from(document.querySelectorAll('#container input'));
    const addBtn = document.querySelector('#container button');
    addBtn.addEventListener('click', addAnimal);
    const findForm = document.querySelector('#adoption ul')

    function addAnimal(e) {
        e.preventDefault();
        let [name, age, kind, currOwner] = inputFields.map(f => f.value);
        age = Number(age);
        if (!inputFields.some(f => f.value.trim() == '') && !Number.isNaN(age)) {
            createFindForm(name, age, kind, currOwner);
        }
        inputFields.forEach(f => f.value = '');  
    }

    function createFindForm(name, age, kind, currOwner) {
        const newLi = document.createElement('li');
        newLi.innerHTML = `
<p><strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong></p>
<span>Owner: ${currOwner}</span>
<button>Contact with owner</button>`;
        findForm.appendChild(newLi);
        newLi.querySelector('button').addEventListener('click', createTakeBtn);
    }
    
    function  createTakeBtn(e) {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
<input placeholder="Enter your names">
<button>Yes! I take it!</button>`;
        e.target.parentElement.appendChild(newDiv);
        let takeBtn = e.target.parentElement.querySelector('div button');
        let animal = e.target
        e.target.remove();
        takeBtn.addEventListener('click', addToNewHome);
    }

    function addToNewHome(e) {
        let newOwner = e.target.parentElement.querySelector('input').value.trim();
        if (newOwner) {
            let newLi = e.target.parentElement.parentElement;
            document.querySelector('#adopted ul').appendChild(newLi);
            newLi.querySelector('span').textContent = `New Owner: ${newOwner}`;
            newLi.querySelector('input').remove();
            let checkBtn = newLi.querySelector('button');
            checkBtn.textContent = 'Checked';
            checkBtn.addEventListener('click', () => newLi.remove());
        } 
    }
}
