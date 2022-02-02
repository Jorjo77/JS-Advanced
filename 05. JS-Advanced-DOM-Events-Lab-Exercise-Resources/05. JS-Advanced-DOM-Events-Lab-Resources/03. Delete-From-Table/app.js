function deleteByEmail() {
    const emailInput = document.querySelector('input[name = "email"]').value;
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    const resultElement = document.getElementById('result');
    let deleted = false;
    for (const row of rows) {
        let email = row.children[1].textContent;
        if (email===emailInput) {
            row.remove();
           //row.parentNode.removeChild(row); 
           deleted = true;
           resultElement.textContent = 'Deleted.';
        }
    }// for-а може да се замени с функционално решение с filter или reduce и проверка. 
    if (deleted != true) {
        resultElement.textContent = 'Not found.';
    }
}