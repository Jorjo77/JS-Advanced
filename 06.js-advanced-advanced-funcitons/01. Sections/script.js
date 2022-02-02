function create(words) {
   // let divContent = document.getElementById('content');
   // for (let index = 0; index < words.length; index++) {
   //    let div = document.createElement('div');
   //    let p = document.createElement('p');
   //    p.textContent = words[index];
   //    p.style.display = 'none';
   //    div.appendChild(p);
   //    divContent.appendChild(div);
   // }

   // divContent.addEventListener('click', showElement);

   // function showElement(e) {
   //    if (e.target.matches('#content div')) {
   //       let p = e.target.children[0];
   //       p.style.display = 'block';
   //    }
   //    //console.log(e.target.matches('#content div'));
   // }

   const output = document.getElementById('content');
   words.forEach(w => output.appendChild(createArticle(w)));

   function createArticle(text) {
      const pEl = e('p', text);
      pEl.style.display = 'none';
   
      const divEl = e('div', pEl);
      divEl.addEventListener('click', ()=> {
         pEl.style.display = '';
      });

      return divEl;
   }


   document.getElementById('content').appendChild(divEl);

   function e(type, content) {
      const result = document.createElement(type);

      if (typeof content === 'string') {
         result.textContent = content;  
      } else {
         result.appendChild(content);
      }

      return result;
   }
}
