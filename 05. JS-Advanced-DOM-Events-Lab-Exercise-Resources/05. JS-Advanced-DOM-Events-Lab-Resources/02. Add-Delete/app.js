function addItem() {
    //create<li>
    const input = document.getElementById('newItemText');
    const liElement = createElement('li', input.value);

    // add delate button - често срещан е този подход в практиката
    const deleteBtn = createElement('a', '[Delate]');
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', (e) =>{
        e.target.parentNode.remove();
    });
    liElement.appendChild(deleteBtn);

    //add new <li> to document
    document.getElementById('items').appendChild(liElement);
    input.value = '';

    function createElement(type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}
// }
// function addItem() {
//     let newItemTextElement = document.getElementById('newItemText');
//     let itemsElement = document.getElementById('items');
//     let textOfElement = newItemTextElement.value;
//     let newElement = e('li', textOfElement);
//     let deleteButon = e('a', '[Delete]');
//     deleteButon.setAttribute('href', '#')
//     newElement.appendChild(deleteButon);
//     itemsElement.appendChild(newElement);
//     newItemTextElement.value = '';

//     itemsElement.addEventListener('click', (e) => {
//         if (e.target.nodeName == 'A') {
//             e.target.parentElement.remove()
//         }
//     });

//     function e(type, content) {
//         let element = document.createElement(type);

//         if (typeof content === 'string') {
//             element.textContent = content;
//         } else {
//             element.appendChild(content);
//         }
//         return element;
//     }
// }