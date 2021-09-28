function addItem() {
    const elText = document.querySelector('#newItemText');
    
    const elLi = document.createElement('li');
    elLi.textContent = elText.value;

    document.querySelector('#items').appendChild(elLi);
    
    elText.value = '';
}