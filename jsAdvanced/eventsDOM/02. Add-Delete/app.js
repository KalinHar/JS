function addItem() {
    const elText = document.querySelector('#newItemText');
    
    const elLi = document.createElement('li');
    elLi.textContent = elText.value;

    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';
    button.addEventListener('click', removeEl);

    elLi.appendChild(button);

    document.querySelector('#items').appendChild(elLi);
    
    elText.value = '';

    function removeEl(ev) {
        ev.target.parentNode.remove();
    }
}
