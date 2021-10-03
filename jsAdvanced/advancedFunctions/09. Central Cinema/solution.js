function solve() {
    const [inName, inHall, inPrice] = Array.from(document.querySelectorAll('#container input'));
    const addBtn = document.querySelector('#container button');
    addBtn.addEventListener('click', addMovie);
    const onMovies = document.querySelector('#movies ul');
    const archMovies = document.querySelector('#archive ul');
    document.querySelector('#archive button').addEventListener('click', () => archMovies.innerHTML = '')

    function addMovie(e) {
        e.preventDefault();
        if (inName.value != '' && inHall.value != '' && inPrice.value != '' && !isNaN(Number(inPrice.value))) {
            const newMovie = document.createElement('li');
            newMovie.innerHTML = `<span>${inName.value}</span>
                                <strong>Hall: ${inHall.value}</strong>
                                <div>
                                    <strong>${Number(inPrice.value).toFixed(2)}</strong>
                                    <input placeholder="Tickets Sold">
                                    <button>Archive</button>
                                </div>`;
            onMovies.appendChild(newMovie);
            newMovie.querySelector('div button').addEventListener('click', toArchive);
            inName.value = '';
            inHall.value = '';
            inPrice.value = '';
        }
    }

    function toArchive(e) {
        const aMovie = e.target.parentElement.parentElement;
        const ticketCount = aMovie.querySelector('div input');
        if (ticketCount.value != '' && !isNaN(Number(ticketCount.value))) {
            const archMovie = document.createElement('li');
            const archMovName = aMovie.querySelector('span').textContent;
            const archMovTotal = Number(aMovie.querySelector('div strong').textContent) * Number(ticketCount.value);
            archMovie.innerHTML = `<span>${archMovName}</span>
                                   <strong>Total amount: ${archMovTotal.toFixed(2)}</strong>
                                   <button>Delete</button>`;
            archMovies.appendChild(archMovie);
            archMovie.querySelector('button').addEventListener('click', () => archMovie.remove());
            aMovie.remove();
        }
    }
}