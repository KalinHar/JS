function deleteByEmail() {
    const input = document.querySelector('input[name="email"]');
    
    let rows = Array
        .from(document.getElementsByTagName('tbody')[0].children)
        .filter(row => row.children[1].textContent == input.value);
    rows.forEach(row => row.remove());

    document.getElementById('result').textContent = rows.length > 0 ? 'Deleted.': 'Not found.';
}