function solve() {

  //1.Select DOM elements
  let textAreas = document.querySelectorAll('#exercise textarea');
  let inputArea = textAreas[0];
  let outputArea = textAreas[1];

  let buttons = document.querySelectorAll('#exercise button');
  let generateButton = buttons[0];
  let buyButton = buttons[1];

  let tableBody = document.querySelector('.table tbody');

  //2. Add generate button event listener
  generateButton.addEventListener('click', addNewRow);

  function addNewRow(e) {
    //2a. Get generate text area value and JSON.parse
    let items = JSON.parse(inputArea.value);

    items.forEach(el => {
      //2b. Construct DOM elements representing table row to add to Dom table
      let createdTr = document.createElement('tr');

      let imageTd = document.createElement('td');
      let image = document.createElement('img');
      image.src = el.img;
      imageTd.appendChild(image);

      let nameTd = document.createElement('td');
      let nameElement = document.createElement('p');
      nameElement.textContent = el.name;
      nameTd.appendChild(nameElement);

      let priceTd = document.createElement('td');
      let priceElement = document.createElement('p');
      priceElement.textContent = el.price;
      priceTd.appendChild(priceElement);

      let decorationFactorTd = document.createElement('td');
      let decorationFactorElement = document.createElement('p');
      decorationFactorElement.textContent = el.decFactor;
      decorationFactorTd.appendChild(decorationFactorElement);

      let checkboxTd = document.createElement('td');
      let checkboxElement = document.createElement('input');
      checkboxElement.type = 'checkbox';
      checkboxTd.appendChild(checkboxElement);

      createdTr.appendChild(imageTd);
      createdTr.appendChild(nameTd);
      createdTr.appendChild(priceTd);
      createdTr.appendChild(decorationFactorTd);
      createdTr.appendChild(checkboxTd);
      tableBody.appendChild(createdTr);

    });
  }
  //3. Add buy element listener
  buyButton.addEventListener('click', calculateBoughtFurniture);
  function calculateBoughtFurniture() {
    //3a. Get all rows that are selected from table
    let tableRows = Array.from(document.querySelectorAll('.table tbody tr'));
    let selectedRows = tableRows.filter(rows => rows.querySelectorAll('input:checked').length > 0);
    //4. Calculate bought item name, total price and average decoration factor 
    let selectedNames = selectedRows.map(row => row.querySelector('td:nth-of-type(2) p'))
      .map(x => x.textContent)
      .join(', ');

    let prices = selectedRows.map(row => row.querySelector('td:nth-of-type(3) p'))
      .map(cell => Number(cell.textContent));

    let decFactors = selectedRows.map(row => row.querySelector('td:nth-of-type(4) p'))
      .map(cell => Number(cell.textContent));

    let totalPrice = prices.reduce((acc, curr) => acc + curr, 0).toFixed(2);
    let averageDecFactor = decFactors.reduce((acc, curr) => acc + curr, 0) / decFactors.length;

    let furnitureText = `Bought furniture: ${selectedNames}`;
    let priceText = `Total price:  ${totalPrice}`;
    let averageText = `Average decoration factor: ${averageDecFactor}`;

    outputArea.textContent = `${furnitureText}'\n'${priceText}'\n'${averageText}`;   
  }
}
