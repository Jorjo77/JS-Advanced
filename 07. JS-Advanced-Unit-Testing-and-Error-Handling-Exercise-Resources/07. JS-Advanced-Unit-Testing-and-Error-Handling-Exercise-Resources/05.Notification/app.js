function notify(message) {

  //1. Get divElement that need to desplay info.

  //2. Create notify function and add to divElement text value
  //2a. Change display stile - it has to be 'block'

  //3. Add 'click' event listener to divElement
  //3a. Create hide function and change display stile of divElement to 'none'

  let divElement = document.getElementById('notification');
  divElement.textContent = message;
  divElement.style.display = 'block';

  divElement.addEventListener('click', hideFunc);

  function hideFunc() {
    divElement.style.display = 'none';

  }
}