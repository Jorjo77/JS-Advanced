function solve() {
  //1. Select elements 
  let inputElement = document.getElementById('input');
  let outputArea = document.getElementById('output');
  //2. Main logic
  //a. Split input text by "." 
  //b. Iterate over text and put up to 3 sentencies in paragraph into div
  // "output" - Use interpolation string to create paragraph element. 
  //(`<p> ${text} </p>`)

  let inputText = inputElement.value;
  let splittedText = inputText.split('.').filter(x => x !== '').map(x => x + '.');

  //- 40 % хваща моето решение!???
  // if (splittedText.length < 3) {
  //   outputArea.textContent = `<p> ${splittedText} </p>`;
  // } else {
  //   let newParagraph = []; 
  //   let counter = 0;
  //   while (splittedText.length > 0) {

  //     newParagraph+=splittedText.shift();
  //     counter++;
  //     if (counter ===3 ||splittedText.length===0) {
  //       outputArea.innerHTML += `<p> ${newParagraph} </p>`;
  //       newParagraph = [];
  //       counter = 0;
  //     }

  //   }

  // }
  // inputElement.value = '';
  let paragraphRoof = Math.ceil(splittedText.length / 3);

  for (let index = 0; index < paragraphRoof; index++) {
    outputArea.innerHTML += `<p> ${splittedText.splice(0, 3).join('')} </p>`;
  }
}