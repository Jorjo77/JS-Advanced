window.addEventListener('load', solve);

function solve() {
    const genreInputElement = document.querySelector('#append-song .container-text input[name="genre"]');
    const nameInputElement = document.querySelector('#append-song .container-text input[name="name"]');
    const authorInputElement = document.querySelector('#append-song .container-text input[name="author"]');
    const dateInputElement = document.querySelector('#append-song .container-text input[name="date"]');

    const addButton = document.getElementById('add-btn');
    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        const genere = genreInputElement.value;
        const songName = nameInputElement.value;
        const author = authorInputElement.value;
        const date = dateInputElement.value;

        if (!genere || !songName || !author || !date) {
            return;
        }

        const divContainerElement = document.querySelector('#all-hits .all-hits-container');
        const currSong = createSong(genere, songName, author, date);
        divContainerElement.appendChild(currSong);

        genreInputElement.value = ''; 
        nameInputElement.value = ''; 
        authorInputElement.value = ''; 
        dateInputElement.value = ''; 
    })

    function createSong(genere, name, author, date) {

        const resultDiv = document.createElement('div');
        resultDiv.classList.add('hits-info');

        const image = document.createElement('img');
        image.src = "./static/img/img.png";

        const genereHading = document.createElement('h2');
        genereHading.textContent = `Genre: ${genere}`;

        const nameHading = document.createElement('h2');
        nameHading.textContent = `Name: ${name}`;

        const authorHading = document.createElement('h2');
        authorHading.textContent = `Author: ${author}`;

        const dateHading = document.createElement('h3');
        dateHading.textContent = `Date: ${date}`;

        const saveButton = document.createElement('button');
        saveButton.classList.add('save-btn');
        saveButton.addEventListener('click', saveHandler);
        saveButton.textContent = 'Save song';

        const likeButton = document.createElement('button');
        likeButton.classList.add('like-btn');
        likeButton.addEventListener('click', likeHandler);
        likeButton.textContent = 'Like song';

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', deleteHandler);
        deleteButton.textContent = 'Delete';

        resultDiv.appendChild(image);
        resultDiv.appendChild(genereHading);
        resultDiv.appendChild(nameHading);
        resultDiv.appendChild(authorHading);
        resultDiv.appendChild(dateHading);
        resultDiv.appendChild(saveButton);
        resultDiv.appendChild(likeButton);
        resultDiv.appendChild(deleteButton);

        return resultDiv;
    }

    function likeHandler(e) {

        let totalLikes = 0;
        totalLikes+=1;
        const totalLikesParagraph = document.querySelector('#total-likes p')
        const totalLikesString = `Total Likes: ${totalLikes}`;

        totalLikesParagraph.textContent = totalLikesString;
        e.target.disabled = true;
    }
    function saveHandler(e) {

        const saveContainerDiv = document.querySelector('#saved-hits .saved-container');

        const containerDiv = e.target.parentElement;
        const genere = containerDiv.querySelector(':nth-child(2)').textContent;
        const songName = containerDiv.querySelector(':nth-child(3)').textContent;
        const author = containerDiv.querySelector(':nth-child(4)').textContent;
        const date = containerDiv.querySelector(':nth-child(5)').textContent;

        const imageElement = ce('img', {src:'./static/img/img.png'})
        const genreHedingElement = ce('h2', undefined, genere);
        const nameHedingElement = ce('h2', undefined, songName);
        const authorHedingElement = ce('h2', undefined, author);
        const dateHedingElement = ce('h3', undefined, date);
        const deleteButton = ce('button', {class: 'delete-btn'}, 'Delete');
        deleteButton.addEventListener('click', deleteHandler);
        const saveDivElement = ce('div', {class:'hits-info'},
        imageElement,
        genreHedingElement,
        nameHedingElement,
        authorHedingElement,
        dateHedingElement,
        deleteButton);

        saveContainerDiv.appendChild(saveDivElement);
        const divesContainer = e.target.parentElement;
        divesContainer.remove();

    }    
    
    function deleteHandler(e) {
        const divElement = e.target.parentElement;
        divElement.remove();
    }

    function ce(tag, attributes, ...params){
        let element = document.createElement(tag);
        let firstValue = params[0];
        if(params.length === 1 && typeof(firstValue) !== 'object'){
            if(['input', 'textarea'].includes(tag)) {
                element.value = firstValue;
            } else {
                element.textContent = firstValue;
            }
        } else {
        params.forEach(el => {//така за Джъдж
        element.appendChild(el);
        });
            //element.append(...params); //така е по принцип !!!
        }
    
        if(attributes !== undefined){
            Object.keys(attributes).forEach(key => {
                element.setAttribute(key, attributes[key]);
            })
        }
    
        return element;
    }
    
}