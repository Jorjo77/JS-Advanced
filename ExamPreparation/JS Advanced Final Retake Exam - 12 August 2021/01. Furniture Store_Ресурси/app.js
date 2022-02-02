window.addEventListener('load', solve);

function solve() {
    let modelInputElement = document.getElementById('model');
    let yearInputElement = document.getElementById('year');
    let descriptionInputElement = document.getElementById('description');
    let priceInputElement = document.getElementById('price');

    let totalPrice = 0;

    let addButton = document.getElementById('add');
    addButton.addEventListener('click', (e) => {

        e.preventDefault();

        if (modelInputElement.value !== ''
            && modelInputElement.value !== undefined
            && descriptionInputElement.value !== ''
            && descriptionInputElement.value !== undefined
            && yearInputElement.value > 0
            && priceInputElement.value > 0) {

            let furnitureList = document.getElementById('furniture-list');
            let tableRowElement = document.createElement('tr');
            tableRowElement.classList.add('info');
            let tableTDElement = document.createElement('td');

            tableTDElement.textContent = modelInputElement.value;
            let tableTD2Element = document.createElement('td');

            let actualValue = Number(priceInputElement.value);
            let finalValue = actualValue.toFixed(2);

            tableTD2Element.textContent = finalValue;

            let tableTD3Element = document.createElement('td');

            let moreInfoButton = document.createElement('button');
            moreInfoButton.classList.add('moreBtn');
            moreInfoButton.textContent = 'More Info';
            moreInfoButton.addEventListener('click', moreInfoHendler);

            let buyButton = document.createElement('button');
            buyButton.classList.add('buyBtn');
            buyButton.textContent = 'Buy it';
            buyButton.addEventListener('click', buyHendler);

            tableTD3Element.appendChild(moreInfoButton);
            tableTD3Element.appendChild(buyButton);

            let tRHiddenElement = document.createElement('tr');
            tRHiddenElement.classList.add('hide');

            let tdYearElement = document.createElement('td');
            tdYearElement.textContent = `Year: ${yearInputElement.value}`;

            let tdDescriptionElement = document.createElement('td');
            tdDescriptionElement.setAttribute('colspan', '3');
            tdDescriptionElement.textContent = `Description: ${descriptionInputElement.value}`;

            tRHiddenElement.appendChild(tdYearElement);
            tRHiddenElement.appendChild(tdDescriptionElement);

            tableRowElement.appendChild(tableTDElement);
            tableRowElement.appendChild(tableTD2Element);
            tableRowElement.appendChild(tableTD3Element);

            furnitureList.appendChild(tableRowElement);
            furnitureList.appendChild(tRHiddenElement);

            modelInputElement.value = '';
            yearInputElement.value = '';
            descriptionInputElement.value = '';
            priceInputElement.value = '';

            function moreInfoHendler(e) {

                if (moreInfoButton.textContent === 'More Info') {
                    moreInfoButton.textContent = 'Less Info';
                    tRHiddenElement.style.display = 'contents';

                } else {
                    moreInfoButton.textContent = 'More Info';
                    tRHiddenElement.style.display = 'none';
                }

            }

            function buyHendler(e) {
                let tdTotalPriceElement = document.querySelector('.total-price');

                totalPrice += actualValue;
                tdTotalPriceElement.textContent = '';
                tdTotalPriceElement.textContent = totalPrice.toFixed(2);
                e.target.parentElement.parentElement.remove();
            }

        }

    });
}

// window.addEventListener('load', solve);

// function solve() {
//     let tbody = document.querySelector('#furniture-list');
//     let model = document.querySelector('#model');
//     let year = document.querySelector('#year');
//     let description = document.querySelector('#description');
//     let price = document.querySelector('#price');
//     let total = document.querySelector('.total-price');
//     let addButton = document.querySelector('#add');

//     addButton.addEventListener('click', (e) => {
//         e.preventDefault();

//         if (typeof (model.value) !== String && (model.value).length < 1) {
//             return
//         }

//         if (model.value == '' || year.value == '' || description.value == '' || price.value == '') {
//             return;
//         }

//         if (year.value < 0 || price.value < 0) {
//             return;
//         }

//         let actualPrice = Number(price.value);
//         let finalPrice = actualPrice.toFixed(2)

//         // price toFixed(2)
//         let tRow = document.createElement('tr');
//         tRow.classList.add('info');

//         let modelTd = document.createElement('td');
//         modelTd.textContent = model.value;

//         let priceTd = document.createElement('td');
//         priceTd.textContent = finalPrice;

//         let infoTd = document.createElement('td');

//         let infoBtn = document.createElement('button');
//         infoBtn.classList.add('moreBtn');
//         infoBtn.textContent = 'More Info';
//         infoBtn.addEventListener('click', infoHandler);

//         let buyBtn = document.createElement('button');
//         buyBtn.classList.add('buyBtn');
//         buyBtn.textContent = 'Buy it';
//         buyBtn.addEventListener('click', buyHandler);

//         let hiddenTr = document.createElement('tr');
//         hiddenTr.classList.add('hide');

//         let yearTd = document.createElement('td');
//         yearTd.textContent = `Year: ${year.value}`;

//         let descTd = document.createElement('td');
//         descTd.setAttribute('colspan', '3');
//         descTd.textContent = `Description: ${description.value}`;

//         tRow.appendChild(modelTd);
//         tRow.appendChild(priceTd);
//         infoTd.appendChild(infoBtn);
//         infoTd.appendChild(buyBtn);
//         tRow.appendChild(infoTd);

//         hiddenTr.appendChild(yearTd);
//         hiddenTr.appendChild(descTd);

//         tbody.appendChild(tRow);
//         tbody.appendChild(hiddenTr);

//         model.value = '';
//         price.value = '';
//         year.value = '';
//         description.value = '';        
//     })

//     function infoHandler(e) {
//         let infoTRow = e.target.parentNode.parentNode.nextSibling;
//         if (e.target.textContent == 'More Info') {
//             e.target.textContent = 'Less Info';
//             infoTRow.style.display = 'contents';
//         } else if (e.target.textContent == 'Less Info') {
//             e.target.textContent = 'More Info';
//             infoTRow.style.display = 'none';
//         }
//     }

//     function buyHandler(e) {
//         let furniPrice = e.target.parentNode.previousSibling.textContent;
//         let selectedFurniture = e.target.parentNode.parentNode;
//         let currentTotal = Number(total.textContent);
//         total.textContent = (currentTotal + Number(furniPrice)).toFixed(2);
//         selectedFurniture.remove();
//     }
// }
