// Selecting DOM elements
const element = document.getElementById('content');
document.querySelector('#content');
document.querySelectorAll('ul li');

// Get/Set content
element.textContent;
element.value;

// Traversing DOM
element.parentElement;
element.children;

// Create element
const para = document.createElement('p');

// Adding to DOM
element.appendChild(para);

// Removing from DOM
para.remove();

// Events
element.addEventListener('click', e => {
    console.log(e.target);
});

gradient.addEventListener('mousemove', onMove);
function onMove(ev) {
    const box = ev.target;
    const offset = Math.floor(ev.offsetX / box.clientWidth * 100);
    output.textContent = `${offset}%`;
}

field.addEventListener('focus', onFocus);
field.addEventListener('blur', onBlur);
function onFocus(ev) {
ev.target.parentNode.className = 'focused';
}
function onBlur(ev) {
ev.target.parentNode.className = '';
}

document.getElementById('email').addEventListener('change', onChange);
function onChange(ev) {
    const pattetn = /^[a-z]+@[a-z]+\.[a-z]+$/;
    if (pattetn.test(ev.target.value)) {
        ev.target.classList.remove('error');
    }else {
        ev.target.classList.add('error');
    }
}