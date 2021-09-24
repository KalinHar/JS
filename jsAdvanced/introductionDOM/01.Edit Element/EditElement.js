function editElement(reference, match, replacer) {
    const text = reference.textContent;
    reference.textContent = text.split(match).join(replacer);
}