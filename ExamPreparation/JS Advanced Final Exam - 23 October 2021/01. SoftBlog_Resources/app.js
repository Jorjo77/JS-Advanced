function solve() {
   const arhive = [];

   const creatorInputElement = document.getElementById('creator')
   const titleInputElement = document.getElementById('title');
   const categoryInputElement = document.getElementById('category');
   const contentInputElement = document.getElementById('content');

   const createButton = document.querySelector('.site-content button');
   createButton.addEventListener('click', createHandler);

   function createHandler(e) {
      e.preventDefault();
      const creatorInput = creatorInputElement.value;
      const titleInput = titleInputElement.value;
      const categoryInput = categoryInputElement.value;
      const contentInput = contentInputElement.value;

      const postsSection = document.querySelector('.site-content main section');
      const titleHeding = ce('h1', undefined, titleInput);

      const categoryStrong = ce('strong', undefined, categoryInput);
      const categoryP = ce('p', undefined, 'Category:', categoryStrong)
      categoryP.appendChild(categoryStrong);

      const creatorStrong = ce('strong', undefined, creatorInput);
      const creatorP = ce('p', undefined, 'Creator:')//да пробвам после тук да вложа creatorStrong - не става!!!
      creatorP.appendChild(creatorStrong);

      const contentP = ce('p', undefined, contentInput);

      const deleteButton = ce('button', { class: 'btn delete' }, 'Delete');
      deleteButton.addEventListener('click', deleteHandler);
      const archiveButton = ce('button', { class: 'btn archive' }, 'Archive');
      archiveButton.addEventListener('click', archiveHandler);
      const divDuttons = ce('div', { class: 'buttons' }, deleteButton, archiveButton);

      const article = ce('article', undefined, titleHeding,
         categoryP,
         creatorP,
         contentP,
         divDuttons);

      postsSection.appendChild(article);

      creatorInputElement.value = '';
      titleInputElement.value = '';
      categoryInputElement.value = '';
      contentInputElement.value = '';

   }

   function deleteHandler(e) {

      const currElement = e.target.parentElement.parentElement;
      currElement.remove();
   }

   function archiveHandler(e) {

      const arhiveSection = document.querySelector('.archive-section ol');

      arhiveSection.innerHTML = '';

      const article = e.target.parentElement.parentElement;
      const titleInput = article.querySelector(':nth-child(1)');
      arhive.push(titleInput.textContent);
      const sortedArhive = arhive.sort((a, b) => a.localeCompare(b));
      sortedArhive.forEach(el => {
         const liElement = ce('li', undefined);
         liElement.textContent = el;
         arhiveSection.appendChild(liElement);
      })

      const currElement = e.target.parentElement.parentElement;
      currElement.remove();
   }


   function ce(tag, attributes, ...params) {
      let element = document.createElement(tag);
      let firstValue = params[0];
      if (params.length === 1 && typeof (firstValue) !== 'object') {
         if (['input', 'textarea'].includes(tag)) {
            element.value = firstValue;
         } else {
            element.textContent = firstValue;
         }
      } else {
         params.forEach(el => {//така за Джъдж
            element.appendChild(el);
         });
         //element.append(...params); //така е по принцип !!!
      }

      if (attributes !== undefined) {
         Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
         })
      }

      return element;
   }

}

