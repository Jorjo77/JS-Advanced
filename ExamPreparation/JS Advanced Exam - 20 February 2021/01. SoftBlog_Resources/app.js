function solve(){
   //1. Get elements from DOM
   //2. 
   //3. Create article structure.Create elements and add them value from getted elements. 
   //4. Add article structure to posts section in DOM
   //5. Add event listeners ot the buttons and make needed logic
   //5.a. Add the titles of the articles into sorted arr and attach them to DOM Archive section. 
   //5.b. Cath the article using parentNode.parentNode from event target and remove() it.

   let archive = [];

   let authorElement = document.getElementById('creator');
   let titleElement = document.getElementById('title');
   let categoryElement = document.getElementById('category');
   let contentElement = document.getElementById('content');
   let createButton = document.querySelector('.site-content button');

   let divPosts = document.querySelector('.site-content section');

   let archiveSection = document.querySelector('.archive-section ol');

   createButton.addEventListener('click', (e) => {

      e.preventDefault();

      let article = document.createElement('article');
      let heading = document.createElement('h1');
      heading.textContent = titleElement.value;

      let categoryParagraph = document.createElement('p');
      categoryParagraph.textContent = 'Category:';
      let strongInCategoryParagraph = document.createElement('strong');
      strongInCategoryParagraph.textContent = categoryElement.value;
      categoryParagraph.appendChild(strongInCategoryParagraph);

      let creatorParagraph = document.createElement('p');
      creatorParagraph.textContent = 'Creator:';
      let strongInCreatorParagraph = document.createElement('strong');
      strongInCreatorParagraph.textContent = authorElement.value;
      creatorParagraph.appendChild(strongInCreatorParagraph);

      let contentParagraph = document.createElement('p');
      contentParagraph.textContent = contentElement.value;

      let divElemrnt = document.createElement('div');
      divElemrnt.classList.add('buttons');

      let deleteButton = document.createElement('button');
      deleteButton.classList.add("btn", "delete");
      deleteButton.addEventListener('click', deleteFunc);
      deleteButton.textContent = 'Delete';

      let archiveButton = document.createElement('button');
      archiveButton.classList.add("btn", "archive");
      archiveButton.addEventListener('click', archiveFunc);

      archiveButton.textContent = 'Archive';

      divElemrnt.appendChild(deleteButton);
      divElemrnt.appendChild(archiveButton);

      article.appendChild(heading);
      article.appendChild(categoryParagraph);
      article.appendChild(creatorParagraph);
      article.appendChild(contentParagraph);
      article.appendChild(divElemrnt);

      divPosts.appendChild(article);
      
      authorElement.value = '';
      titleElement.value = '';
      categoryElement.value = '';
      contentElement.value = '';
   }); 

   function deleteFunc(e){
      let elementForRemoving = e.currentTarget
      .parentElement
      .parentElement;
      elementForRemoving.remove();

   }

   function archiveFunc(e){

      archiveSection.innerHTML = '';//Така е по-просто, но долното е първоначалната ми идея!
      // let archiveSectionArr = Array.from(archiveSection.children);
      // for (const element of archiveSectionArr) {
      //    element.remove();
      // }


     let elementForArchivate = e.target
     .parentElement
     .parentElement.children;//Тук по лесно става с: let textOfElementForArchivate =  elementForArchivate.querySelector(h1);

     let elementsForArchivate = Array.from(elementForArchivate);//вместо това
     let textOfElementForArchivate = elementsForArchivate[0].textContent;//и това, ама нещо ми се чупи!??


     archive.push(textOfElementForArchivate);
     let sortedArchive = archive.sort((a, b) => a.localeCompare(b));
     for (const title of sortedArchive) {
        let liElement = document.createElement('li');
        liElement.textContent = title;

        archiveSection.appendChild(liElement);
     }

     let elementForRemoving = e.target
     .parentElement
     .parentElement;
     elementForRemoving.remove();
   }

}
