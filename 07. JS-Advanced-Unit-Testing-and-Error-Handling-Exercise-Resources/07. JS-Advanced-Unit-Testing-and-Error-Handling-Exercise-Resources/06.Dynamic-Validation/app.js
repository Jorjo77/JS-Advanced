function validate() {
    let inputElement = document.getElementById('email');

    inputElement.addEventListener('change', changeValidate);

    function changeValidate(emailForValidating) {
        emailForValidating = inputElement.value;

        let validationRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;

        if (validationRegex.test(emailForValidating)) {
            inputElement.classList.remove('error');
        } else {
            inputElement.classList.add('error');
        }
    }
}