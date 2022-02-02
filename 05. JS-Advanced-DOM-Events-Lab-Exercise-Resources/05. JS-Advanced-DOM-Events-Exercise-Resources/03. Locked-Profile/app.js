function lockedProfile() {

    let buttons = Array.from(document.querySelectorAll('#main .profile button'));

    buttons.forEach(x=>x.addEventListener('click', toggleButton));

    function toggleButton(e) {
        let button = e.target;
        let profile = button.parentElement;
        let radioButton = profile.querySelector('input:checked');
        if (radioButton.value === 'unlock') {
            let hiddenFieldElement = button.previousElementSibling;//това е малко екзотично хващане на предишен съседен елемент!!!
            hiddenFieldElement.style.display = hiddenFieldElement.style.display==='block'
            ?'none'
            :'block';
            button.textContent = button.textContent === 'Show more'
            ? 'Hide it'
            : 'Show more';
            }
        }
    }

    //Интересно решение с по-устойчиви селектори:
    // //Select initial DOM Elements
    // //let profiles = Array.from(document.querySelectorAll('#main .profile'));
    // let buttons = document.querySelectorAll('#main .profile button');
    
    // //Attach event listeners to buttons
    // for (let index = 0; index < buttons.length; index++) {
    //     buttons[index].addEventListener('click', ()=> {
    //         //Get radio button for profiel
    //         let radioButton = document.querySelector(`input[name="user${index +1}Locked"]:checked`);
            
    //         //Check if profiel is unlocked
    //         if (radioButton.value === 'unlock') {
    //         //Get hidden field
    //         let hiddenFieldElement = document.getElementById(`user${index+1}HiddenFields`);
    //         //Toggle hidden field display
    //         hiddenFieldElement.style.display = hiddenFieldElement.style.display==='block'
    //         ?'none'
    //         :'block';
    //         buttons[index].textContent = buttons[index].textContent === 'Show more'
    //         ? 'Hide it'
    //         : 'Show more';
    //         }

    //     });
        
    // }

//}