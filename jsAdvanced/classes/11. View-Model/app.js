class Textbox {
    constructor(selector, regex) {
        this._value = '';
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regex;
    }

    get value() {
        return this._value;
    }
    set value(val) {
        this._value = val;
        for (let el of this.elements) {
            el.value = val;
        }
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return !this._invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('textbox');
console.log(inputs)
// textbox.value = "Tesst";
console.log(inputs[0].value == 'Tesst');
console.log(inputs[1].value == 'Tesst');
// textbox.value = "asd"
// console.log(textbox.isValid())
// console.log(textbox._invalidSymbols)
// inputs.addEventListener('click',function(){console.log(textbox.value);});
