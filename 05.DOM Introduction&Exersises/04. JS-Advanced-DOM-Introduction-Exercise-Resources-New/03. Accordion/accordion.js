function toggle() {

    let button = document.getElementsByClassName('button')[0];

    //моето решение
    // if (button.textContent==='Less') {
    //     document.getElementById('extra').style.display = 'none';
    //     button.textContent = 'More'; 
    //     return;  
    // }

    // if (button.textContent==='More') {
    //     document.getElementById('extra').style.display = 'block';
    //     button.textContent = 'Less'; 
    //     return;   
    // }

    //по функционално
    let textDiv = document.getElementById('extra');

    button.textContent = button.textContent === 'More' ? 'Less' : 'More';
    textDiv.style.display = textDiv.style.display ==='block' ? 'none' : 'block';
}