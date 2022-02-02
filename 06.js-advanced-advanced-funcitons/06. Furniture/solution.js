function solve() {
  const [input, output] = [...document.querySelectorAll('textarea')];
  const table = document.querySelector('.table tbody');
  const [generateBtn, buyBtn] = [...document.querySelectorAll('button')];//тук деструкторирането е вместо Array.from

  const furniture = [];

  generateBtn.addEventListener('click', () => {
    const furnitureArray = JSON.parse(input.value.trim());
    table.innerHTML = '';
    furnitureArray.forEach(f => {
      const item = createRow(f);
      furniture.push(item);
      table.appendChild(item.element);
    });

    buyBtn.addEventListener('click', () => {
      furniture.forEach(f => console.log(f.getValues().name,f.isChecked()));
    });

    //partialy apllied function - за да си спестим повтарящия се първи параметър на е функцията - това е често срещнато приложение
    const td = e.bind(null, 'td');//null защото не ползваме this, 'td' е първия вече фиксиран параметър

    function createRow(data) {
      const img = e('img');
      img.src = data.img;

      const check = e('input');
      check.type = 'checkbox';

      const element = e('tr',
        td(img),
        td(e('p', data.name)),
        td(e('p', data.price)),
        td(e('p', data.decFactor)),
        td(check)
      );

      return {
        element,
        isChecked,
        getValues
      }

      function isChecked() {
        return check.checked;
      }

      function getValues() {
        return data;
      }
    }

    function e(type, ...content) {
      const result = document.createElement(type);


      content.forEach(e => {
        if (typeof e === 'string') {
          const node = document.createTextNode(e);
          result.appendChild(node);
        } else {
          result.appendChild(e);
        }
      });

      return result;
    }



    // //1.Select DOM elements
    // let textAreas = document.querySelectorAll('#exercise textarea');
    // let inputArea = textAreas[0];
    // let outputArea = textAreas[1];

    // let buttons = document.querySelectorAll('#exercise button');
    // let generateButton = buttons[0];
    // let buyButton = buttons[1];

    // let tableBody = document.querySelector('.table tbody');

    // //2. Add generate button event listener
    // generateButton.addEventListener('click', addNewRow);

    // function addNewRow(e) {
    //   //2a. Get generate text area value and JSON.parse
    //   let items = JSON.parse(inputArea.value);

    //   items.forEach(el => {
    //     //2b. Construct DOM elements representing table row to add to Dom table
    //     let createdTr = document.createElement('tr');

    //     let imageTd = document.createElement('td');
    //     let image = document.createElement('img');
    //     image.src = el.img;
    //     imageTd.appendChild(image);

    //     let nameTd = document.createElement('td');
    //     let nameElement = document.createElement('p');
    //     nameElement.textContent = el.name;
    //     nameTd.appendChild(nameElement);

    //     let priceTd = document.createElement('td');
    //     let priceElement = document.createElement('p');
    //     priceElement.textContent = el.price;
    //     priceTd.appendChild(priceElement);

    //     let decorationFactorTd = document.createElement('td');
    //     let decorationFactorElement = document.createElement('p');
    //     decorationFactorElement.textContent = el.decFactor;
    //     decorationFactorTd.appendChild(decorationFactorElement);

    //     let checkboxTd = document.createElement('td');
    //     let checkboxElement = document.createElement('input');
    //     checkboxElement.type = 'checkbox';
    //     checkboxTd.appendChild(checkboxElement);

    //     createdTr.appendChild(imageTd);
    //     createdTr.appendChild(nameTd);
    //     createdTr.appendChild(priceTd);
    //     createdTr.appendChild(decorationFactorTd);
    //     createdTr.appendChild(checkboxTd);
    //     tableBody.appendChild(createdTr);

    //   });
    // }
    // //3. Add buy element listener
    // buyButton.addEventListener('click', calculateBoughtFurniture);
    // function calculateBoughtFurniture() {
    //   //3a. Get all rows that are selected from table
    //   let tableRows = Array.from(document.querySelectorAll('.table tbody tr'));
    //   let selectedRows = tableRows.filter(rows => rows.querySelectorAll('input:checked').length > 0);
    //   //4. Calculate bought item name, total price and average decoration factor 
    //   let selectedNames = selectedRows.map(row => row.querySelector('td:nth-of-type(2) p'))
    //     .map(x => x.textContent)
    //     .join(', ');

    //   let prices = selectedRows.map(row => row.querySelector('td:nth-of-type(3) p'))
    //     .map(cell => Number(cell.textContent));

    //   let decFactors = selectedRows.map(row => row.querySelector('td:nth-of-type(4) p'))
    //     .map(cell => Number(cell.textContent));

    //   let totalPrice = prices.reduce((acc, curr) => acc + curr, 0).toFixed(2);
    //   let averageDecFactor = decFactors.reduce((acc, curr) => acc + curr, 0) / decFactors.length;

    //   let furnitureText = `Bought furniture: ${selectedNames}`;
    //   let priceText = `Total price:  ${totalPrice}`;
    //   let averageText = `Average decoration factor: ${averageDecFactor}`;

    //   outputArea.textContent = `${furnitureText}'\n'${priceText}'\n'${averageText}`;   
    // }
  });
}