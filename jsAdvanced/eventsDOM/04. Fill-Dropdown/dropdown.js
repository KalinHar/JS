function addItem() {
    const inputText = document.querySelector('input[id="newItemText"]');
    const inputVavue = document.querySelector('input[id="newItemValue"]');

    const option = document.createElement('option');
    option.textContent = inputText.value + inputVavue.value;
    document.querySelector('#menu').appendChild(option);
    inputText.value = '';
    inputVavue.value = '';
    // console.log(inputText.value, inputVavue.value);
}