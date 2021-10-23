window.addEventListener('load', solve);

function solve() {
    const genre = document.querySelector('#genre');
    const name = document.querySelector('#name');
    const author = document.querySelector('#author');
    const date = document.querySelector('#date');
    document.querySelector('#add-btn').addEventListener('click', toAllHits);

    const allHits = document.querySelector('.all-hits-container');
    const savedHits = document.querySelector('.saved-container');
    const totalLikes = document.querySelector('.likes p');
    
    function toAllHits(e) {
        e.preventDefault();
        if (genre.value != '' && name.value != '' && author.value != '' && date.value != '') {
            let div = document.createElement('div');
            div.className = 'hits-info';
            div.innerHTML = `<img src="./static/img/img.png">
<h2>Genre: ${genre.value}</h2>
<h2>Name: ${name.value}</h2>
<h2>Author: ${author.value}</h2>
<h3>Date: ${date.value}</h3>`;
            allHits.appendChild(div);

            let saveBtn = document.createElement('button');
            let likeBtn = document.createElement('button');
            let dellBtn = document.createElement('button');
            saveBtn.className = 'save-btn';
            saveBtn.textContent = 'Save song';
            likeBtn.className = 'like-btn';
            likeBtn.textContent = 'Like song';
            dellBtn.className = 'delete-btn';
            dellBtn.textContent = 'Delete';
            likeBtn.addEventListener('click', likeSong);
            dellBtn.addEventListener('click', dellSong);
            saveBtn.addEventListener('click', toSavedSongs);

            [saveBtn, likeBtn, dellBtn].forEach(b => div.appendChild(b));
            
            [genre, name, author, date].forEach(e => e.value = '');
        }
    }
    function dellSong(e) {
        e.target.parentElement.remove();
    }

    function toSavedSongs(e) {
        let el = e.target.parentElement;
        savedHits.appendChild(el);
        e.target.nextElementSibling.remove();
        e.target.remove();
    }

    function likeSong(e) {
        let curLikes = totalLikes.textContent.split(': ')[1];
        curLikes = Number(curLikes) + 1;
        totalLikes.innerHTML = `Total Likes: ${curLikes}`;
        e.target.disabled = "true";
    }
}