function validate() {
    document.getElementById('email').addEventListener('change', onChange);
    const input = document.querySelector('#email');

    function onChange(ev) {
        const pattetn = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (pattetn.test(ev.target.value)) {
            ev.target.classList.remove('error');
        }else {
            ev.target.classList.add('error');
        }
    }
    console.log('TODO:...');
}