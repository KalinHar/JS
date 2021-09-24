function extract(content) {
    let text = document.getElementById('content').textContent;
    let result = text.match(/\(.+?\)/g);
    result = result.map(el => el.slice(1, el.length - 1));
    return result.join('; ');
}