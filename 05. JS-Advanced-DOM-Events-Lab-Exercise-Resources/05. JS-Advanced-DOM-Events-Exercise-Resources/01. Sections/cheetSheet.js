// Selecting DOM elements
let elem1 = document.getElementById('test');
document.querySelector('#test');
document.querySelectorAll('#test li');
 
// Get/Set content
elem1.value;
elem1.textContent;
 
// Traversing DOM
elem1.parentElement;//Разбира се html element
elem1.parentNode;//Има някои методи обаче, които може да ни върнат nodeElement, 
//което се явява абстракция отгоре (може да е html element, но може да е и други неща като textNode, които не са  html element). 
//Улеснението което Иво би ни казал е да избягваме Node версията на методите, а element версията.
//Практически в нашата работа не би трябвало да ни интересува работа с nodeElement!
elem1.children;
 
// Create element
let createdElem = document.createElement('p');
 
// Adding to DOM
elem1.appendChild(createdElem);
 
// Delete from DOM
createdElem.remove();
 
// Events
elem1.addEventListener('click', someFunc);
e.target
 
// maybe
e.preventDefault(); // Buttons in Forms have default behaviour(send the form when clicked, reloading the page), 
//which we may need to prevent - понякога желаем да предотвратим дефолтно поведение на елемент за да не загубим направени манипулации(Например: reloading the page)
elem1.removeEventListener('click', someFunc);
 
// HTML Attributes
elem1.setAttribute('name','myName');
 
// Styling <=> CSS
elem1.style.setProperty('font-weight','bold');

//С тази основа (да я научим наизуст(задължителен минимум), всичко останало е добре дошло - бонус) нямаме проблем да си вършим работата с ДОМ-а 
//(ако ни потрябва нещо допълнително винаги можем да си го намерим)


//функции за създаване и апендване на елементи когато се създават повече елементи е добре да се ползват:

function createElements(tagName, textContent, className, event) {
    let element = document.createElement(tagName);
    if (textContent) {
        element.textContent = textContent;
    }
    if (className) {
        element.classList.add(className);
    }
    if (event) {
        element.addEventListener(event.type, event.func);
    }
    return element;
}

function appendChildrenElements(parent, children) {
    children.map(child => parent.appendChild(child));
}
