function validate() {
    //select input field and add change event listener
    const input = document.getElementById('email').addEventListener('change', onChange);

    function onChange(e){
    //onChange -> validate input
    //добра практика е този регекс /^[a-z]+@[a-z]+\.[a-z]+$/ да се сложи на променлива: let regex = /^[a-z]+@[a-z]+\.[a-z]+$/; 

        const email = e.target.value;
        if (/^[a-z]+@[a-z]+\.[a-z]+$/.test(email)) {
    //b. if valid -> remove class error 
            e.target.className = '';
        } else {
    //a. else -> add class error
    e.target.className = 'error';
        }
    }
}