function focused() {
    //select all input fields
    //add listener for focus event
    //add listener for blur event
   Array.from(document.querySelectorAll('input')).forEach(i=>{
        i.addEventListener('focus', onFocus);
        i.addEventListener('blur', onBlur);
    });




    function onFocus(e) {
    //onFocus -> select input parent -> apply class "focused"
    e.target.parentNode.className = 'focused';
    }

    function onBlur(e) {
    //onBlur -> select input parent -> remove class "focused"
    e.target.parentNode.className = '';
    }
}  