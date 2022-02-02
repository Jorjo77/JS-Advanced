function extractText() {
    let text = document.querySelectorAll('ul#items li');
    let textArea = document.querySelector('#result');
    for (const row of text) {
        textArea.value +=row.textContent + '\n';
    }
}
