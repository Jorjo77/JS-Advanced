function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      //  1.Select elements
      let inputFild = document.getElementById('searchField');
      let surchedText = inputFild.value;
      let dataRow = Array.from(document.querySelectorAll('tbody tr'));

      // 2. Main logic:
      //a. clean for previous matches
      dataRow.forEach(x => {
         x.className = '';
      });

      //b. Iterate and check rows - if match apply select class.
      let filteredRow = dataRow.filter(x=>{
         let values = Array.from(x.children);
         if (values.some(x=>x.textContent.includes(surchedText))) {
            x.className = 'select';
         }
      });

      //c. clear input fild
      inputFild.value = '';
   }
}