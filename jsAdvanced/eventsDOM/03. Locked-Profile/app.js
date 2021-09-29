function lockedProfile() {
    document.querySelector('#main').addEventListener('click', hideShow);

    function hideShow(ev) {
        if (ev.target.parentElement.querySelector('input[value="unlock"]').checked) {
            if (ev.target.tagName == 'BUTTON'){
                const el = ev.target.parentElement.querySelector('div');
                ev.target.textContent = ev.target.textContent == "Hide it" ? "Show more": "Hide it";
                el.style.display = el.style.display == "" ? "block": "";
            }
        }
    }
}