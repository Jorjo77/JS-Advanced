function addItem() {
    let ulElement = document.getElementById('items');
    let inputText = document.getElementById('newItemText').value;

    let newElement = document.createElement('li');
    newElement.textContent = inputText;
    ulElement.appendChild(newElement);
    document.getElementById('newItemText').value = '';
}