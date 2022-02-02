function search() {
   // 1. Select elements
   // 2. Parse elements
   let allElements = Array.from(document.querySelectorAll('#towns li'));
   let surchedText = document.getElementById('searchText').value;
   let divResult = document.getElementById('result');

   // 2. Main logic:
   //a. Clean elements from old selection
   allElements.forEach(x => {
      x.style.fontWeight = 'normal';
      x.style.textDecoration ='normal'; 
});

   //b. Filter elements according input
   //c. Change filtered elements according specification
   let surchedtowns = allElements.filter(x => x.textContent.includes(surchedText))
   .map(x => {
      x.style.fontWeight = 'bold';
      x.style.textDecoration ='underline';
   });

   //d. Set mathes number on DivResult
   divResult.textContent = `${surchedtowns.length} matches found`;
}
