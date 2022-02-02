//За да видя всяко демо как работи закоментирам останалото и си гледам само разкоментираното!
// Add hero to list
function addHero() {
    let heroNameInputElement = document.getElementById('hero-name');
    let heroListElement = document.getElementById('hero-list');

    // Adding hero dangerously, avoid using!
    // heroListElement.innerHTML += `<li>${heroNameElement.value}</li>`

    // Add hero correctly by creating elelment
    let newHeroItemElement = document.createElement('li');
    newHeroItemElement.textContent = heroNameInputElement.value;
    heroListElement.appendChild(newHeroItemElement);// Goes as last child

    // Add hero by clone element (also correct)
    let firstListItemElement = heroListElement.children[0];
    let newClonedItemElement = firstListItemElement.cloneNode();
    newClonedItemElement.textContent = heroNameInputElement.value;
    heroListElement.prepend(newClonedItemElement); // Goes as first child

    // Clear input
    heroNameInputElement.value = '';
}

// Delete last hero
function deleteHero() {
    let heroListElement = document.querySelector('#hero-list');
    let heroListChildrenElements = heroListElement.children
    let lastHeroElement = heroListChildrenElements[heroListChildrenElements.length - 1];

    // heroListElement.removeChild(lastHeroElement); // Delete from parent
    lastHeroElement.remove();
}

// With HTML Attributes event   - от това демо става ясно кое е таргет и кое кърънт таргет!
function heroesMouseOverHandler(e) {
    console.log(e.target.textContent);
    console.log(e.currentTarget);
    console.log(e.target);
}

// Using DOM element properties
let heroNameElement = document.getElementById('hero-name');
heroNameElement.onfocus = function(e) {
    console.log(e);
    console.log('Start typing a hero!!!');
}
heroNameElement.onblur = (e) => console.log('Stopped typing a hero!!');

// Using DOM event handler – preferred method
function heroNameInputHandler(event) {
    // console.log(heroNameElement.value);
    console.log(event.currentTarget.value);
}

heroNameElement.addEventListener('input', heroNameInputHandler);

// click on hero. Not the best way!
let heroListItemElements = document.querySelectorAll('#hero-list li');
for (const heroElement of heroListItemElements) {
    heroElement.addEventListener('click', (e) => {
        console.log(`You clicked on hero from LI: ${e.target.textContent}`);
    });
}

// Click on hero. The best way :)
let heroListEment = document.getElementById('hero-list');

heroListEment.addEventListener('click', (e) => {
    if (e.target.tagName != 'LI') {
        return;
    } 

    console.log(`You clicked on hero from UL: ${e.target.textContent}`);
}, true);


//My demo
let liElement = document.querySelector('li');
let ulElement  = document.querySelector('ul');
ulElement.removeChild(liElement);

const secondElement = document.querySelector('li');
secondElement.remove();

//А тези двете работят еднакво:
//deleteButton.setAttribute('href', '#')// но на Иво така му се струва по-ясно (експлишитно)
//deleteButton.href = '#';