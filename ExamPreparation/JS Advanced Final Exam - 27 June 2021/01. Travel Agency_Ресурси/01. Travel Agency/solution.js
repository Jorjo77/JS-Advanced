window.addEventListener('load', solution);

function solution() {


  let fullNameInputElement = document.getElementById('fname');
  let fullNameLable = document.querySelector('#form :nth-child(1)').textContent;

  let emailInputElement = document.getElementById('email');
  let emailLable = document.querySelector('#form :nth-child(2)').textContent;

  let phoneNumberInputElement = document.getElementById('phone');
  let phoneNumberLable = document.querySelector('#form :nth-child(3)').textContent;

  let addressInputElement = document.getElementById('address');
  let addressLable = document.querySelector('#form :nth-child(4)').textContent;

  let postalCodeInputElement = document.getElementById('code');
  let postalCodeLable = document.querySelector('#form :nth-child(5)').textContent;

  let submitButton = document.getElementById('submitBTN');
  submitButton.addEventListener('click', submittInfo);



  function submittInfo(e) {
    e.preventDefault;

    if (fullNameInputElement.value !== '' || emailInputElement.value !== '') {
      let prieviewElementUl = document.getElementById('infoPreview');

      let fullNameLiElement = document.createElement('li');
      let fullNameInputValue = fullNameInputElement.value;
      fullNameLiElement.textContent = `${fullNameLable} ${fullNameInputValue}`;
  
      let emailLiElement = document.createElement('li');
      let emailInputValue = emailInputElement.value;
      emailLiElement.textContent = `${emailLable} ${emailInputValue}`;
  
      let phoneNumberLiElement = document.createElement('li');
      let phoneNumberInputValue = phoneNumberInputElement.value;
      phoneNumberLiElement.textContent = `${phoneNumberLable} ${phoneNumberInputValue}`;
  
      let addressLiElement = document.createElement('li');
      let addressInputValue = addressInputElement.value;
      addressLiElement.textContent = `${addressLable} ${addressInputValue}`;
  
      let postalCodeLiElement = document.createElement('li');
      let postalCodeInputValue = postalCodeInputElement.value;
      postalCodeLiElement.textContent = `${postalCodeLable} ${postalCodeInputValue}`;
  
      prieviewElementUl.appendChild(fullNameLiElement);
      prieviewElementUl.appendChild(emailLiElement);
      prieviewElementUl.appendChild(phoneNumberLiElement);
      prieviewElementUl.appendChild(addressLiElement);
      prieviewElementUl.appendChild(postalCodeLiElement);

      fullNameInputElement.value = '';
      emailInputElement.value = '';
      phoneNumberInputElement.value = '';
      addressInputElement.value = '';
      postalCodeInputElement.value = '';


      let editButton = document.getElementById('editBTN');
      editButton.addEventListener('click', editInfo);
      let continueButton = document.getElementById('continueBTN');
      continueButton.addEventListener('click', completeReservation);

      submitButton.disabled = true;
      editButton.disabled = false;
      continueButton.disabled = false;

      function editInfo(e) {
        fullNameInputElement.value = fullNameInputValue;
        emailInputElement.value = emailInputValue;
        phoneNumberInputElement.value = phoneNumberInputValue;
        addressInputElement.value = addressInputValue;
        postalCodeInputElement.value = postalCodeInputValue;

        fullNameLiElement.remove();
        emailLiElement.remove();;
        phoneNumberLiElement.remove();
        addressLiElement.remove();
        postalCodeLiElement.remove();


        submitButton.disabled = false;
        editButton.disabled = true;
        continueButton.disabled = true;
      }

      function completeReservation() {

        let blockDiv = document.getElementById('block');
        blockDiv.innerHTML = '';
        let h3Element = document.createElement('h3');
        h3Element.textContent = 'Thank you for your reservation!';
        blockDiv.appendChild(h3Element);
      }
    }

  }

}
