function encodeAndDecodeMessages() {
    const inputMsg = document.querySelector('textarea[placeholder="Write your message here..."]');
    const lastMsg = document.querySelector('textarea[placeholder="No messages..."]');
    let reciever = '';

    function encript(text, step) {
        result = '';
        for (let ch of Array.from(text)) {
            result += String.fromCharCode(ch.charCodeAt(0) + step)
        }
        return result;
    }

    document.querySelector('main').addEventListener('click', clicked);

    function clicked(ev) {
        if (ev.target.tagName == 'BUTTON' && ev.target.textContent == 'Encode and send it') {
            reciever = encript(inputMsg.value, 1);
            inputMsg.value = '';
            lastMsg.value = reciever;
        } else if (ev.target.tagName == 'BUTTON' && ev.target.textContent == 'Decode and read it') {
            reciever = encript(lastMsg.value, -1);
            lastMsg.value = reciever;
        }
    }
}