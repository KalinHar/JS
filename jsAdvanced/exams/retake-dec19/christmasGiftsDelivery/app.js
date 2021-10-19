function solution() {
    const [listSec, sentSec, discardSec] = document.querySelectorAll('section ul');
    const newGift = document.querySelector('section input');
    document.querySelector('section div button').addEventListener('click', addToList);

    function addToList() {
        const liEl = document.createElement('li');
        liEl.classList.add('gift');
        liEl.textContent = newGift.value;
        newGift.value = ''
        const sentBtn = document.createElement('button');
        sentBtn.id = "sendButton";
        sentBtn.textContent = 'Send';
        const discardBtn = document.createElement('button');
        discardBtn.id = 'discardButton';
        discardBtn.textContent = 'Discard';
        liEl.appendChild(sentBtn);
        liEl.appendChild(discardBtn);
        listSec.appendChild(liEl);
        Array.from(listSec.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(li => listSec.appendChild(li));
        sentBtn.addEventListener('click', addToSended);
        discardBtn.addEventListener('click', addToDiscarded);
    }
    function addToSended(e) {
        const sendGift = e.target.parentElement;
        Array.from(sendGift.children).forEach(el => el.remove());
        sentSec.appendChild(sendGift);
    }
    function addToDiscarded(e) {
        const discardGift = e.target.parentElement;
        Array.from(discardGift.children).forEach(el => el.remove());
        discardSec.appendChild(discardGift);
    }
}