function editElement(htmlReference, match, replacer) {
    let content = htmlReference.textContent
    const matcher = new RegExp(match, 'g');
    const edited = content.replace(matcher, replacer);
    htmlReference.textContent = edited;
}

