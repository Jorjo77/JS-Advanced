function validate() {


    let usernameField = document.getElementById('username');
    let emailField = document.getElementById('email');
    let passwordField = document.getElementById('password');
    let confirmPasswordField = document.getElementById('confirm-password');

    let fildSetCompanyInfo = document.getElementById('companyInfo');

    let isChecked;
    let isValideUsernameField;
    let isValideEmailField ;
    let isValidePasswordField;
    let isValideConfirmPassword;
    let isValideCompanyFeld;
    let isValid = false;;

    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', validateFelds);

    function validateFelds(e) {
        e.preventDefault();
        let validDiv = document.getElementById('valid');

        validateUsername();
        validateEmail();
        validatePasswords();
        validateCompanyInfo();

        if (isValid) {
            validDiv.style.display = 'block';
        } else {
            validDiv.style.display = 'none';
        }
    }

    function validateUsername() {
        let username = usernameField.value;
        let usernameRegexValidator = /^[a-zA-Z0-9]{3,20}$/
        if (!usernameRegexValidator.test(username)) {
            usernameField.style.borderColor = 'red';
            isValideUsernameField = false;
        } else {
            usernameField.style.border = 'none';
            isValideUsernameField = true;
        }
    }

    function validateEmail() {
        let email = emailField.value;
        let emailRegexValidator = /^.*@.*\.*$/
        if (!emailRegexValidator.test(email)) {
            emailField.style.borderColor = 'red';
            isValideEmailField = false;
        } else {
            emailField.style.border = 'none';
            isValideEmailField = true;
        }
    }
    function validatePasswords(){
        let password = passwordField.value;
        let passwordRegexValidator = /^\w{5,15}$/;
        if (!passwordRegexValidator.test(password)) {
            passwordField.style.borderColor = 'red';
            isValidePasswordField = false;
        } else {
            passwordField.style.border = 'none';
            isValidePasswordField = true;
        }
    
        let confirmPassword = confirmPasswordField.value;
    
        if (password!==confirmPassword||
            confirmPassword === undefined||
            confirmPassword ===''||
            isValidePasswordField === false) {
            confirmPasswordField.style.borderColor = 'red';
            passwordField.style.borderColor = 'red';
            isValidePasswordField = false;
        } else {
            confirmPasswordField.style.border = 'none';
            isValideConfirmPassword = true;
        }
    }

    function validateCompanyInfo(){
        if (isChecked) {
            let companyNumberField = document.getElementById('companyNumber');
            let companyNumber = companyNumberField.value;
    
            if (companyNumber.trim() !=='' && !isNaN(Number(companyNumber))) {
                companyNumber = Number(companyNumber);
                if (companyNumber < 1000 || 
                    companyNumber > 9999 ||
                    companyNumber === undefined) {
                    companyNumberField.style.borderColor = 'red';
                    isValideCompanyFeld = false;
                } else {
                    companyNumberField.style.border = 'none';
                    isValideCompanyFeld = true;
                }
            }
    
            if (isValideUsernameField&&
                isValideEmailField&&
                isValidePasswordField&&
                isValideConfirmPassword&&
                isValideCompanyFeld) {
                    isValid = true;
            }
        } else {
    
            if (isValideUsernameField&&
                isValideEmailField&&
                isValidePasswordField&&
                isValideConfirmPassword) {
                    isValid = true;
            }
        }
    }

    let inputChecbox = document.getElementById('company');
    inputChecbox.addEventListener('change', exposeCompanyInfo);

    function exposeCompanyInfo(e) {


        if (e.target.checked) {
            fildSetCompanyInfo.style.display = 'block';  
            isChecked = true;
        } else {
            fildSetCompanyInfo.style.display = 'none';    
        }

    }
}
