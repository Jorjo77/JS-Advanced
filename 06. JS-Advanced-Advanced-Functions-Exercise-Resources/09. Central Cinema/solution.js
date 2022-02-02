function solve() {
    //1. Select the input elements. 
    let inputFells = Array.from(document.querySelectorAll('#container input'));

    //2. Add event lisener on button OnScreen.
    let onScreenButton = document.querySelector('#container button');
    onScreenButton.addEventListener('click', addMovie);

    // 4. add event lisener to the Clear button. 
    let clearButton = document.querySelector('#archive button');
    clearButton.addEventListener('click', clearArhive)


    function addMovie(e) {
        e.preventDefault();
        let name = inputFells[0].value;
        let hall = inputFells[1].value;
        let ticketPrice = Number(inputFells[2].value).toFixed(2);

        //2a. Check if inputs are filled and ticket price is Number fixed to the second digit.
        if (name.trim() !== '' &&
            hall.trim() !== '' &&
            ticketPrice.trim() !== '' &&
            !isNaN(Number(ticketPrice))) {

            //2b. Create new list item with its children and add it to the movies screen.
            let liElement = document.createElement('li');
            let filmNameElement = document.createElement('span');
            filmNameElement.textContent = name;
            let hallNameElement = document.createElement('strong');
            hallNameElement.textContent = `Hall: ${hall}`;
            let divElement = document.createElement('div');

            let ticketPriceElement = document.createElement('strong');
            ticketPriceElement.textContent = ticketPrice;
            let ticketQuantityElement = document.createElement('input');
            // let placeholderName = 'Tickets Sold';
            // ticketQuantityElement.setAttribute('placeholder', placeholderName);
            ticketQuantityElement.setAttribute('placeholder', 'Tickets Sold');
            let archiveButton = document.createElement('button');
            archiveButton.textContent = 'Archive';


            divElement.appendChild(ticketPriceElement);
            divElement.appendChild(ticketQuantityElement);
            divElement.appendChild(archiveButton);
            liElement.appendChild(filmNameElement);
            liElement.appendChild(hallNameElement);
            liElement.appendChild(divElement);

            let moviesSection = document.querySelector('#movies ul');
            moviesSection.appendChild(liElement);

            //2c. Clear the inputs. 
            inputFells.forEach(element => {
                element.value = '';
            });


            //3. add event listener to the Archive button.
            archiveButton.addEventListener('click', arhivate);

        }

    }

    function arhivate(e) {

        let target = e.target;
        let liTarget = target.parentElement.parentElement;

        let quantityElement = liTarget.querySelector('div input');
        let quantity = quantityElement.value;
        let ticketPriceElement = liTarget.querySelector('div strong');
        let ticketPrice = ticketPriceElement.textContent;
        //     3a. If input for tickets count is filled add item to Archive section like li in ul, calculating total profit of the movie fixed to the second digit
        if (quantity.trim() !== '' &&
            !isNaN(Number(quantity))) {

            quantity = Number(quantity);
            ticketPrice = Number(ticketPrice);
            let totalProfit = quantity * ticketPrice;

            let arhiveSection = document.querySelector('#archive ul');


            let targetName = liTarget.querySelector('span').textContent;

            let totalAmountElement = document.createElement('strong');
            totalAmountElement.textContent = `Total amount: ${totalProfit.toFixed(2)}`;

            //  3b.add the delete button and add it event lisener.
            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', deletingElement);

            let modifiedliElement = document.createElement('li');
            let modifiedSpanElement = document.createElement('span');
            modifiedSpanElement.textContent = targetName;

            modifiedliElement.appendChild(modifiedSpanElement);
            modifiedliElement.appendChild(totalAmountElement);
            modifiedliElement.appendChild(deleteButton);

            arhiveSection.appendChild(modifiedliElement);

            liTarget.remove();

        }
    }

    function deletingElement(e) {
        let currentElement = e.target;
        let movieLi = currentElement.parentElement;
        //3c.delete element(li) when button is clicked.
        movieLi.remove();
    }

    //4.a Delate all li elements from the archive section.
    function clearArhive(e) {
        let arhivedLies = Array.from(document.querySelectorAll('#archive ul li'));
        arhivedLies.forEach(el => el.remove());
    }

}

// function solve() {
//     //1 Select elements
//     let onScreenButton = document.querySelector('#container button');
//     //2a attach event listener on [On-Screen] button
//     onScreenButton.addEventListener('click', onScreenHandler);
//     let clearArchiveButton = document.querySelector('#archive > button');
//     //5a add clear button event listener
//     clearArchiveButton.addEventListener('click', clearArchive);

//     //2. Implement Add movie functionality
//     function onScreenHandler(e) {
//         e.preventDefault();
//         //2b Get input values for movie
//         let movieInputs = document.querySelectorAll('#container input');
//         let nameInput = movieInputs[0];
//         let hallInput = movieInputs[1];
//         let priceInput = movieInputs[2];

//         //2c convert values where needed
//         let name = nameInput.value;
//         let hall = hallInput.value;
//         let price = priceInput.value

//         // check inputs
//         if (name.trim() !== '' &&
//             hall.trim() !== '' &&
//             price.trim() !== '' &&
//             !isNaN(Number(price))) {

//             price = Number(price).toFixed(2);
//             //2d create html structure for movie
//             let li = document.createElement('li');

//             let nameSpan = document.createElement('span');
//             nameSpan.textContent = name;

//             let hallStrong = document.createElement('strong');
//             hallStrong.textContent = `Hall: ${hall}`;

//             let rightSectionDiv = document.createElement('div');
//             let priceStrong = document.createElement('strong');
//             priceStrong.textContent = price;

//             let ticketsSoldInput = document.createElement('input');
//             ticketsSoldInput.setAttribute('placeholder', 'Tickets Sold');

//             let archiveButton = document.createElement('button');
//             archiveButton.textContent = 'Archive';
//             //3a Attach event listener each movie's archive button
//             archiveButton.addEventListener('click', archiveMovie);

//             rightSectionDiv.appendChild(priceStrong);
//             rightSectionDiv.appendChild(ticketsSoldInput);
//             rightSectionDiv.appendChild(archiveButton);

//             li.appendChild(nameSpan);
//             li.appendChild(hallStrong);
//             li.appendChild(rightSectionDiv);

//             //2e attach Html structure to movies on screen section
//             let moviesUl = document.querySelector('#movies ul');
//             moviesUl.appendChild(li);

//             nameInput.value = '';
//             hallInput.value = '';
//             priceInput.value = '';
//         }
//     }

//     //3. Implement Archive movie functionality
//     function archiveMovie(e) {
//         //3b Get input values for current movie to archive
//         let movieLi = e.target.parentElement.parentElement;
//         let ticketsSoldInput = movieLi.querySelector('div input');
//         let ticketsSold = ticketsSoldInput.value;

//         if (ticketsSold.trim() !== '' &&
//             !isNaN(Number(ticketsSold))) {
//             //3c convert values where needed
//             ticketsSold = Number(ticketsSold);
//             let priceStrong = movieLi.querySelector('div strong');
//             let price = Number(priceStrong.textContent);

//             //3d create html structure for archived movie
//             let hallStrong = movieLi.querySelector('strong');
//             let totalPrice = price * ticketsSold;
//             hallStrong.textContent = `Total amount: ${totalPrice.toFixed(2)}`;

//             let rightDiv = movieLi.querySelector('div');
//             rightDiv.remove();

//             let deleteButton = document.createElement('button');
//             deleteButton.textContent = 'Delete';
//             //4a Attach event listener each movie's delete button
//             deleteButton.addEventListener('click', deleteFromArchive);
//             movieLi.appendChild(deleteButton);

//             //3e attach Html structure to movies archive section
//             let archiveUl = document.querySelector('#archive ul');
//             archiveUl.appendChild(movieLi);
//         }
//     }

//     //4. Implement archived movie's delete functionality
//     function deleteFromArchive(e) {
//         let currentElement = e.target;
//         let movieLi = currentElement.parentElement;
//         //4b delete Html structure of a deleted movies from dom
//         movieLi.remove();
//     }

//     //5 implement archive clear button functionality
//     function clearArchive() {
//         //5a delete archive's LI elements from DOM
//         let archiveLis = Array.from(document.querySelectorAll('#archive ul li'));
//         archiveLis.forEach(el => el.remove());
//     }
// }