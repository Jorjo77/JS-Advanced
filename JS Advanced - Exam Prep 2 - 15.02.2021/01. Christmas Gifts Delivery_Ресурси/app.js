function solution() {
    let inputElement = document.querySelector('.container input[placeholder="Gift name"]');
    let addButton = document.querySelector('.container button');
    addButton.addEventListener('click', addGiftFunc);

    let listOfGiftsArr = [];
    let sortedlistOfGifts = [];

    function addGiftFunc(e) {
        let listOfGiftsElement = document.querySelector('.container .card ul');

        listOfGiftsArr.push(inputElement.value);
        sortedlistOfGifts = listOfGiftsArr.sort((a,b) => a.localeCompare(b));
        listOfGiftsElement.innerHTML = '';

        sortedlistOfGifts.forEach(x => {
            let liElement = document.createElement('li');
            liElement.classList.add('gift');
            liElement.textContent = x;

            let sendButton = document.createElement('button');
            sendButton.setAttribute('id', 'sendButton');
            sendButton.textContent = 'Send';
            sendButton.addEventListener('click', sentGiftFunc);


            let discardButton = document.createElement('button');
            discardButton.setAttribute('id', 'discardButton');
            discardButton.textContent = 'Discard';
            discardButton.addEventListener('click', discardGiftFunc);

            liElement.appendChild(sendButton);
            liElement.appendChild(discardButton);

            function sentGiftFunc(e) {

                listOfSentGifts = document.querySelector('.container :nth-child(3) ul');
                let liElement = document.createElement('li');

                sendButton.style.display = 'none';
                sendButton.textContent = '';
                discardButton.style.display = 'none';
                discardButton.textContent = '';
                liElement.textContent = e.target.parentElement.textContent;

                listOfSentGifts.appendChild(liElement);
                e.target.parentElement.remove();

                deleteElementFromSortedArray(); 

            }

            function discardGiftFunc(e) {
                
                listOfDiscartGifts = document.querySelector('.container :nth-child(4) ul');

                let liElement = document.createElement('li');

                sendButton.style.display = 'none';
                sendButton.textContent = '';
                discardButton.style.display = 'none';
                discardButton.textContent = '';
                liElement.textContent = e.target.parentElement.textContent;

                listOfDiscartGifts.appendChild(liElement);
                e.target.parentElement.remove();

                deleteElementFromSortedArray(); 
                
            }

            function deleteElementFromSortedArray() {

                let surchedElement = sortedlistOfGifts.find(x=>x === liElement.textContent);
                let indexOfSurchedElement = sortedlistOfGifts.indexOf(surchedElement);
                sortedlistOfGifts.splice(indexOfSurchedElement, 1);
            }

            listOfGiftsElement.appendChild(liElement);

            inputElement.value = '';
        })
    }

}