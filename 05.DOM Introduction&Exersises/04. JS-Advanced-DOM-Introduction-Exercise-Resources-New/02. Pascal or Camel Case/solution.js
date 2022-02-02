function solve() {
  let text = document.getElementById('text').value;
  let requirement = document.getElementById('naming-convention').value;

  let result = applyingRequirement(text, requirement);

  let resultDiv = document.getElementById('result');
  resultDiv.textContent = result; 

  function applyingRequirement(text, requirement){
    const convertionSwitch = {
      'Pascal Case' : () => text
      .toLowerCase()
      .split(' ')
      .map(x=>x[0].toUpperCase()+x.slice(1))
      .join(''),
      'Camel Case' : () => text
      .toLowerCase()
      .split(' ')
      .map((x, i) => x = i!==0 ? x[0].toUpperCase() + x.slice(1) : x)
      .join(''), 
      default: () => 'Error!'
    };

    return (convertionSwitch[requirement]||convertionSwitch.default)();

  }


  //Не се сещам защо моето не работи (60/100)!??
  // let result = '';

  // if (requirement == 'Camel Case') {
  //   let splittedText = text.split(' ');
  //   for (let index = 0; index < splittedText.length; index++) {
  //     let currWord = splittedText[index].toLowerCase();
  //     if (index ===0 ) {
  //       result += currWord;
  //     }
  //     else {
  //       let correctedWord = splittedText[index];
  //       correctedWord = correctedWord.charAt(0).toUpperCase() + correctedWord.slice(1);
  //       result += correctedWord;
  //     }
  //   }
  //   return document.getElementById('result').textContent = result;

  // }
  // if (requirement == 'Pascal Case') {
  //   let splittedText = text.split(' ');
  //   for (let index = 0; index < splittedText.length; index++) {
  //     let correctedWord = splittedText[index].toLowerCase();
  //     correctedWord = correctedWord[0].toUpperCase() + correctedWord.slice(1);
  //     result += correctedWord;
  //   }
  //   return document.getElementById('result').textContent = result;

  // } else {
  //   return document.getElementById('result').textContent = 'Error!';
  // }
}