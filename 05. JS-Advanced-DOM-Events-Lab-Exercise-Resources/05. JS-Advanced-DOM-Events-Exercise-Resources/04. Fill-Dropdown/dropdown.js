function addItem() {
    //1.select input elements (fields)
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');
    let newElement = document.createElement('option');
    let parentElement = document.getElementById('menu');

    if (newItemText.value.length > 0 && newItemValue.value.length > 0) {
        //2. create option element and add it textContent and value from input fields
        newElement.textContent = newItemText.value;
        newElement.setAttribute('value', newItemValue.value);

        // add createdElement as child of the select element with ID'menu'
        parentElement.appendChild(newElement);

        //3. clear the value of the two input fields
        newItemText.value = '';
        newItemValue.value = '';
    }

}